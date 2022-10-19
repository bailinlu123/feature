package com.example.company.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.company.entity.Contract;
import com.example.company.entity.User;
import com.example.company.service.ContractServiceImpl;
import com.example.company.service.UserServiceImpl;
import com.example.company.web.dto.ContractDto;

@Controller
@RequestMapping("/contracts")
public class ContractController {

	@Autowired
	private ContractServiceImpl contractService;

	@Autowired
	private UserServiceImpl userService;

	public static final String Passed = "Passed";

	public static final String Failed = "Failed";

	public static final String[] Access = { "Business department", "Fnancial department", "Legal department",
			"Customer", "Management" };

	public static final String[] Process = { "10%(Review in Business department)", "20%(Review in Fnancial department)",
			"40%(Review in Legal department)", "60%(Review in Customer)", "80%(Review in Management)", "100%" };

	public static final String[] ProcessStyle = { "width:10%", "width:20%", "width:40%", "width:60%", "width:80%",
			"width:100%" };

	private Contract changeDtoToEntity(ContractDto dto) {
		Contract ent = new Contract();
		ent.setAmount(dto.getAmount());
		ent.setCommodity(dto.getCommodity());
		ent.setContactType(dto.getContactType());
		ent.setDescription(dto.getDescription());
		ent.setEffectiveDate(dto.getEffectiveDate());
		ent.setExpirationDate(dto.getExpirationDate());
		ent.setName(dto.getName());
		ent.setResult(dto.getResult());
		ent.setStatus(dto.getStatus());
		ent.setSupplier(dto.getSupplier());
		ent.setTotalSum(dto.getTotalSum());
		ent.setReason(dto.getReason());
		ent.setProcess(dto.getProcess());
		return ent;
	}

	private ContractDto changeEntityToDto(Contract ent) {
		ContractDto dto = new ContractDto();

		dto.setAmount(ent.getAmount());
		dto.setCommodity(ent.getCommodity());
		dto.setContactDepartment(ent.getContactDepartment());
		dto.setContactPerson(ent.getContactPerson());
		dto.setContactType(ent.getContactType());
		dto.setDescription(ent.getDescription());
		dto.setEffectiveDate(ent.getEffectiveDate());
		dto.setExpirationDate(ent.getExpirationDate());
		dto.setId(ent.getId());
		dto.setName(ent.getName());
		dto.setResult(ent.getResult());
		dto.setStatus(ent.getStatus());
		dto.setSupplier(ent.getSupplier());
		dto.setTotalSum(ent.getTotalSum());
		dto.setReason(ent.getReason());
		dto.setUpdateUser(ent.getUpdateUser());
		dto.setProcess(ent.getProcess());
		dto.setAccessable(ent.getAccessable());
		dto.setProcessStyle(ent.getProcessStyle());

		return dto;
	}

	@GetMapping
	public String index(Model model) {
		List<Contract> ents = contractService.findAll();
		List<ContractDto> contracts = new ArrayList<ContractDto>();
		if (ents != null && ents.size() > 0) {
			ents.forEach(data -> contracts.add(changeEntityToDto(data)));
		}
		model.addAttribute("contracts", contracts);

		List<Contract> ents1 = contractService.findByResult(null);
		List<ContractDto> contracts1 = new ArrayList<ContractDto>();
		if (ents1 != null && ents1.size() > 0) {
			ents1.forEach(data -> contracts1.add(changeEntityToDto(data)));
		}
		model.addAttribute("contracts1", contracts1);

		List<Contract> ents2 = contractService.findByResult(Passed);
		List<ContractDto> contracts2 = new ArrayList<ContractDto>();
		if (ents2 != null && ents2.size() > 0) {
			ents2.forEach(data -> contracts2.add(changeEntityToDto(data)));
		}
		model.addAttribute("contracts2", contracts2);

		List<Contract> ents3 = contractService.findByResult(Failed);
		List<ContractDto> contracts3 = new ArrayList<ContractDto>();
		if (ents3 != null && ents3.size() > 0) {
			ents3.forEach(data -> contracts3.add(changeEntityToDto(data)));
		}
		model.addAttribute("contracts3", contracts3);

		return "contracts/index";
	}

	private User getUser() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		String username;
		if (principal instanceof UserDetails) {
			username = ((UserDetails) principal).getUsername();
		} else {
			username = principal.toString();
		}

		User user = userService.findByEmail(username);
		return user;
	}

	@GetMapping("{id}")
	public String getDetial(@PathVariable Long id, Model model) {
		Contract ent = contractService.findById(id);
		model.addAttribute("contract", changeEntityToDto(ent));
		User user = getUser();
		if (Access[3].equals(user.getUserRoles()) && (Access[3].equals(ent.getAccessable())) ||
				ent.getAccessable().equals(user.getDepartment())) {
			return "contracts/edit1";
		}
		return "contracts/edit2";
	}

	@RequestMapping(method = RequestMethod.POST, params = "action=delete")
	public String deleteDetail(@ModelAttribute("contract") @Valid ContractDto dto) {
		contractService.deleteById(dto.getId());
		return "redirect:contracts";
	}

	@RequestMapping(method = RequestMethod.POST, params = "action=save")
	public String saveDetail(@ModelAttribute("contract") @Valid ContractDto dto) {
		Contract ent = contractService.findById(dto.getId());
		ent.setAmount(dto.getAmount());
		ent.setCommodity(dto.getCommodity());
		ent.setContactType(dto.getContactType());
		ent.setDescription(dto.getDescription());
		ent.setEffectiveDate(dto.getEffectiveDate());
		ent.setExpirationDate(dto.getExpirationDate());
		ent.setName(dto.getName());
		ent.setStatus(dto.getStatus());
		ent.setSupplier(dto.getSupplier());
		ent.setTotalSum(dto.getTotalSum());
		ent.setReason(dto.getReason());
		ent.setProcess(dto.getProcess());
		ent.setUpdateUser(getUser().getEmail());
		ent.setResult(null);
		contractService.save(ent);
		return "redirect:contracts/" + dto.getId().toString() + "?success";
	}

	@RequestMapping(method = RequestMethod.POST, params = "action=pass")
	public String pass(@ModelAttribute("contract") @Valid ContractDto dto) {
		Contract ent = contractService.findById(dto.getId());
		String access = ent.getAccessable();
		if (Access[0].equals(access)) {
			ent.setAccessable(Access[1]);
			ent.setProcess(Process[1]);
			ent.setProcessStyle(ProcessStyle[1]);
			ent.setResult(null);
		} else if (Access[1].equals(access)) {
			ent.setAccessable(Access[2]);
			ent.setProcess(Process[2]);
			ent.setProcessStyle(ProcessStyle[2]);
			ent.setResult(null);
		} else if (Access[2].equals(access)) {
			ent.setAccessable(Access[3]);
			ent.setProcess(Process[3]);
			ent.setProcessStyle(ProcessStyle[3]);
			ent.setResult(null);
		} else if (Access[3].equals(access)) {
			ent.setAccessable(Access[4]);
			ent.setProcess(Process[4]);
			ent.setProcessStyle(ProcessStyle[4]);
			ent.setResult(null);
		} else if (Access[4].equals(access)) {
			ent.setAccessable("");
			ent.setProcess(Process[5]);
			ent.setProcessStyle(ProcessStyle[5]);
			ent.setResult(Passed);
		}
		ent.setAmount(dto.getAmount());
		ent.setCommodity(dto.getCommodity());
		ent.setContactType(dto.getContactType());
		ent.setDescription(dto.getDescription());
		ent.setEffectiveDate(dto.getEffectiveDate());
		ent.setExpirationDate(dto.getExpirationDate());
		ent.setName(dto.getName());
		ent.setStatus(dto.getStatus());
		ent.setSupplier(dto.getSupplier());
		ent.setTotalSum(dto.getTotalSum());
		ent.setReason(dto.getReason());
		ent.setUpdateUser(getUser().getEmail());

		contractService.save(ent);
		return "redirect:contracts";
	}

	@RequestMapping(method = RequestMethod.POST, params = "action=fail")
	public String fail(@ModelAttribute("contract") @Valid ContractDto dto) {
		Contract ent = contractService.findById(dto.getId());
		ent.setProcess(Process[5]);
		ent.setProcessStyle(ProcessStyle[5]);
		ent.setResult(Failed);
		ent.setAmount(dto.getAmount());
		ent.setCommodity(dto.getCommodity());
		ent.setContactType(dto.getContactType());
		ent.setDescription(dto.getDescription());
		ent.setEffectiveDate(dto.getEffectiveDate());
		ent.setExpirationDate(dto.getExpirationDate());
		ent.setName(dto.getName());
		ent.setStatus(dto.getStatus());
		ent.setSupplier(dto.getSupplier());
		ent.setTotalSum(dto.getTotalSum());
		ent.setReason(dto.getReason());
		ent.setUpdateUser(getUser().getEmail());
		ent.setAccessable("");

		contractService.save(ent);
		return "redirect:contracts";
	}

	@RequestMapping(method = RequestMethod.POST, params = "action=rereview")
	public String rereview(@ModelAttribute("contract") @Valid ContractDto dto) {
		Contract ent = contractService.findById(dto.getId());
		String access = ent.getAccessable();
		if (Access[0].equals(access)) {
			ent.setAccessable(ent.getContactDepartment());
			ent.setProcess("5%(" + ent.getContactDepartment() + ")");
			ent.setProcessStyle("width:5%");
		} else if (Access[1].equals(access)) {
			ent.setAccessable(Access[0]);
			ent.setProcess(Process[0]);
			ent.setProcessStyle(ProcessStyle[0]);
		} else if (Access[2].equals(access)) {
			ent.setAccessable(Access[1]);
			ent.setProcess(Process[1]);
			ent.setProcessStyle(ProcessStyle[1]);
		} else if (Access[3].equals(access)) {
			ent.setAccessable(Access[2]);
			ent.setProcess(Process[2]);
			ent.setProcessStyle(ProcessStyle[2]);
		} else if (Access[4].equals(access)) {
			ent.setAccessable(Access[3]);
			ent.setProcess(Process[3]);
			ent.setProcessStyle(ProcessStyle[3]);
		}
		ent.setAmount(dto.getAmount());
		ent.setCommodity(dto.getCommodity());
		ent.setContactType(dto.getContactType());
		ent.setDescription(dto.getDescription());
		ent.setEffectiveDate(dto.getEffectiveDate());
		ent.setExpirationDate(dto.getExpirationDate());
		ent.setName(dto.getName());
		ent.setResult(dto.getResult());
		ent.setStatus(dto.getStatus());
		ent.setSupplier(dto.getSupplier());
		ent.setTotalSum(dto.getTotalSum());
		ent.setReason(dto.getReason());
		ent.setUpdateUser(getUser().getEmail());
		ent.setResult(null);

		contractService.save(ent);
		return "redirect:contracts";
	}

	@GetMapping("new")
	public String newContract(Model model) {
		User user = getUser();
		ContractDto dto = new ContractDto();
		dto.setContactPerson(user.getEmail());
		dto.setContactDepartment(user.getDepartment());
		dto.setUpdateUser(user.getEmail());
		model.addAttribute("contract", dto);
		return "contracts/new";
	}

	@PostMapping
	public String addProduct(@ModelAttribute("contract") @Valid ContractDto dto, BindingResult result) {

		Contract contract = changeDtoToEntity(dto);
		User user = getUser();
		contract.setContactPerson(user.getEmail());
		contract.setContactDepartment(user.getDepartment());
		contract.setUpdateUser(user.getEmail());
		contract.setProcess(Process[0]);
		contract.setProcessStyle(ProcessStyle[0]);
		contract.setAccessable(Access[0]);

		contractService.save(contract);

		return "redirect:contracts/new?success";
	}
}

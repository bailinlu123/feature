package com.example.company.controller;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.company.entity.DetailReport;
import com.example.company.entity.Report;
import com.example.company.entity.User;
import com.example.company.service.DetailReportServiceImpl;
import com.example.company.service.ReportServiceImpl;
import com.example.company.service.UserServiceImpl;
import com.example.company.web.dto.DetailReportDto;
import com.example.company.web.dto.ReportDayDto;

@Controller
@RequestMapping("/dailyReport")
public class DailyReportController {

	@Autowired
	private ReportServiceImpl reportService;

	@Autowired
	private DetailReportServiceImpl detailReportService;

	public String[] week_name = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };

	public String[] status = { "01:Normal", "02:Weekdays", "03:Holidays", "04:Vacation" };

	public final long workHour = 8L;

	@Autowired
	private UserServiceImpl userService;

	private void makeWorkTime(List<DetailReport> detail) {
		if (detail == null || detail.size() == 0) {
			return;
		}
		detail.forEach(data -> {
			if (data.getStartTime() != null && !data.getStartTime().isBlank() &&
					data.getEndTime() != null && !data.getEndTime().isBlank() &&
					data.getBreakTime() != null && !data.getBreakTime().isBlank()) {
				int startH = Integer.parseInt(data.getStartTime().split(":")[0]);
				int startM = Integer.parseInt(data.getStartTime().split(":")[1]);
				int endH = Integer.parseInt(data.getEndTime().split(":")[0]);
				int endM = Integer.parseInt(data.getEndTime().split(":")[1]);
				int breakH = Integer.parseInt(data.getBreakTime().split(":")[0]);
				int breakM = Integer.parseInt(data.getBreakTime().split(":")[1]);

				int staH = startM + breakM > 59 ? startH + breakH + 1 : startH + breakH;
				int staM = startM + breakM > 59 ? startM + breakM - 60 : startM + breakM;

				LocalDateTime ldate1 = LocalDateTime.of(2000, 1, 1, staH, staM, 0);
				LocalDateTime ldate2 = LocalDateTime.of(2000, 1, 1, endH, endM, 0);

				Long hour = ChronoUnit.HOURS.between(ldate1, ldate2);
				Long minute = ChronoUnit.MINUTES.between(ldate1, ldate2) - hour * 60;
				String workTime = (hour.toString().length() == 1 ? "0" + hour.toString() : hour.toString()) +
						":" +
						(minute.toString().length() == 1 ? "0" + minute.toString() : minute.toString());
				data.setWorkTime(workTime);
			}
		});
	}

	private void saveTotalReport(long reportId, List<DetailReport> details) {
		Report report = reportService.findById(reportId);

		int totalday = details.stream().filter(x -> x.getStatus().equals(status[0])).collect(Collectors.toList())
				.size();
		report.setTotalDays(String.valueOf(totalday));

		int weekdays = details.stream().filter(x -> x.getStatus().equals(status[1])).collect(Collectors.toList())
				.size();
		report.setWeekdays(String.valueOf(weekdays));

		int holidays = details.stream().filter(x -> x.getStatus().equals(status[2])).collect(Collectors.toList())
				.size();
		report.setHolidays(String.valueOf(holidays));

		int vacation = details.stream().filter(x -> x.getStatus().equals(status[3])).collect(Collectors.toList())
				.size();
		report.setVacation(String.valueOf(vacation));

		Long hour = 0l;
		Long minute = 0l;
		for (DetailReport data : details) {
			if (data.getWorkTime() != null && !data.getWorkTime().isBlank()) {
				int workH = Integer.parseInt(data.getWorkTime().split(":")[0]);
				int workM = Integer.parseInt(data.getWorkTime().split(":")[1]);
				minute = minute + workM > 59l ? minute + workM - 60l : minute + workM;
				hour = minute + workM > 59l ? hour + workH + 1 : hour + workH;
			}
		}
		String workTime = (hour.toString().length() == 1 ? "0" + hour.toString() : hour.toString()) +
				":" +
				(minute.toString().length() == 1 ? "0" + minute.toString() : minute.toString());
		report.setTotalWorkingHours(workTime);

		int workDay = Integer.parseInt(report.getTotalDays());
		Long basicHours = workDay * workHour;
		report.setBasicCommutingHours(String.valueOf(basicHours) + ":00");

		long overH = hour - basicHours;
		String min = minute < 10L ? "0" + String.valueOf(minute) : String.valueOf(minute);
		report.setOvertimeHours(String.valueOf(overH) + ":" + min);

		reportService.Save(report);
	}

	public ReportDayDto changeDetailReportToDto(DetailReport report) {
		ReportDayDto dto = new ReportDayDto();
		dto.setId(report.getId());
		dto.setBreakTime(report.getBreakTime());
		dto.setDay(report.getDay());
		dto.setDayOfTheWeek(report.getDayOfTheWeek());
		dto.setEndTime(report.getEndTime());
		dto.setRemarks(report.getRemarks());
		dto.setWorkTime(report.getWorkTime());
		dto.setStartTime(report.getStartTime());
		dto.setStatus(report.getStatus());
		if ((dto.getStatus() != null && !dto.getStatus().equals(status[0]))
				|| dto.getDayOfTheWeek().equals(week_name[0]) || dto.getDayOfTheWeek().equals(week_name[6])) {
			dto.setRest(true);
		} else {
			dto.setRest(false);
		}

		return dto;
	}

	private User getUser() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		String username;
		if (principal instanceof UserDetails) {
			username = ((UserDetails) principal).getUsername();
		} else {
			username = principal.toString();
		}

		return userService.findByEmail(username);
	}

	@GetMapping
	public String index(Model model,@RequestParam(name = "date", required=false) String date) {
		if(date != null) {
			addReportByDate(date);
		}
		List<Report> reports = reportService.findByUserId(getUser().getId());
		model.addAttribute("reports", reports);
		return "dailyReport/index";
	}

	@RequestMapping(method = RequestMethod.POST, params = "action=defaultInput")
	public String input(@ModelAttribute("detail") DetailReportDto detailReportDto, Model model, BindingResult result) {
		if (!detailReportDto.inputEndTime.isBlank() && !detailReportDto.inputEndTime.isBlank()
				&& detailReportDto.inputStartTime.compareTo(detailReportDto.inputEndTime) >= 0) {
			result.rejectValue("inputEndTime", null, "The end time is must be bigger than start time");
		}

		if (detailReportDto.inputBreakTime == null || detailReportDto.inputEndTime == null
				|| detailReportDto.inputStartTime == null) {
			result.rejectValue("", null, "The inputStartTime , inputEndTime and inputBreakTime in null");
		}

		if (result.hasErrors()) {
			return "dailyReport/show";
		}

		List<DetailReport> details = detailReportService.findByReportId(detailReportDto.getId());

		if (detailReportDto.inputBreakTime != null) {
			details.forEach(detail -> {
				if (!(detail.getDayOfTheWeek().equals(week_name[0]) || detail.getDayOfTheWeek().equals(week_name[6]))
						&& (detail.getBreakTime() == null || detail.getBreakTime().isBlank())) {
					detail.setBreakTime(detailReportDto.getInputBreakTime());
				}
			});
		}

		if (detailReportDto.inputEndTime != null) {
			details.forEach(detail -> {
				if (!(detail.getDayOfTheWeek().equals(week_name[0]) || detail.getDayOfTheWeek().equals(week_name[6]))
						&& (detail.getEndTime() == null || detail.getEndTime().isBlank())) {
					detail.setEndTime(detailReportDto.getInputEndTime());
				}
			});
		}

		if (detailReportDto.inputStartTime != null) {
			details.forEach(detail -> {
				if (!(detail.getDayOfTheWeek().equals(week_name[0]) || detail.getDayOfTheWeek().equals(week_name[6]))
						&& (detail.getStartTime() == null || detail.getStartTime().isBlank())) {
					detail.setStartTime(detailReportDto.getInputStartTime());
				}
			});
		}

		details.forEach(detail -> {
			if (detail.getDayOfTheWeek().equals(week_name[0]) || detail.getDayOfTheWeek().equals(week_name[6])) {
				detail.setStatus(status[1]);
			} else {
				detail.setStatus(status[0]);
			}
		});

		makeWorkTime(details);

		detailReportService.saveAll(details);
		saveTotalReport(detailReportDto.getId(), details);

		return "redirect:/dailyReport/" + detailReportDto.getId().toString();
	}

	@RequestMapping(method = RequestMethod.POST, params = "action=save")
	public String save(@ModelAttribute("detail") DetailReportDto detailReportDto, Model model, BindingResult result) {

		List<DetailReport> details = detailReportService.findByReportId(detailReportDto.getId());
		for (ReportDayDto report : detailReportDto.getReporDayDto()) {
			DetailReport detail = details.stream().filter(d -> d.getId().equals(report.getId()))
					.collect(Collectors.toList()).get(0);
			detail.setBreakTime(report.getBreakTime());
			detail.setDay(report.getDay());
			detail.setDayOfTheWeek(report.getDayOfTheWeek());
			detail.setEndTime(report.getEndTime());
			detail.setRemarks(report.getRemarks());
			detail.setStartTime(report.getStartTime());
			detail.setStatus(report.getStatus());
		}

		makeWorkTime(details);

		detailReportService.saveAll(details);
		saveTotalReport(detailReportDto.getId(), details);

		return "redirect:/dailyReport/" + detailReportDto.getId().toString();
	}

	@GetMapping("new")
	public String addReport(Model model) {
		String year = String.valueOf(YearMonth.now().getYear());
		String month = String.valueOf(YearMonth.now().getMonthValue());
		List<Report> exiting = reportService.findByYearAndMonthAndUserId(year, month, getUser().getId());
		if (exiting.size() == 0) {
			Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

			String username;
			if (principal instanceof UserDetails) {
				username = ((UserDetails) principal).getUsername();
			} else {
				username = principal.toString();
			}

			User user = userService.findByEmail(username);

			Report report = new Report();
			report.setUserId(user.getId());
			report.setEmail(user.getEmail());
			report.setHolidays("0");
			report.setBasicCommutingHours("0");
			report.setMonth(month);
			report.setOvertimeHours("0");
			report.setStatus("0");
			report.setTotalDays("0");
			report.setTotalWorkingHours("0");
			report.setVacation("0");
			report.setWeekdays("0");
			report.setYear(year);

			reportService.Save(report);
		}

		return "redirect:/dailyReport";
	}

	private void addReportByDate(String date) {
		String month = date.substring(5,7);
		String year = date.substring(0,4);
		List<Report> exiting = reportService.findByYearAndMonthAndUserId(year, month, getUser().getId());
		if (exiting.size() == 0) {
			Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

			String username;
			if (principal instanceof UserDetails) {
				username = ((UserDetails) principal).getUsername();
			} else {
				username = principal.toString();
			}

			User user = userService.findByEmail(username);

			Report report = new Report();
			report.setUserId(user.getId());
			report.setEmail(user.getEmail());
			report.setHolidays("0");
			report.setBasicCommutingHours("0");
			report.setMonth(month);
			report.setOvertimeHours("0");
			report.setStatus("0");
			report.setTotalDays("0");
			report.setTotalWorkingHours("0");
			report.setVacation("0");
			report.setWeekdays("0");
			report.setYear(year);

			reportService.Save(report);
		}
	}

	@GetMapping("new2")
	public String addReport2(Model model) {
		return "redirect:/dailyReport";
	}

	@GetMapping("{id}")
	public String show(@PathVariable Long id, Model model) {

		List<DetailReport> exiting = detailReportService.findByReportId(id);
		DetailReportDto detailReportDto = new DetailReportDto();
		List<ReportDayDto> dayDto = new ArrayList<ReportDayDto>();

		if (exiting.size() == 0) {
			exiting = new ArrayList<DetailReport>();
			Report report = reportService.findById(id);
			int year = Integer.parseInt(report.getYear());
			int month = Integer.parseInt(report.getMonth());
			Calendar c = Calendar.getInstance();
			c.set(year, month - 1, 1);
			int days = c.getActualMaximum(Calendar.DAY_OF_MONTH);
			for (int i = 1; i <= days; i++) {
				c.set(year, month - 1, i);
				DetailReport detail = new DetailReport();
				detail.setReportId(id);
				detail.setDay(report.getYear()
						+ (report.getMonth().length() == 1 ? "0" + report.getMonth() : report.getMonth())
						+ (String.valueOf(i).length() == 1 ? "0" + String.valueOf(i) : String.valueOf(i)));
				detail.setDayOfTheWeek(week_name[c.get(Calendar.DAY_OF_WEEK) - 1]);
				if (detail.getDayOfTheWeek().equals(week_name[0]) || detail.getDayOfTheWeek().equals(week_name[6])) {
					detail.setStatus(status[1]);
				} else {
					detail.setStatus(status[0]);
				}
				exiting.add(detail);
				dayDto.add(changeDetailReportToDto(detail));
			}

			detailReportService.saveAll(exiting);
		} else {
			for (DetailReport report : exiting) {
				dayDto.add(changeDetailReportToDto(report));
			}
		}

		detailReportDto.setInputEndTime("");
		detailReportDto.setInputStartTime("");
		detailReportDto.setBreakEndTime("");
		detailReportDto.setId(id);
		detailReportDto.setReporDayDto(dayDto);
		model.addAttribute("detail", detailReportDto);

		return "dailyReport/show";
	}
}

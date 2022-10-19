package com.example.company.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.SmartView;
import org.springframework.web.servlet.View;

import com.example.company.entity.User;
import com.example.company.service.UserServiceImpl;

@Component
public class ProductServiceInterceptor implements HandlerInterceptor {

	@Autowired
	private UserServiceImpl userService;

	public static boolean isUserLogged() {
		try {
			return !SecurityContextHolder.getContext().getAuthentication()
					.getName().equals("anonymousUser");
		} catch (Exception e) {
			return false;
		}
	}

	public static boolean isRedirectView(ModelAndView mv) {
		String viewName = mv.getViewName();
		if (viewName.startsWith("redirect:/")) {
			return true;
		}
		View view = mv.getView();
		return (view != null && view instanceof SmartView
				&& ((SmartView) view).isRedirectView());
	}

	private void addToModelUserDetails(ModelAndView model) {

		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		String username;
		if (principal instanceof UserDetails) {
			username = ((UserDetails) principal).getUsername();
		} else {
			username = principal.toString();
		}
		User user = userService.findByEmail(username);
		model.addObject("userRoles", user.getUserRoles());
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {

		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response,
			Object handler, ModelAndView modelAndView) throws Exception {

		if (modelAndView != null && !isRedirectView(modelAndView)) {
			if (isUserLogged()) {
				addToModelUserDetails(modelAndView);
			}
		}
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
			Exception exception) throws Exception {

	}
}
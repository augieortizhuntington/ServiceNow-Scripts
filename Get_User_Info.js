function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

   //Type appropriate comment here, and begin script below
	
	var collegue = g_form.getValue('collegue');
	var userEmail;
	var userDepartment;
	var userPhone;
	
	//Query User Table
	
	var user = new GlideRecord('sys_user');
	user.addQuery('sys_id', collegue);
	user.query();
	while(user.next()){
		userEmail = user.email;
		userDepartment = user.department;
		userPhone = user.mobilephone;
	   
	}

	g_form.setValue('email', userEmail);
	g_form.setValue('department', userDepartment);
	g_form.setValue('phone', userPhone);

}
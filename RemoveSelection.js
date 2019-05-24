function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

   //Type appropriate comment here, and begin script below
	var addVars = 'addMonitor,addOperator,addDeployer,addConfigurator,addICSAdmins,addAdministrator,addAuditor,addAdminSecMan';
	var removeVars = 'removeAll,removeMonitor,removeOperator,removeDeployer,removeConfigurator,removeICSAdmins,removeAdministrator,removeAuditor,removeAdminSecMan';
	addVars = addVars.split(',');
	removeVars = removeVars.split(',');
	
	for(var x = 0; x < addVars.length; x++)
	{
		g_form.setValue(addVars[x], false);
	}
	
	for(x = 0; x < removeVars.length; x++)
	{
		g_form.setValue(removeVars[x], false);
	}
   
}

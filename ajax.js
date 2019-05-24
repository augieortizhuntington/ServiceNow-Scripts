function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

	var ajax = new GlideAjax('MyDateTimeAjax');
	var date = g_form.getValue('dateEnhancement');
	ajax.addParam('sysparm_name', 'nowDateTime');
	ajax.addParam('date', date);
	ajax.getXML(function () {
		var current = ajax.getAnswer();
		if(current >= 1)
			{
				g_form.hideErrorBox("dateEnhancement"); 
			}
		else
			{
				g_form.showErrorBox("dateEnhancement", "Date must be 1 day in advance.");
				g_form.setValue("dateEnhancement", "");
				return false;
			}
	});
	
	
	
   //Type appropriate comment here, and begin script below
   
}
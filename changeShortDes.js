tfunction onLoad() {
   //Type appropriate comment here, and begin script below
	
	var short_description = g_form.getValue('short_description');
	if(short_description=='DataPower Request')
	{
		var requestType = g_form.getValue('requestType');
		
		if(requestType == "Add" || requestType == "Change")
		{
			g_form.setValue("short_description", "Add/Change Request", "Add/Change Request");
		}
		else
		{
			g_form.setValue("short_description", "Removal Request", "Removal Request");
		}
	}
   
}
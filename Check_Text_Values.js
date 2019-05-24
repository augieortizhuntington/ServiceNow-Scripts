function onSubmit() {
   //Type appropriate comment here, and begin script below
	
	var currentJob = g_form.getValue('currentJobFunction');
	var currentJobSelect = g_form.getOption('currentJobFunction', currentJob).text;

	var newJob = g_form.getValue('newJobFunction');
	var newJobSelect = g_form.getOption('newJobFunction', newJob).text;
	
	if(currentJobSelect == newJobSelect)
	{
		alert("You can not select the same option for Current and New Job Function.  Please make a new selection.");
		return false;
	}
	
}
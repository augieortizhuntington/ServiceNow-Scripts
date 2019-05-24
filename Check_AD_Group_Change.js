answer = ifScript();

function ifScript() {
	
	var currentJob = current.variables.currentJobFunction.getDisplayValue();
	var newJob = current.variables.newJobFunction.getDisplayValue();
	
	//Creating Array Util object so index of function becomes available
	var arrayUtil = new ArrayUtil();
	var group1 = new Array("New Teller", "Standard Teller", "Lead Teller");
	var group2 = new Array("Admin", "Manager", "Supervisor");
	
	
	if(arrayUtil.indexOf(group1, currentJob) >= 0 && arrayUtil.indexOf(group1, newJob)) >= 0 || arrayUtil.indexOf(group2, currentJob) >= 0 && arrayUtil.indexOf(group2, newJob) >=0)
		{
		//Same AD Group. Doesn't need change task
		return 'no';
	}
	
	else
		{
		
		return 'yes';
	}
}

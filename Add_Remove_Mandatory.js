function onSubmit(){
    //Set the mandatory checkbox variable names and total mandatory count here
   
    var mandatoryCount = 1;
   
	//If Add is selected
	var requestType = g_form.getValue('requestType');
	
	if(requestType == "Add")
	{
	    var mandatoryVars = 'addMonitor,addAdmin';
		var passed = forceMandatoryCheckboxes(mandatoryVars, mandatoryCount);
		if(!passed){
			//Abort the submit
			alert('You must select at least ' + mandatoryCount + ' add access.');
			return false;
		}
	}
	else if(requestType == "Change")
	{
		var mandatoryVars = 'addMonitor,addAdmin';
		var passedAdd = forceMandatoryCheckboxes(mandatoryVars, mandatoryCount);
		if(!passedAdd){
			//Abort the submit
			alert('You must select at least ' + mandatoryCount + ' add access.');
			return false;
		}
		else 
		{
			var mandatoryVars = 'removeMonitor,removeAdmin';
			var passedRemove = forceMandatoryCheckboxes(mandatoryVars, mandatoryCount);
			if(!passedRemove){
			//Abort the submit
				alert('You must select at least ' + mandatoryCount + ' remove access.');
				return false;
			}
		}
	}
	else
	{
		var mandatoryVars = 'removeMonitor,removeAdmin';
			var passedRemove = forceMandatoryCheckboxes(mandatoryVars, mandatoryCount);
			if(!passedRemove){
			//Abort the submit
				alert('You must select at least ' + mandatoryCount + ' remove access.');
				return false;
			}
	}
}

function onSubmit(){
    //Set the mandatory checkbox variable names and total mandatory count here
   
    var mandatoryCount = 1;
   
	//If Add is selected
	var requestType = g_form.getValue('requestType');
	
	if(requestType == "Add")
	{
	    var mandatoryVars = 'addMonitor,addOperator,addDeployer,addConfigurator,addICSAdmins,addAdministrator,addAuditor,addAdminSecMan';
		var passed = forceMandatoryCheckboxes(mandatoryVars, mandatoryCount);
		if(!passed){
			//Abort the submit
			alert('You must select at least ' + mandatoryCount + ' add access.');
			return false;
		}
	}
	else if(requestType == "Change")
	{
		var mandatoryVars = 'addMonitor,addOperator,addDeployer,addConfigurator,addICSAdmins,addAdministrator,addAuditor,addAdminSecMan';
		var passedAdd = forceMandatoryCheckboxes(mandatoryVars, mandatoryCount);
		if(!passedAdd){
			//Abort the submit
			alert('You must select at least ' + mandatoryCount + ' add access.');
			return false;
		}
		else 
		{
			var mandatoryVars = 'removeAll,removeMonitor,removeOperator,removeDeployer,removeConfigurator,removeICSAdmins,removeAdministrator,removeAuditor,removeAdminSecMan';
			var passedRemove = forceMandatoryCheckboxes(mandatoryVars, mandatoryCount);
			if(!passedRemove){
			//Abort the submit
				alert('You must select at least ' + mandatoryCount + ' remove access.');
				return false;
			}
		}
	}
	else
	{
			var mandatoryVars = 'remvoeAll,removeMonitor,removeOperator,removeDeployer,removeConfigurator,removeICSAdmins,removeAdministrator,removeAuditor,removeAdminSecMan';
			var passedRemove = forceMandatoryCheckboxes(mandatoryVars, mandatoryCount);
			if(!passedRemove){
			//Abort the submit
				alert('You must select at least ' + mandatoryCount + ' remove access.');
				return false;
			}
	}
}

function forceMandatoryCheckboxes(mandatory, count){
    //Split the mandatory variable names into an array
    mandatory = mandatory.split(',');
    var answer = false;
    var varFound = false;
    var numTrue = 0;
    //Check each variable in the array
    for(x=0;x<mandatory.length;x++){
        //Check to see if variable exists
        if(g_form.getControl(mandatory[x])){
            varFound = true;
            //Check to see if variable is set to 'true'
            if(g_form.getValue(mandatory[x]) == 'true'){
                numTrue ++;
                //Exit the loop if we have reached required number of 'true'
                if(numTrue >= count){
                    answer = true;
                    break;
                }
            }
        }
    }
    //If we didn't find any of the variables allow the submit
    if(varFound == false){
        answer = true;
    }
    //Return true or false
    return answer;
}
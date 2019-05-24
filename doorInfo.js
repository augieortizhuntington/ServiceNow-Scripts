//
// 	CLIENT SCIPRT AJAX IMPLEMENTATION
//
//	This calls the script include and recieves all the data back in an XML format

function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading)
        return;
 
var user = new GlideRecord('sys_user');
	user.addQuery('sys_id', g_form.getValue('currentOwner'));
	user.query();
	if(user.rows.length <= 0)
		{
			alert("Invalid user entered.");
			return;
		}
		

var ga = new GlideAjax('GetDoors');
ga.addParam('sysparm_name','getDoors');
ga.addParam('owner', g_form.getValue('currentOwner'));
ga.getXML(GetDoors);
}
 
function GetDoors(response) {
   
	
	var result = response.responseXML.getElementsByTagName("result");
	var answer = result[0].getAttribute("info");
	var isDoorOwner = result[0].getAttribute("isDoorOwner");
	
	if(isDoorOwner)
		g_form.setValue('doorInfo', answer);
	else
		{
		alert("Error message:  The selected colleague is not a door owner or approver.  Please try again");
		g_form.setValue('doorInfo', '');	
		}


	
  
}

//
//  AJAX INMPLEMENTATION FOR SCRIPT INCLUDES
//	
//	This is a sperate file to call to run on the server side.

var GetDoors = Class.create();
GetDoors.prototype = Object.extendsObject(AbstractAjaxProcessor, {
   getDoors: function() {
	  var info = "All doors owned by selected colleague: \n";
      var owner =  this.getParameter('owner');
	  
	  var door = new GlideRecord('u_security_doors');
	  door.addQuery('owned_by', owner);
	  door.query();
	
	  while(door.next()){
		  info += door.name + "\n";
		  isDoorOwner = true;
	  }
	   
	info += "\nAll door approval groups that the selected colleague is a member of: \n";
	//FIND ALL DOOR APPROVAL GROUPS THAT THE SELECTED COLLEAGUE IS A MEMBER OF
	
	var userGroups = new GlideRecord('sys_user_grmember');
	var group;
	userGroups.addQuery('user', owner);
	userGroups.query();
	var approvalGroups;
	var displayGroup;
	
	while(userGroups.next()) {
		
		group = userGroups.group;
		
		approvalGroups = new GlideRecord('u_security_doors');
		approvalGroups.addQuery('change_control', group);
		approvalGroups.query();
		
		while(approvalGroups.next()) {
			
			displayGroup = new GlideRecord('sys_user_group');
			displayGroup.addQuery('sys_id', approvalGroups.change_control);
			displayGroup.query();
			
			while(displayGroup.next()) {
				info += displayGroup.name + "\n";
				isDoorOwner = true;
			}
			
			
		}
		
	}
	   
	//ALTERNATE APPROVAL GROUPS;
	
	userGroups = new GlideRecord('sys_user_grmember');
	userGroups.addQuery('user', owner);
	userGroups.query();
	
	while(userGroups.next()) {
		
		group = userGroups.group;
		
		approvalGroups = new GlideRecord('u_security_doors');
		approvalGroups.addQuery('change_control', group);
		approvalGroups.query();
		
		while(approvalGroups.next()) {
			
			displayGroup = new GlideRecord('sys_user_group');
			displayGroup.addQuery('sys_id', approvalGroups.u_alternate_approver);
			displayGroup.query();
			
			while(displayGroup.next()) {
				info += displayGroup.name + "\n";
				isDoorOwner = true;
			}
			
			
		}
		
	}
	
	
	//BACKUP APPROVAL GROUPS;
	
	userGroups = new GlideRecord('sys_user_grmember');
	userGroups.addQuery('user', owner);
	userGroups.query();
	
	while(userGroups.next()) {
		
		group = userGroups.group;
		
		approvalGroups = new GlideRecord('u_security_doors');
		approvalGroups.addQuery('change_control', group);
		approvalGroups.query();
		
		while(approvalGroups.next()) {
			
			displayGroup = new GlideRecord('sys_user_group');
			displayGroup.addQuery('sys_id', approvalGroups.u_backup_approver);
			displayGroup.query();
			
			while(displayGroup.next()) {
				info += displayGroup.name + "\n";
				isDoorOwner = true;
			}
			
			
		}
		
	}
	
	   
	 var result = this.newItem("result");
 
	result.setAttribute("info", info);
	 
	result.setAttribute("isDoorOwner", isDoorOwner);
	
	   
   },
 
   _privateFunction: function() { // this function is not client callable     
 
   }
 
});
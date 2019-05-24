//* print error log if the name feild is empty. 
gs.log("Starting the Preferred name script...", "Door Script");
var start = new Date().getTime();
var approvalGroup;
var group;
var users;
var updateCount = 0;
var emptyGroups = 0;
var doorCount = 0;
var door = new GlideRecord('u_security_doors');
door.query();

gs.log("GROUP->OWNER", "Door Script");

while(door.next()){

	//Loop over doors

	approvalGroup = door.change_control;

	//Query Approval Group to locate an active user
	group = new GlideRecord('sys_user_grmember');
	group.addQuery('group', approvalGroup);
	group.query();
	
	group.next();

	if(group.getRowCount() > 0 && group.group.getDisplayValue() != "")
	{
		//Update Ownded by
		gs.log(group.group.getDisplayValue() + "->" + group.user.getDisplayValue(), "Door Script");
		door.owned_by = group.user;
		door.update();
		updateCount++;
	}
	else
	{
		emptyGroups++;
	}

	doorCount++;

}

gs.log("UPDATED OWNERS: " + updateCount, "Door Script");
gs.log("EMPTY GROUPS: " + emptyGroups, "Door Script");
gs.log("TOTAL DOORS: " + doorCount, "Door Script");

var end = new Date().getTime();

var time = end - start;

gs.log("Execution time: " + (time/1000) + " seconds", "Prefer Script");
gs.log("Execution time: ~" + ((time/1000)/60) + " mins", "Prefer Script");

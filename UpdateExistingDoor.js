//Variables for Owners

var currentOwner = current.variables.currentOwner;
var proposedDoorOwner = current.variables.proposedDoorOwner;

//FIND ALL DOORS THE SELECTED OWNER IS OWNED BY 
	var info = "All doors owned by selected colleague: \n";
	var owner = current.variables.currentOwner;
	var door = new GlideRecord('u_security_doors');
	door.addQuery('owned_by', owner);
	door.query();
	
	while(door.next()){
		door.owned_by = proposedDoorOwner;
		door.update();
		gs.log("Door: " + door.name + "; Old Owner: " + currentOwner + "; New Owner: " + proposedDoorOwner + "\n", "UDPATE_DOORS");
	}

//FIND ALL GROUPS THE SELECTED OWNER IS APART OF

var userGroups = new GlideRecord('sys_user_grmember');
var group;
userGroups.addQuery('user', owner);
userGroups.query();

while(userGroups.next()) {

		//FIND ALL GROUPS THE SELECTED OWNER IS AN APPROVER FOR
		group = userGroups.group;
		approvalGroups = new GlideRecord('u_security_doors');
		approvalGroups.addQuery('change_control', group);
		approvalGroups.query();
		
		while(approvalGroups.next()) {
			
			//REPLACE SELECTED OWNER WITH PROPOSED OWNER
			userGroups.user = proposedDoorOwner;
			userGroups.update();
			gs.log("Group: " + group + "; Old Owner: " + currentOwner + "; New Owner: " + proposedDoorOwner + "\n", "UDPATE_DOORS");
		}

		approvalGroups = new GlideRecord('u_security_doors');
		approvalGroups.addQuery('u_alternate_approver', group);
		approvalGroups.query();

		while(approvalGroups.next()) {
			
			//REPLACE SELECTED OWNER WITH PROPOSED OWNER
			userGroups.user = proposedDoorOwner;
			userGroups.update();
			gs.log("Group: " + group + "; Old Owner: " + currentOwner + "; New Owner: " + proposedDoorOwner + "\n", "UDPATE_DOORS");
		}

		approvalGroups = new GlideRecord('u_security_doors');
		approvalGroups.addQuery('u_backup_approver', group);
		approvalGroups.query();

		while(approvalGroups.next()) {
			
			//REPLACE SELECTED OWNER WITH PROPOSED OWNER
			userGroups.user = proposedDoorOwner;
			userGroups.update();
			gs.log("Group: " + group + "; Old Owner: " + currentOwner + "; New Owner: " + proposedDoorOwner + "\n", "UDPATE_DOORS");

	}
}






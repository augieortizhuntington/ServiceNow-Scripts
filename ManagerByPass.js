answer = ifScript();

function ifScript() {
	var manager = current.variables.colleague.manager
	var opened_by = current.opened_by
	if (opened_by == manager){
		current.comments = "Manager bypass conducted, opened by is same as approver.";
		return 'yes';
	}
	return 'no';
} 

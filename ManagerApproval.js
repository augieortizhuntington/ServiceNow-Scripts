answer = [];

appId = current.variables.colleague.manager;
var title = appId.u_officer_title;
if (title == '' || title.indexOf('CEO') == -1){ 
	answer.push(appId);
}else{
	answer.push('5452159087bb4180f64e7c431a434d21'); //CEO Alternate Approvers
} 
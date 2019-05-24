var des = "";
var requestSource = current.variables.requestSource.getDisplayValue();
var primaryContact = current.variables.primaryContact.getDisplayValue();
var ermsFindingNumber = current.variables.ermsFindingNumber.getDisplayValue();
var dueDate = current.variables.dueDate.getDisplayValue();
var riskExplain= current.variables.riskExplain.getDisplayValue();
var ppmNumber = current.variables.ppmNumber.getDisplayValue();
var projectName = current.variables.projectName.getDisplayValue();
var endDate = current.variables.endDate.getDisplayValue();
var approved = current.variables.approved.getDisplayValue();
var formalExplain = current.variables.formalExplain.getDisplayValue();
var otherExplain = current.variables.otherExplain.getDisplayValue();
var requestType = current.variables.requestType.getDisplayValue();
var exisitngCatalogItem = current.variables.exisitngCatalogItem.getDisplayValue();
var nameLegacySystem = current.variables.nameLegacySystem.getDisplayValue();
var nameNewCatalogItem = current.variables.nameNewCatalogItem.getDisplayValue();
var requirements = current.variables.requirements.getDisplayValue();
var detail = current.variables.detail.getDisplayValue();
var approvals = current.variables.approvals.getDisplayValue();
var approvalGroups = current.variables.approvalGroups.getDisplayValue();
var fulfuillment = current.variables.fulfuillment.getDisplayValue();
var assignmentGroups = current.variables.assignmentGroups.getDisplayValue();
var ctNum = "\n\n\nCT1298";

if(requestSource == 'Risk/ERMS finding')
{
	des += "Source of request: " + requestSource + "\n";
	des += "Primary Contact: " + primaryContact + "\n";
	des += "ERMS Finding Number: " + ermsFindingNumber + "\n";
	des +="Due Date: " + dueDate + "\n";
	des += "Risk Audit finding: " + riskExplain + "\n";
}
else if (requestSource == 'Formal Book of Work project presented in IT Scope')
{
	des += "Source of request: " + requestSource + "\n";
	des += "Primary Contact: " + primaryContact + "\n";
	des += "PPM Number: " + ppmNumber + "\n";
	des += "Project name: " + ppmNumber + "\n";
	des += "Project end date: " + ppmNumber + "\n";
	des += "Please explain your request: "  + formalExplain + "\n";
}
else if (requestSource == 'Other requested change to a ServiceNow process')
{
	des += "Source of request: " + requestSource + "\n";
	des += "Primary Contact: " + primaryContact + "\n";
	des += "PPM Number: " + ppmNumber + "\n";
	des += "Please explain your request: "  + otherExplain + "\n";
}
else
{
	des += "Requst type: " + requestType + "\n";
	des += "Error on Form.  No Request source found.  Please restart this request item";
}

if(requestType == 'New functionality in ServiceNow')
{
	des += "Requst type: " + requestType + "\n";
	des += "Enter name of existing ServiceNow catalog item: " + exisitngCatalogItem + "\n";
}
else if(requestType == 'Update to existing functionality in ServiceNow')
{
	des += "Requst type: " + requestType + "\n";
	des += "Enter name of existing ServiceNow catalog item: " + nameLegacySystem + "\n";
}
else if(requestType == 'Transition from a legacy app')
{
	des += "Requst type: " + requestType + "\n";
	des += "Enter proposed name for new catalog item: " + nameNewCatalogItem + "\n";
}
else 
{
	des += "Error on Form.  No Request type found.  Please restart this request item";
}

des += "Requirements: " + requirements + "\n";
des += "detail: " + detail + "\n";
des += "Approvals: " + approvals + "\n";
des += "Approval Groups: " + approvalGroups + "\n";
des += "Fufillments: " + fulfuillment + "\n";
des += "Assignment Groups: " + assignmentGroups + "\n";

des += ctNum;

task.description = des;


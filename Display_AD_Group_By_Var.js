var currentSelect = current.variables.currentjobFunction.getDisplayValue();
var newSelect = current.variables.newjobFunction.getDisplayValue();
var currentAD = "";
var newAD = "";

switch(currentSelect)
{
	case "New Teller":
	case "Standard Teller":
	case "Lead Teller":
		currentAD = "I_CashVaultISA_PR_SHR_DG";
		break;
	case "Admin":
	case "Manager":
	case "Supervisor":
		currentAD = "I_CashVaultISA_PR_SHR_\nI_CIFUser_PR_DG";
		break; 
	case "Installation / IT Admin":
		currentAD = "I_CashVaultISA_PR_DB_DG\nI_CashVaultISA_PR_SHR_DG\nI_CashVaultISA_PR_DG\nI_CIFUser_PR_DG";
		break;

}

switch(newSelect)
{
	case "New Teller":
	case "Standard Teller":
	case "Lead Teller":
		newAD = "I_CashVaultISA_PR_SHR_DG";
		break;
	case "Admin":
	case "Manager":
	case "Supervisor":
		newAD = "I_CashVaultISA_PR_SHR_\nI_CIFUser_PR_DG";
		break; 
	case "Installation / IT Admin":
		newAD = "I_CashVaultISA_PR_DB_DG\nI_CashVaultISA_PR_SHR_DG\nI_CashVaultISA_PR_DG\nI_CIFUser_PR_DG";
		break;

}

task.description = "Current AD group(s):\n" + currentAD + "\n\n" + "New AD group(s):\n" + newAD; 

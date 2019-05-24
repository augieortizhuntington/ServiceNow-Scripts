var selected = current.variables.jobFunction.getDisplayValue();

switch(selected)
{
	case "New Teller":
	case "Standard Teller":
	case "Lead Teller":
		task.description = "I_CashVaultISA_PR_SHR_DG";
		break;
	case "Admin":
	case "Manager":
	case "Supervisor":
		task.description = "I_CashVaultISA_PR_SHR_\nI_CIFUser_PR_DG";
		break; 
	case "Installation / IT Admin":
		task.description = "I_CashVaultISA_PR_DB_DG\nI_CashVaultISA_PR_SHR_DG\nI_CashVaultISA_PR_DG\nI_CIFUser_PR_DG";
		break;

}


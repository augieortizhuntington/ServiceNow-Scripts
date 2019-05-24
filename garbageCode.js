function onCondition() {
	
	g_form.setVisible('branch5Label', false);
	g_form.setVisible('branch5', false);
	g_form.setVisible('district5', false);
	g_form.setVisible('costCenter5', false);
	g_form.setVisible('requestType5', false);
	g_form.setVisible('accessDate5', false);
	g_form.setVisible('business5', false);
	
	g_form.setMandatory('branch5', false);
	g_form.setMandatory('district5', false);
	g_form.setMandatory('costCenter5', false);
	g_form.setMandatory('requestType5', false);
	g_form.setMandatory('business5', false);
	
	g_form.setMandatory('branch2', true);
	g_form.setMandatory('district2', true);
	g_form.setMandatory('costCenter2', true);
	g_form.setMandatory('requestType2', true);
	g_form.setMandatory('business2', true);
	
	g_form.setMandatory('branch3', false);
	g_form.setMandatory('district3', false);
	g_form.setMandatory('costCenter3', false);
	g_form.setMandatory('requestType3', false);
	g_form.setMandatory('business3', false);
	
	
	g_form.setVisible('branch2Label', true);
	g_form.setVisible('branch2', true);
	g_form.setVisible('district2', true);
	g_form.setVisible('costCenter2', true);
	g_form.setVisible('requestType2', true);
	g_form.setVisible('accessDate2', true);
	g_form.setVisible('business2', true);
	
	g_form.setVisible('branch3Label', true);
	g_form.setVisible('branch3', true);
	g_form.setVisible('district3', true);
	g_form.setVisible('costCenter3', true);
	g_form.setVisible('requestType3', true);
	g_form.setVisible('accessDate3', true);
	g_form.setVisible('business3', true);
	
	g_form.setMandatory('branch3', true);
	g_form.setMandatory('district3', true);
	g_form.setMandatory('costCenter3', true);
	g_form.setMandatory('requestType3', true);
	g_form.setMandatory('business3', true);

	

}
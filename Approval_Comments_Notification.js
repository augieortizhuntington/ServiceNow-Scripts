<mail_script> 
var app = new GlideRecord('sysapproval_approver'); 
app.addQuery('sysapproval', current.sys_id); 
app.addQuery('state', 'rejected'); 
app.query(); 
while (app.next()) { 
    template.print("Rejected By: " + app.approver.getDisplayValue() + "\n"); 
    template.print("Rejection Comments: " + app.comments.getJournalEntry(-1)); 
} 
</mail_script> 

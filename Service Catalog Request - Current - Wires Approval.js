//
// CFO and General Counsel approval
//

//Modifed to sys_id for approval groups instead of names.
//Agustin Ortiz - 4.6.16


// Set the variable 'answer' to a comma-separated list of group ids or an array of group ids to add as approvers.
//
// For example:
//
// CFO and General Counsel approval
//

//Modifed to sys_id for approval groups instead of names.
//Agustin Ortiz - 4.6.16


// Set the variable 'answer' to a comma-separated list of group ids or an array of group ids to add as approvers.
//
// For example:



var answer = [];
var colleague = current.variables.colleague;
var title;
var manager;

var user = new GlideRecord('sys_user');
   user.addQuery('sys_id', colleague);
   user.query();
   while(user.next()){
      title = user.title;
      manager = user.manager;    
   }



gs.log("Wires " + colleague);
var arrayUtil = new ArrayUtil();
var ceo = new Array ("CEO");

var gr = new GlideRecord('sys_user_group');
gs.log(' colleague title=' +c olleague + ' collegues manager title is =' + manager);
if(colleague.title == 'Chief Financial Officer'){
   gr.addQuery('sys_id','04128e6f87209d44f64e7c431a434db3'); // Sys_ID refers to group: General Counsel approval group
   gr.query();
   if(gr.next()){
      answer.push(gr.sys_id);
   }
}else if(arrayUtil.indexOf(ceo, manager) >= 0){
   gr.addQuery('sys_id','3a90066f87209d44f64e7c431a434ddc'); //Sys_ID refers to group: Internal Wires PIN CEO alternate approvers
   gr.query();
   if(gr.next()){
      answer.push(gr.sys_id);
   }
}

//NEW SCRIPT

//Need to grab the colluage information
var user = current.variables.colleague;
var colleague = new GlideRecord('sys_user');
colleague.addQuery('sys_id', user);
colleague.query();

var jobTitle;
var userManager;

while(colleague.next())
{
    jobTitle = colleague.title;
    userManager = colleague.manager;
}

//Now we must check if user's title is CFO or the user's manager is the CEO
//Must Create array utility to use a contains fucntion on the string
gs.log("Wires: " + jobTitle + "," + "userManager");
var arrayUtil = new ArrayUtil();
var ceo = new Array("CEO");

if(jobTitle == "Chief Financial Officer")
{
    return "ELT";
}
else if(arrayUtil.indexOf(ceo, userManager))
{
   return "CEO";
}
else
{
   return "None";
}
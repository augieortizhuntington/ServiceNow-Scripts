createEnhancement();

function createEnhancement() {
   var task = new GlideRecord("rm_enhancement");
   task.short_description = current.short_description;
   task.description = current.description;
   task.priority = current.priority;
   var taskSys = task.insert();

   //Insert relationship
   var rel = new GlideRecord('task_rel_task');
   rel.parent = current.sys_id;
   rel.child = taskSys;
   rel.type.setDisplayValue('Caused by::Causes');
   rel.insert();

   gs.addInfoMessage("Enhancement " + task.number + " created");
   action.setRedirectURL(task);
   action.setReturnURL(current);
}
// This script needs to set answer to 'yes' or 'no' to indicate the state of the activity.
//
// For example,
//
   answer = ifScript();

   function ifScript() {
      if (current.variables.requestType == 'Add') {
         return 'yes';
      }
      return 'no';
   }

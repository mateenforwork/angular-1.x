document.writeln('<script src="phone-list/phone-list.module.js"></script>');
document.writeln('<script src="phone-list/phone-list.component.js"></script>');
// Define the `phonecatApp` module
angular.module('phonecatApp', [
    // ...which depends on the `phoneList` module
    'phoneList'
  ]);

// gets a new object ( the architecture allows us to not have to use the
// 'new' keyword here )
var testName = G$('John', 'Doe');

// using the login btn in the HTML, update the page
$('.login').click( function() {

  // create the G$ object with preset names
  var loginGrtr = G$('Arin', 'Arjani');

  // hide the .loginDiv once .login is clicked
  $('.loginDiv').hide();

  //display the greeting on the html and log the greeting in the console.
  loginGrtr.setLanguage($('.lang').val()).HTMLGreeting('.greeting', true).log();
} );

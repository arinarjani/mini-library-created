// the ';' before the IIFE means that everything before here is 'finished'
// loading and our IIFE is ready to go
;(function(global, $){
  'use strict';

  // get some references for the arguements
  var globalObj = global;
  var libjQuery = $;

// return a f(z) constructor instead of haveing to type new.. all the time
// 'new' and object
  var Greetr = function( firstName, lastName, language ) {
    return new Greetr.init( firstName, lastName, language );
  }

  // variables that are not exposed to the global object
  // hidden within the scope of the IIFE and never directly accessible
  var supportedLanguages = ['en', 'es'];

  // informal greetings
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };
  // formal greetings
  var formalGreetings = {
    en: 'Greetings',
    es: 'Soludos'
  };
  // logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  };

  Greetr.prototype = {
    // everything in here is exposed to the global object thanks to
    // Greetr.init.prototype = Greetr.prototype;
    // here are all the methods for Greetr
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    // checks to see if the language inputted is supported in
    // the supportedLanguages variable above
    validateLang: function() {
      var validated = supportedLanguages.indexOf(this.language);
      if ( validated === -1 ) {
        throw 'Invalid Language';
      }
    },

    // return the informal greeting message
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '.';
    },

    // return the formal greeting message
    formalGreeting: function() {
      return formalGreetings[this.language] + ' ' + this.firstName + '.';
    },

    // checks to see if you want a formal or informal greeting
    greet: function(formal) {
      var msg;

      // if undefined or null, it will be coerced to 'false'
      if ( formal ) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if ( console ) {
        console.log( msg );
      }

      // 'this' refers to the calling object at execution time. makes the method
      // chainable
      return this;
    },

    // tells the user they are logged in their respective language: en or es
    log: function() {
      if ( console ) {
        console.log( logMessages[this.language] + ': ' + this.fullName() );
      }

      // update the HMTL message using jQuery


      // return 'this' so these methods are chainable
      return this;
    },

    // allows change of language
    setLanguage: function(language) {
      this.language = language;
      this.validateLang();

      // return 'this' so these methods are chainable
      return this;
    },

    // allows to select an HTML element and add an informal or formal greeting
    // to its text
    HTMLGreeting: function(selector, formal) {
      if ( !$ ) {
        throw 'jQuery not loaded';
      }

      if ( !selector ) {
        throw 'Missing Selector';
      }

      // this below looks similar to this.greet(), but the problem is
      // this.greet() does not return anything, but 'this', and that is
      // the problem.  this.greet() needs some fixing in order to pass
      // $(selector).text(this.greet(formal)) below
      var msg;

      // if undefined or null, it will be coerced to 'false'
      if ( formal ) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      // using jQuery's '$' to update the html
      $(selector).text(msg);

      // return 'this' so these methods are chainable
      return this;
    }
  };

  // initialize the object being returned on line 10
  Greetr.init = function ( firstName, lastName, language ) {
    // to keep track of what 'this' is
    var self = this;
    // setting default values
    self.firstName = firstName || '<Enter a firstName>';
    self.lastName = lastName || '<Enter a lastName>';
    self.language = language || 'en';

    this.validateLang();
  }

  // set the Greetr.init.prototype to the same prototype as Greetr
  // trick borrowed from jQuery, so that we don't have to use the 'new'
  // keyword
  Greetr.init.prototype = Greetr.prototype;
  // you can also do Greetr.init.prototype = Greetr.prototype = {
  //   // start writing the methods on for the prototype
  // }, but look Greetr.prototype = {}

  // add Greetr and G$ to the global object for easy accessing
  globalObj.Greetr = globalObj.G$ = Greetr;

}(window, jQuery))

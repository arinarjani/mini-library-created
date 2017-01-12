This is a mini library created in the JavaScript: Understanding the Weird Parts.  I learned about IIFE's, closure, scope, hoisting, how to chain functions when calling, and how to create my own keyword to call the library.

Instructions:
- Call the library: Greet( firstName, lastName, language ) or G$(firstName, lastName, language  );
  - Ex. var arin = G$( 'Arin', 'Arjani', 'en' );
  - >> console.log(arin); >> arin {firstName: 'Arin', lastName: 'Arjani', language: 'en'}
- Methods:
  - fullName() >> prints full name
  - validateLang() >> checks to see if your language is supported ( 'en' or 'es' )
  - greeting() >> greets the user in their respective langauage informally
  - formalGreeting() >> greets the user in their respective language formally
  - greet(formal) >> if formal is true, greets user formally.  if formal is false, or not passed in, greets user informally
  - setLang(language) >> pass in 'en' or 'es' to set the users language
  - HTMLGreeting(selector) >> takes jQuery style CSS selectors and appends a greeting into the selected HMTL element
  

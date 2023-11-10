'use strict';
   var btn = document.getElementById('btn');
      btn.addEventListener('click', function(e){
      	e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var tel = document.getElementById('tel').value;
        var message = document.getElementById('message').value;
        var gridCheck  documet.getElementById('gridCheck').value;
        
        Email.send({
	    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
	    To : 'them@website.com',
	    From : "you@isp.com",
	    Subject : "This is the subject",
	    Body : "And this is the body"
		}).then(
		  message => alert(message)
		);


      })
// Validate contact form input, submit via AJAX and output status via bootstrap alert.

$(function(){
	$('#contactForm').bootstrapValidator({
    	message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	name: {
        		validators: {
                    notEmpty: {
                        message: 'Name is required'
                    }
                }
        	},
            email: {
                validators: {
                    notEmpty: {
                        message: 'Email is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            subject: {
        		validators: {
                    notEmpty: {
                        message: 'Subject is required'
                    }
                }
        	},
        	message: {
        		validators: {
                    notEmpty: {
                        message: 'Message is required'
                    }
                }
        	}
        }
	}).on('success.form.bv', function(e) {
		e.preventDefault();
		var $btn = $('#sendForm').button('sending');
		$btn.attr('disabled', 'disabled');  
		$.ajax({
		  dataType: 'jsonp',
		  url: "http://getsimpleform.com/messages/ajax?form_api_token=79877093b0df6750e048a1c23a598c45",
		  data: {
		    name: $('#name').val(),
		    email: $('#email').val(),
		    subject: $('#subject').val(),
		    message: $('#message').val(),
		  },
		  timeout: 5000,
		  complete: function(xhr, status){
		  	if (status == "success"){
		  		$('#formAlert > span').text('Message sent!');
				$('#formAlert').addClass('alert-success').removeClass('hidden').hide().slideDown();  		
		  	}else{
		  		$('#formAlert > span').text('Message did not send due to error:' + status + '. Please try again later.');
		  		$('#formAlert').addClass('alert-danger').removeClass('hidden').hide().slideDown();
		  	}
		  	$btn.removeAttr('disabled');
			$btn.button('reset');
		  }
		});
	});

	// hide the alert when user closes it
	$("[data-hide]").on("click", function(){
        $(this).closest("." + $(this).attr("data-hide")).hide();
        $('#formAlert').removeClass('alert-success');
        $('#formAlert').removeClass('alert-danger');
	});
});
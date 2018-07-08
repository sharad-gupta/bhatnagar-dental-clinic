$('.arrow').click(function() {
    $('.fadingImage').slideUp('slow');
});


$(document).ready(function() {

    $("#contactForm").submit(function() {

        name = $('#name').val();
        email = $('#email').val();
        phone = $('#phone').val();
        comment = $('#comment').val();
        var emailSummary = new EmailInteraction(name, email, phone, comment, grecaptcha.getResponse());

        $.ajax({
            type: "POST",
            url: "http://52.87.74.229:9098/interaction/email",
            data: JSON.stringify(emailSummary),
            contentType: "application/json",
            crossDomain: true,
			dataType: "json",
            success: function(response) {
                console.log("Success!!");
                
                $('.before-form-is-clicked').hide();
				$('.after-form-is-clicked').show();
            },
            error: function() {
                if(grecaptcha.getResponse()===""){
        			$('.recaptcha-validation').show();
        		}else{
        			$('.recaptcha-validation').hide();
        		}
        		console.log("recaptcha"+grecaptcha.getResponse());
                console.log("Error!!");
            }

        });

        return false;
    });


});


function EmailInteraction(name, email, phone, comment, response) {
    this.name = name;
    this.emailAddress = email;
    this.phoneNumber = phone;
    this.transcript = comment;
    this.response = response;
}
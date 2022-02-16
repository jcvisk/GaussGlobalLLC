function submitToAPI(e) {
    e.preventDefault();
    let URL = "https://l1zzq02chg.execute-api.us-east-1.amazonaws.com/prod/contact-us";

    let re_text = /[A-Za-z]{1}[A-Za-z]/;
    var re_email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;



    //validando nombre
    if (!re_text.test($("#input-name").val())) {
        $("#input-name").focus();
        $('#name-error').removeClass('d-none');
        return;
    } else {
        $('#name-error').addClass('d-none');
    }

    //validando email
    if ($("#input-email").val() == "") {
        $("#input-email").focus();
        $('#email-error').removeClass('d-none');
        return;
    }else{
        $('#email-error').addClass('d-none');
    }
    //validando email
    if (!re_email.test($("#input-email").val())) {
        $("#input-email").focus();
        $('#email-error').removeClass('d-none');
        return;
    }else{
        $('#email-error').addClass('d-none');
    }

    //validando telefono
    if ($("#input-phone").val() == "") {
        $("#input-phone").focus();
        $('#phone-error').removeClass('d-none');
        return;
    } else {
        $('#phone-error').addClass('d-none');
    }

    //validando referral
    if ($("#input-referral").val() == "") {
        $("#input-referral").focus();
        $('#referral-error').removeClass('d-none');
        return;
    } else {
        $('#referral-error').addClass('d-none');
    }

    //validando howWeMet
    if ($("#input-howWeMet").val() == "") {
        $("#input-howWeMet").focus();
        $('#howWeMet-error').removeClass('d-none');
        return;
    } else {
        $('#howWeMet-error').addClass('d-none');
    }

    //validando mensaje
    if (!re_text.test($("#input-message").val())) {
        $("#input-message").focus();
        $('#message-error').removeClass('d-none');
        return;
    }else {
        $('#message-error').addClass('d-none');
    }

    let name = $("#name-input").val();
    let email = $("#email-input").val();
    let phone = $("#input-phone").val();
    let referral = $("#input-referral").val();
    let howWeMet = $("#input-howWeMet").val();
    let message = $("#message-input").val();

    let data = {
        name: name,
        email: email,
        phone: phone,
        referral: referral,
        howWeMet: howWeMet,
        message: message        
    };

    $.ajax({
        type: "POST",
        url: URL,
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),


        success: function () {
            // clear form and show a success message

            $('#emailSuccessModal .alert').removeClass('alert-danger');
            $('#emailSuccessModal .alert').addClass('alert-success');
            $('#email-success').removeClass('d-none');
            $('#email-unsuccessful').addClass('d-none');
            $('#emailSuccessModal').modal('show');
            
            $('#emailSuccessModalOk').click(function(){
                document.getElementById("contact-form").reset();
                location.reload();
            });
            $('#emailSuccessModal').click(function(){
                document.getElementById("contact-form").reset();
                location.reload();
            });
            
        },
        error: function () {
            // show an error message
            $('#emailSuccessModal .alert').removeClass('alert-success');
            $('#emailSuccessModal .alert').addClass('alert-danger');
            $('#email-unsuccessful').removeClass('d-none');
            $('#email-success').addClass('d-none');
            $('#emailSuccessModal').modal('show');

            $('#emailSuccessModalOk').click(function(){
                $('#emailSuccessModal').modal('hide');
            });

            //alert("Unsuccessful");
        }
    });
}

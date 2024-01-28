///<reference types ="../@types/jquery"/>



const regexName = /^[a-zA-Z]+$/

$('#name').on('keyup',function(){


    if(regexName.test($('#name').val())){
        $('#name-msg').removeClass('d-flex');
        $('#name-msg').addClass('d-none');
    }else{
        $('#name-msg').addClass('d-flex');
        $('#name-msg').removeClass('d-none'); 
    }

})



const regexPhone = /^\d{10}$/;

$('#Phone').on('keyup',function(){


    if(regexPhone.test($('#Phone').val())){
        $('#phone-msg').removeClass('d-flex');
        $('#phone-msg').addClass('d-none');
    }else{
        $('#phone-msg').addClass('d-flex');
        $('#phone-msg').removeClass('d-none'); 
    }

})

const regexPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
$('#password').on('keyup',function(){


    if(regexPassword.test($('#password').val())){
        $('#password-msg').removeClass('d-flex');
        $('#password-msg').addClass('d-none');
    }else{
        $('#password-msg').addClass('d-flex');
        $('#password-msg').removeClass('d-none'); 
    }

})

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


$('#email').on('keyup',function(){


    if(regexEmail.test($('#email').val())){
        $('#email-msg').removeClass('d-flex');
        $('#email-msg').addClass('d-none');
    }else{
        $('#email-msg').addClass('d-flex');
        $('#email-msg').removeClass('d-none'); 
    }

})





const regexAge = /^(?:[1-9]|[1-9][0-9])$/;
$('#age').on('keyup',function(){


    if(regexAge.test($('#age').val())){
        $('#age-msg').removeClass('d-flex');
        $('#age-msg').addClass('d-none');
    }else{
        $('#age-msg').addClass('d-flex');
        $('#age-msg').removeClass('d-none'); 
    }

})
// repassword
$('#repassword').on('keyup', function () {
    const passwordValue = $('#password').val();
    const repasswordValue = $(this).val();

    if (passwordValue !== '' && repasswordValue === passwordValue) {
        $('#repassword-msg').removeClass('d-flex');
        $('#repassword-msg').addClass('d-none');
    } else {
        $('#repassword-msg').addClass('d-flex');
        $('#repassword-msg').removeClass('d-none');
    }
});
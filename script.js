let pass = document.getElementById("password")
let repass = document.getElementById("confirm")
let password_state = 'hidden'
let confirm_state = 'hidden'
let password_icon = document.getElementById("password_icon");
let confirm_icon = document.getElementById("confirm_icon")
let length_req = document.getElementById('length_req')
let special_req = document.getElementById('special_req')
let number_req = document.getElementById('number_req')
let submit = document.querySelector('.submit')  
let confirm_check = false
let length_check = false
let special_check = false
let number_check = false

function submit_validate(){
    if((length_check && special_check && number_check && confirm_check) == true) {
        submit.disabled = false
        submit.classList.remove('unvalid')
        submit.classList.add('valid')
    } 
    else {
        submit.disabled = true
        submit.classList.remove('valid')
        submit.classList.add('unvalid')
    }
}


function check_password(){
    if(pass.value != '' && repass.value != ''){
        if(pass.value != repass.value){
            repass.classList.remove("correct")
            repass.classList.add("incorrect");
            confirm_check = false
        }
        else {
            repass.classList.remove("incorrect");
            repass.classList.add("correct")
            confirm_check = true
        }
    }
    else {
        repass.classList.remove("incorrect");
        repass.classList.remove("correct")
    }
    submit_validate()
}


repass.addEventListener('input', check_password)

function password_toggle(state,pass_field,icon){
    if(state == 'hidden'){
        pass_field.type="text"
        icon.src="css/show_pass.png"
        state = "visible"
    }
    else {
        pass_field.type="password"
        icon.src = "css/hide_pass.png"
        state = "hidden"
    }

    return state;
}

password_icon.addEventListener('click', function(){
    password_state = password_toggle(password_state,pass,password_icon)
})

confirm_icon.addEventListener('click', function(){
    confirm_state = password_toggle(confirm_state,repass,confirm_icon)
})


pass.addEventListener('input', function(){
    check_password()
    if(pass.value.length < 10) {
        length_req.src="css/cancel.png"
        length_check = false
    }
    else {
        length_req.src="css/checkmark.png"
        length_check = true
    }
    

    if(pass.value.match(/\d+/) !== null) {
        number_req.src="css/checkmark.png"
        number_check = true
    }

    else {
        number_req.src="css/cancel.png"
        number_check = false
    }

    if(pass.value.match(/^[a-zA-Z0-9]*$/)) {
        special_req.src="css/cancel.png"
        special_check = false
    }
    else {
        special_req.src="css/checkmark.png"
        special_check = true
    }
    
    submit_validate()
})

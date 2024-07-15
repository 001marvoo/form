document.addEventListener('DOMContentLoaded', (e)=>{

    let regForm = document.querySelector('#form')

    let userInput = document.querySelector('#username')

    let userError = document.querySelector('.user_error')

    let userEmail = document.querySelector('#email')

    let emailError = document.querySelector('.email_error')

    let numInput = document.querySelector('#number')

    let numError = document.querySelector('.num_error')

    let passInput = document.querySelector('#password')

    let passError = document.querySelector('.pass_error')

    let confInput = document.querySelector('#confirm')

    let confError = document.querySelector('.conf_error')

    showPass = document.querySelector('.fa-eye')

    let checkTerm = document.querySelector('#terms')

    let termError = document.querySelector('.term_error')

    showPass.addEventListener('click', ()=>{
        const ip = passInput.getAttribute('type') === 'password' ? 'text' : 'password';

        passInput.setAttribute('type', ip)


    })


    regForm.addEventListener('submit',(e)=>{
        let isError = false

        if(isEmpty(userInput)){
            isError = true
            msgError(userInput,userError,'username is required')

        }


        if(isEmpty(userEmail)){
            isError = true
            msgError(userEmail,emailError,'email is required')

        }

        if(isEmpty(numInput)){
            isError = true
            msgError(numInput,numError,'number is required')

        }

        if(isEmpty(passInput)){
            isError = true
            msgError(passInput,passError,'password is required')

        }

        if(!checkTerm.checked){
            isError = true
            msgError(checkTerm,termError,'check to agree to terms and condition')
        }

        function validatePass(){
            const password = document.getElementById('password').value
            const msgcont = document.getElementById('msg')
            let msg = [];

            // const lengthpass = / .{8,}/;
            const upperpass = /[A-Z]/;
            const lowerpass = /[a-z]/
            const numpass = /\d/;
            const numspec = /[!@#$!%^&*(),.?":{}|<>]/;

       
            // if(!lengthpass.test(password)){
            //     msg.push("password must be upto 8 charc length")
            // }

            if(!upperpass.test(password)){
                msg.push('must contain 1 capital letter')
            }

            if(!lowerpass.test(password)){
                msg.push('must contain 1 small letter')
            }

            if(!numpass.test(password)){
                msg.push('must contain 1 digit')
            }

            if(!numspec.test(password)){
                msg.push('must contain 1 special letter')
            }

            msgcont.innerHTML = '';

            if(msg.length > 0){
                msg.forEach(item => {
                    const ptag = document.createElement('p')
                    ptag.textContent = item;
                    ptag.classList.add('msg')

                    msgcont.appendChild(ptag)
                })
            }else{
                const ptag = document.createElement('p')
                ptag.textContent = 'password validated';
                ptag.classList.add('success')

                msgcont.appendChild(ptag)
            }
        }

validatePass()

        // const password = document.getElementById('password').value
        // const regexp =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        // if(!regexp.test(password)){
        //     isError = true
        //     msgError(passInput,passError,'password does not match pattern')
        // }



       

        if(passMatch(passInput,confInput)){
            isError = true
            msgError(confInput,confError,'password does not match')
        }


        if(checkLen(passInput,8)){
            isError = true
            msgError(passInput,passError,'password must be upto 8 char')
        }



    
        if(!isError){
            return false
        }



        e.preventDefault()


    })
    

    


});



function isEmpty(el){
    if(el.value.length === 0){
        return true
    }return false
}

function passMatch(pass,cpass){
    if(pass.value != cpass.value){
        return true
    }return false
}


function checkLen(el, len){
    if((el.value).length < len){
        return true
    }return false
}


function msgError(el, elError, msg){
    el.classList.add('inputError')
    elError.classList.add('error')
    elError.innerHTML = msg
}
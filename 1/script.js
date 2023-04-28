let firstP = /^[a-zA-Z]{3,20}$/;
let secondP = /^[a-zA-Z]{3,20}$/;
let emailP = /^.\S+@[a-zA-Z]+\.[a-zA-Z]+$/;
let passP = /^\w{8,15}$/;

let sign_up = document.forms[0];
let sign_in = document.forms[1];
let regist = document.querySelector('.sign_up');
let log = document.querySelector('.sign_in');
let profile = document.querySelector('.profile');
let users = [];


sign_up[0].addEventListener('change', function (){
    let testFirst = firstP.test(sign_up[0].value);
    if(testFirst){
        this.style.border = '3px solid green';
    } else {
        this.style.border = '3px solid red';
    }

});
sign_up[1].addEventListener('change', function (){
    let testSecond = secondP.test(sign_up[1].value);
    if(testSecond){
        this.style.border = '3px solid green';
    } else {
        this.style.border = '3px solid red';
    }

});

sign_up[2].addEventListener('change', function (){
    let testEmail = emailP.test(sign_up[2].value);
    if(testEmail){
        this.style.border = '3px solid green';
    } else {
        this.style.border = '3px solid red';
    }

});
sign_up[3].addEventListener('change', function (){
    let testPass = passP.test(sign_up[3].value);
    if(testPass){
        this.style.border = '3px solid green';
    } else {
        this.style.border = '3px solid red';
    }

});

sign_up[4].addEventListener('click', function(){
        let testFirst = firstP.test(sign_up[0].value);
        let testSecond = secondP.test(sign_up[1].value);
        let testEmail = emailP.test(sign_up[2].value);
        let testPass = passP.test(sign_up[3].value);
        if(testFirst && testSecond && testEmail && testPass){
            let newUser = {
                first: sign_up[0].value,
                last: sign_up[1].value,
                email: sign_up[2].value,
                password:sign_up[3].value
            };
            if (localStorage.length > 0 && localStorage.getItem('users')) {
                users = Array.from(JSON.parse(localStorage.getItem('users')));
            }
            if (!users.some(some => some.email === sign_up[2].value.toLowerCase())) {
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                document.querySelector('.modal').classList.add('hide');
                sign_up[0].style.border ='2px solid rgb(170, 170, 170)';
                sign_up[1].style.border ='2px solid rgb(170, 170, 170)';
                sign_up[2].style.border ='2px solid rgb(170, 170, 170)';
                sign_up[3].style.border ='2px solid rgb(170, 170, 170)';
                sign_up.reset();
        } else {
            sign_up[2].style.border = '3px solid red';
            sign_up[2].value = '';
            document.querySelector('.modal').classList.remove('hide');
        }
    }
})

document.querySelector('.text').addEventListener('click', function(){
    document.querySelector('.modal1').classList.add('hide');
    regist.classList.add('hide');
    log.classList.remove('hide');
    sign_in[0].style.border = '3px solid rgb(170, 170, 170)';
    sign_in[1].style.border = '3px solid rgb(170, 170, 170)';

})
   

document.querySelector('.btn_log').addEventListener('click', function(){
    if (users.some(elem => elem.email === sign_in[0].value.toLowerCase() && elem.password.toLowerCase() ===  sign_in[1].value.toLowerCase())) {
    log.classList.add(`hide`);
    profile.classList.remove(`hide`);
    document.querySelector('.modal1').classList.add('hide');
    userProfile();

    } else if(localStorage.length <= 0){
        document.querySelector('.modal1').classList.remove('hide');
    } else {
        document.querySelector('.modal1').classList.remove('hide');
        document.querySelector('.modal1').textContent = `Wrong email or password. Try again.`;
        sign_in[0].style.border = '3px solid red';
        sign_in[1].style.border = '3px solid red';

    }
})

function userProfile(){
    for (let i = 0; i < users.length; i++) {
        if (sign_in[0].value == users[i].email) {
            document.querySelector('.name').textContent = users[i].first + ' ' + users[i].last;
            document.querySelector('.email').textContent = users[i].email;
        }

    }
}



document.querySelector('.text1').addEventListener('click', function(){
    regist.classList.remove('hide');
    log.classList.add('hide');
    sign_in.reset();

})

document.querySelector('.btn_prf').addEventListener('click', function(){
    sign_in[0].value = '';
    sign_in[1].value = '';
    profile.classList.add('hide');
    log.classList.remove('hide');
})


window.onload=()=>{
    // 1) Створити форму як на малюнку, за допомогою js реалізувати перевірку чи співпадають паролі. Чи введені всі дані в полях.
    // Якщо всі данні введені, сховати поля  і кнопки і вивести текст, реєсстрація пройшла успішно
let submit = document.querySelector('.submit');
let [...formElements] = myForm.elements;
let div = document.querySelector('.divForm');
let username = document.querySelector('#name');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector ('#confirmPassword');
const newUser = new Object
submit.onclick = function(e){
    let isValid = true;
    for(let i=0; i<formElements.length-1; i++){
        let element = formElements[i];
        if(element.value.length == 0){alert(`${element.name} не заполнен`);
        isValid = false;}
    }
        if(password.value != confirmPassword.value){
            alert('Пароли не совпадают');
            isValid = false;
        }
        if(!!isValid){
            e.preventDefault();
            document.querySelector("#form").classList.toggle('hide');
            alert('Регистрация прошла успешно');
            document.querySelector(".sign").setAttribute('value','Sign');
            newUser['username'] = username.value
            newUser['password'] = password.value
            console.log(newUser)
        }     
    }
// 2) Відцентрувати форму логіну використовуючи дані отримані з window. Розрахувати відступ зверху і зліва, врахувати розміри форми при цьому
let wWidth = window.innerWidth;
let wHeight = window.innerHeight;
div.style.left = (wWidth/2 - parseFloat(window.getComputedStyle(div).width)/2) + 'px';
div.style.top = (wHeight/2 - parseFloat(window.getComputedStyle(div).height)/2) + 'px';
    
// 3) Створити форму як на малюнку кнопка login має бути дісайблед, використати подію onchange на формі зробити щоб після заповнння полів з форми видалявся стан disabled
document.querySelector('.sign').addEventListener('click', signForm, false);
function signForm() { 
    document.querySelector('.sign').classList.toggle('hide');
    document.querySelector("#form").classList.add('hide');
    document.querySelector(".reg").innerHTML = 'Login';
    document.querySelector('.loginForm').classList.toggle('hide');    
}
let login = document.querySelector('.login');
let [...loginformElements] = loginForm.elements;
let checkArr = ['',''];
login.disabled = true;
login.classList.add('opacity')  
for(let t=0; t<loginformElements.length-1; t++){
    let element = loginformElements[t];
    element.onchange = function(){
        checkArr.splice([t],1,this.value)
        if(checkArr.every(elem => elem.length > 0)){
                login.disabled = false
                login.classList.toggle('opacity')
        }
    }
        console.log(loginformElements[0].value)
}
login.onclick = function(){
    if(loginformElements[0].value == newUser.username && loginformElements[1].value == newUser.password){
        alert('Вы успешно авторизовались')
    }
    else{
        alert('Логин или пароль неверны')
    }
}
}

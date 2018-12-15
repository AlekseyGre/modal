var modal = document.querySelector("#modal"),
    closebutton = document.querySelector("#close-button"),
    onbutton = document.querySelector("#openbutton"),
    form = document.querySelector("#form");
console.log(modal);
closebutton.addEventListener("click", function() {
    modal.classList.toggle("closed");
});
onbutton.addEventListener("click", function() {
    modal.classList.toggle("closed");
});
modal.addEventListener("mousedown", function(t) {
    console.log('tttt', t);
    modal.classList.toggle("closed");
});


// var data = {
//     login: '',
//     pass: ''
// };
// function test2(field, value) {
//     if (field === 'name') {
//     data.login = value; 
//          }
//     console.log('data', data);
// }

// window.onscroll = function() {
//     console.log(window.pageYOffset);
// }
// var noom1;
// var noom2;
// var s;
// function summa(input, value) {
          
//           if (input === 'num1') {
//          noom1 = value;
//           }
//           if (input === 'num2') {
//           noom2 = value;
//              }
//              console.log(noom1, noom2);

// }
// function su(a) {
//     // s = +noom1 +  +noom2;
//     console.log(a);
// }
// var user = '{name: "test"}';
// var user2 = {
//     name: 'test',
// }
// console.log('user', JSON.stringify(user2));
///////////////////////////////////////////////////////////////////////
//////////Lessons tabs////////////////////////////
var navItem = document.querySelectorAll('.tabNav a');
var itemTab = document.querySelectorAll('.itemTab');
document.querySelector('.tabNav').onclick = function(e) {
    var target = e.target;
    for(var i = 0; i < navItem.length; i++) {
          if (target == navItem[i]) {
            showTab(i);  
          }
          else  {
            hideTab(i);
          }

    }
}
function showTab (i) {
     itemTab[i].classList.add('show');
     navItem[i].classList.add('active');
}
function hideTab (i) {
    itemTab[i].classList.remove('show');
    navItem[i].classList.remove('active');
}

// var test = fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => {
//     console.log('data', data);
//     var Users = data.slice(0, 15);
//     const elem = document.querySelector('.itemTab');
//     Users.forEach(element => {
//         var div = document.createElement('p');
//         div.innerHTML = element.name;
//         elem.appendChild(div);
//     });
// })




///////////////////////////////////////////////////FETCH POST QWERRY ///////////////////////////////////
/////////////////////////////////////////////////////LESSONS////////////////////////////////////////////
var data = {
    login: '',
    pass: ''
};
var urlQwerry = 'http://5c115c827e18800013bc3908.mockapi.io/ver1/Slayer';
function post() {
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    fetch(urlQwerry, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
                user: data.login,
                password: data.pass
                }),
})
.then(function (response) {
       return response.json()
})
.then(function (data) {
        console.log('Return DATA Server>>>>> ', data)
})
      .catch(function (error) {
        console.log('>>>>>>>>>>>ERRORS<<<<<<<<', error)
})
}
//////////проверка на спецсиволы и запись в обьект данных инпутов//////////////////
function password(Param, logPass) {
var matchSpec = /^\w+$/;
if (matchSpec.test(logPass) == false) {
    alert('Строка не должна содержать пробелы и спецсимволы !!!');
    return;
     } 
else {
    if (Param === 'inPas') {
        
        data.pass = logPass; 
    
    }
    if (Param === 'inLog') {
         data.login = logPass;
    }   
    }
     console.log('SAVE Log and Pass to OBJECT>>>>>>>>>', data);
}
//////////////////////проверка на пустые инпуты и отправка запроса////////////////////////////////
function btnQwerry() {
if (document.getElementsByClassName("in")[0].value == '' || document.getElementsByClassName("in")[1].value == '') {
    alert('Введити логин и пароль !!!');
     }
else {
    post();
   }       
};






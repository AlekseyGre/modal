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





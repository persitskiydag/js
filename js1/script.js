// function fun1() {
//    var chbox;
// chbox=document.getElementById('one');

// if (chbox.checked) {
//    alert('Выбран');
// }
// else
// {
//    alert('Не выбран');
// }
// }

function fun1() {
    var radi=document.getElementsByName('rl');
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert('Выбран ' +i+ ' элемент');
        }
    }
}
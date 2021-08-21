const btn = document.getElementsByClassName('container2')[0];
const bar = document.getElementsByClassName('menubar')[0];
const col = document.getElementsByClassName('coll')[0];
let toggled = false;
btn.onclick = function(evt){
    if(!toggled){
        toggled = true;
        bar.classList.remove('dis');
        col.classList.remove('col');
    }
    else{
        toggled = false;
        bar.classList.add('dis');
        col.classList.add('col');
    }
}
function xhrSimulate(){
  $('#exampleModal22').modal('hide'), 4000;
};

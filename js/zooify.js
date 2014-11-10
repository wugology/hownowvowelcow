document.addEventListener('DOMContentLoaded', function(){

var button = document.querySelector('button');

button.addEventListener('click', function(ev){
   var text = document.body.querySelector('input').value;
   var text2 = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
   var text3 = text2.replace(/\d+/g, '');
   var text4 = text3.toLowerCase();
   var letterArray = text4.split('');
   var field = document.querySelector('#field')
   field.innerHTML = '';
   for(var i=0; i< letterArray.length; i++){
     var newZoo = "/img/" + letterArray[i] + ".svg";
     console.log(newZoo);
     var ZooImg=document.createElement("img");
     ZooImg.setAttribute('src', newZoo);
     field.appendChild(ZooImg);
   }
})   


})

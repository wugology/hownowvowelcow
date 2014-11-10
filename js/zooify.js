document.addEventListener('DOMContentLoaded', function(){

var button = document.querySelector('button');

button.addEventListener('click', function(ev){
   var text = document.body.querySelector('input').value;
   var text2 = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
   var text3 = text2.replace(/\d+/g, '');
      console.log(text3);
   var letterArray = text3.split('');
   for(var i=0; i< letterArray.length; i++){
     var newZoo = "/img/" + letterArray[i] + ".svg";
     console.log(newZoo);
     var ZooImg=document.createElement("img");
     ZooImg.setAttribute('src', newZoo);
     document.body.appendChild(ZooImg);
   }
})   


})

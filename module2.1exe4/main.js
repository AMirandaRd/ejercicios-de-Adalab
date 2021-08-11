const titleElement= document.querySelector('.title');
titleElement.innerHTML= ' La Adalaber seleccionada es....';
//titleElement.innerHTML = titleElement.innerHTML + ' Angela Miranda';//
const listElement= document.querySelector('.me');
listElement.innerHTML=' Angela Miranda';
//titleElement.innerHTML= titleElement.innerHTML + listElement.innerHTML;77

const secondListElement=document.querySelector('.notme');
secondListElement.innerHTML=' Mi pareja';
titleElement.innerHTML= titleElement.innerHTML + secondListElement.innerHTML;

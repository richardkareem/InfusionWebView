const video = document.getElementById('video');
const buttonStart = document.getElementById('btn-start')
const timer = document.getElementsByClassName('timer');
const progress = document.getElementsByClassName('progress');

addEventListener('DOMContentLoaded', () =>{
    handleOpenCam();
    buttonStart.addEventListener('click', (e) =>{
        handleDecrement(e);
    })
   
})
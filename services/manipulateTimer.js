const containerTimer = document.getElementsByClassName('container-timer')[0];
const btnStarts = document.getElementById('btn-start');


function calculateValueInSeconds(seconds) {
    // value 0 = progress full
    // value 440 = progress zero
    const maxValue = 440;
    const totalSeconds = 60; 
    return Math.abs(((seconds / totalSeconds) * maxValue) - maxValue); 
    
}


const handleOpenCam  = async() =>{
    try {
        const stream = await navigator.mediaDevices.getUserMedia({video});
        video.srcObject = stream
        
    } catch (error) {
        console.log(error);
    }
}
const handleDecrement = (e) =>{
    e.preventDefault();
    containerTimer.setAttribute('style', 'position: absolute')
    let time = 60;
    btnStarts.disabled = true;
    const timeout = setInterval(()=>{
        console.log(calculateValueInSeconds(time));
        time --;
        timer[0].innerHTML = time
        progress[0].setAttribute('style',  `stroke-dashoffset: calc(${calculateValueInSeconds(time)})`);
        if(time <= 0){
            clearInterval(timeout)
            containerTimer.setAttribute('style', 'position: none')
            btnStarts.disabled = false;
            //funtion stop 
        }
    },1000)

}
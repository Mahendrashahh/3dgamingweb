const nextbtn=document.querySelector('.next-btn');
const video= document.querySelector('.hero-video');

const movielist=['vedio/hero-1 (1).mp4','vedio/hero-2 (1).mp4','vedio/hero-3 (1).mp4','vedio/hero-4 (1).mp4'];

let index =0;
nextbtn.addEventListener('click',function(){

    index +=1
    video.src =movielist[index];

    if(index===3){
        index =-1;
    }

})


const imgBox = document.querySelector('.image-box'); 
const img = document.querySelector('.image-box img');

window.addEventListener('scroll', function () {
  
  imgBox.style.width = window.innerWidth + 'px';
  imgBox.style.height = window.innerHeight + 'px';
});



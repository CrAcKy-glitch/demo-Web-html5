 const musicContainer= document.querySelector('.holder')
const playBtn= document.querySelector('.fa-play')
const prevBtn= document.querySelector('#prev')
const nextBtn= document.querySelector('#next')
const audio= document.querySelector('#audio')
const progress= document.querySelector('.progress')
const progressContainer= document.querySelector('.progressholder')
const info = document.querySelector('.music-info')
const title= document.querySelector('.title')
const cover= document.querySelector('#cover')

//song titles

const songs=['kalimba', 'BOB acri']

let songIndex = 0

loadSong(songs[songIndex])


function loadSong(song){

    title.innerText = song;
   

}
function forward(){

    songIndex++
    if(songIndex>1){
         songIndex=0
    }
}
function back(){

    songIndex--
    if(songIndex<0){
        songIndex=1;
    }
} 
nextBtn.addEventListener('click',()=>{

    forward()
    
})
prevBtn.addEventListener('click',()=>{
    back()
})


function pauseSong(){
    musicContainer.classList.add('stop')
    playBtn.querySelector.remove('fa-pause')
    playBtn.querySelector.add('fa-play')
    audio.pause()
}
function playSong(){

musicContainer.classList.remove('stop')
info.classList.add('play')
playBtn.classList.remove('fa-play')
playBtn.classList.add('fa-pause')
audio.play()

}

playBtn.addEventListener('click',()=>{

    const isPLaying = musicContainer.classList.contains('play')

    if(isPLaying){
        playSong()
    }
    else{
       
        pauseSong()
    }
})


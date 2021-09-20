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

let songIndex = 1

loadSong(songs[songIndex])


function loadSong(song){

    title.innerText = song;
    audio.src="music\"+song+".mp3"


}
function forward(){

    songIndex++
    if(songIndex>1){
         songIndex=0
        
    }
    loadSong(songs[songIndex])
    audio.play()
}
function back(){

    songIndex--
    if(songIndex<0){
        songIndex=1;
    }
   
    loadSong(songs[songIndex])
    audio.play()
} 
nextBtn.addEventListener('click',()=>{

    forward()
    
})
prevBtn.addEventListener('click',()=>{
    back()
})


function pauseSong(){
    musicContainer.classList.add('stop')
    musicContainer.classList.remove('play')
    playBtn.classList.remove('fa-pause')
    playBtn.classList.add('fa-play')
    info.classList.remove('play')
    audio.pause()
}
function playSong(){

musicContainer.classList.remove('stop')
info.classList.add('play')
musicContainer.classList.add('play')
playBtn.classList.remove('fa-play')
playBtn.classList.add('fa-pause')
audio.load()
audio.play()

}

playBtn.addEventListener('click',()=>{

    const isPLaying = musicContainer.classList.contains('play')
    
    if(isPLaying){
       pauseSong()
    }
    else{
       
        playSong()
    }
})


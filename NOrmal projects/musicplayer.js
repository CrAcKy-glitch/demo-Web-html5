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

// calling function loadSong(according to the index set)

loadSong(songs[songIndex])


function loadSong(song){

    title.innerText = song;
    


}
function forward(){
//countering index to go forward 
    songIndex++
    if(songIndex>1){
         songIndex=0
        
    }
    loadSong(songs[songIndex])//calling function to change text
    audio.play()
}
function back(){
//negating songIndex to go backwards
    songIndex--
    if(songIndex<0){//if index goes out of bounds
        songIndex=1;//resetting the value back to 1 
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


function pauseSong(){//function to pause the song
    musicContainer.classList.add('stop')
    playBtn.classList.remove('fa-pause')
    playBtn.classList.add('fa-play')
    info.classList.remove('play')
    audio.pause()
}
function playSong(){//function to play the song

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
    
    if(isPLaying){//if true will show the button to pause the music
       pauseSong()
    }
    else{// else will show the option to play it
       
        playSong()
    }
})
//End of script


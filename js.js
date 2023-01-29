var videoPlayer=document.getElementById("VideoPlayer");
var myCurrentVideo=document.getElementById("myCurrentVideo");


function stopVideo(){
    videoPlayer.style.display="none";
    myCurrentVideo.pause();

}

function playVideo(file){

   var video = document.getElementById("myCurrentVideo");
    video.src = file;
    
    video.play();

    //myCurrentVideo.scr=file;
    videoPlayer.style.display="block";
}
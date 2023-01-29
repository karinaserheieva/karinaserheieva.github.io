var videoPlayer=document.getElementById("VideoPlayer");
var myCurrentVideo=document.getElementById("myCurrentVideo");


function stopVideo(){
    videoPlayer.style.display="none";
}

function playVideo(file){

    var video = document.getElementById('myCurrentVideo');
    video.src = file;
    

    //myCurrentVideo.scr=file;
    videoPlayer.style.display="block";
}
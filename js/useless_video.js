// Useless Video JS

function randomVideo(currentVideo) {
  if (!hasCycled()) {
    while (true) {
      randomPick = Math.floor(Math.random() * videoList.length);
      if (videoList[randomPick][1] !== true && videoList[randomPick][0] != currentVideo) {
        videoList[randomPick][1] = true;
        return videoList[randomPick][0].toString();
      }
    }
  } else {
    resetPlayed();
    return randomVideo(currentVideo);
  }
}

//Checks to see if every video in videolist has been played
function hasCycled() {
    for (i = 0; i < videoList.length; i++) {
      if (!videoList[i][1]) {
        return false;
      }
    }
    return true;
}

//Resets all booleans in videoList to false to reset played
function resetPlayed() {
  for (i = 0; i < videoList.length; i++) {
    videoList[i][1] = false;
  }
}

// List of useless video ids
var videoList = [
  ["q6EoRBvdVPQ", false], // Yee
  ["-w-58hQ9dLk", false], // Jurrasic Park Theme Song (Melodica Cover)
  ["fvtQYsckLxk", false], // My longest yeah boy ever
  ["zoYS005VsA4", false], // Raising The Game
  ["jEcuFIU7Cb0", false], // Seal Slap
  ["cRpdIrq7Rbo", false], // You On Kazoo!
  ["SAxpAs1Iaec", false], // ᕕ( ᐛ )ᕗ
  ["D-UmfqFjpl0", false], // Dog Of Wisdom
  ["Z3ZAGBL6UBA", false], // It's Peanut Butter Jelly Time!!!
  ["KxGRhd_iWuE", false], // NEVER GIVE UP
  ["YDAGs6fEc-A", false], // Epic Turtle Jump
  ["ZwipCJoWpsQ", false], // Brick Math
  ["2Z4m4lnjxkY", false], // Trololo
  ["G7RgN9ijwE4", false], // Have you ever had a dream like this?
];

//Youtube API
//This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
var player;
function onYouTubeIframeAPIReady() {
 player = new YT.Player('player', {
   height: '100%',
   width: '100%',
   videoId: randomVideo(),
   events: {
     'onReady': function() {
       player.setVolume(100);
       player.playVideo();
     },
     'onStateChange': onPlayerStateChange
   }
 });
}
// Play new random video when previous one finishes
function onPlayerStateChange(event) {
 if (player.getPlayerState() === 0) {
   player.loadVideoById(randomVideo(player.getVideoData().video_id),0,"large");
 }
}
//Manual call to function to change video
function changeVideo() {
   player.loadVideoById(randomVideo(player.getVideoData().video_id),0,"large");
}

// About Site window
function aboutSite() {
document.getElementById('window').style.display = "block";
var videoTitle = document.getElementById('video-title');
videoTitle.innerHTML = player.getVideoData().title;
videoTitle.href = player.getVideoUrl();
}

function closeWindow() {
document.getElementById('window').style.display = "none";
}

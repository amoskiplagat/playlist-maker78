<script>
    var playlist = document.getElementById("playlist");
    var audioPlayer = document.getElementById("audioPlayer");
    var videoPlayer = document.getElementById("videoPlayer");
    var currentSong = null;
    
    // Load previously saved songs from local storage
    window.addEventListener("DOMContentLoaded", function() {
      var savedSongs = localStorage.getItem("musicPlaylist");
      if (savedSongs) {
        playlist.innerHTML = savedSongs;
        initializeSongs();
      }
    });
    
    function initializeSongs() {
      var songs = playlist.getElementsByClassName("song");
      for (var i = 0; i < songs.length; i++) {
        songs[i].addEventListener("click", playSong);
        
        var deleteBtn = document.createElement("span");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", deleteSong);
        
        var downloadLink = document.createElement("a");
        downloadLink.className = "download-link";
        downloadLink.textContent = "Download";
        downloadLink.addEventListener("click", downloadSong);
        
        songs[i].appendChild(deleteBtn);
        songs[i].appendChild(downloadLink);
      }
    }
    
    function playSong() {
      if (currentSong) {
        currentSong.classList.remove("active");
      }
      this.classList.add("active");
      currentSong = this;
      
      var url = this.dataset.url;
      var isAudio = url.endsWith(".mp3") || url.endsWith(".ogg") || url.endsWith(".wav");
      
      if (isAudio) {
        audioPlayer.style.display = "block";
        videoPlayer.style.display = "none";
        audioPlayer.src = url;
        audioPlayer.play();
      } else {
        audioPlayer.style.display = "none";
        videoPlayer.style.display = "block";
        videoPlayer.src = url;
        videoPlayer.play();
      }
    }
    
    function saveSong() {
      var musicNameInput = document.getElementById("musicName");
      var musicLinkInput = document.getElementById("musicLink");
      var musicName = musicNameInput.value;
      var musicLink = musicLinkInput.value;
      
      if (musicName && musicLink) {
        var song = document.createElement("li");
        song.className = "song";
        song.textContent = musicName;
        song.dataset.url = musicLink;
        
        var deleteBtn = document.createElement("span");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", deleteSong);
        
        var downloadLink = document.createElement("a");
        downloadLink.className = "download-link";
        downloadLink.textContent = "Download";
        downloadLink.addEventListener("click", downloadSong);
        
        song.appendChild(deleteBtn);
        song.appendChild(downloadLink);
        
        playlist.appendChild(song);
        musicNameInput.value = "";
        musicLinkInput.value = "";
        
        saveToLocalStorage();
        
        song.addEventListener("click", playSong);
      }
    }
    
    function deleteSong() {
      var song = this.parentNode;
      if (song.classList.contains("active")) {
        audioPlayer.pause();
        videoPlayer.pause();
        audioPlayer.currentTime = 0;
        videoPlayer.currentTime = 0;
        currentSong = null;
      }
      playlist.removeChild(song);
      saveToLocalStorage();
    }
    
    function downloadSong() {
      var song = this.parentNode;
      var url = song.dataset.url;
      var isAudio = url.endsWith(".mp3") || url.endsWith(".ogg") || url.endsWith(".wav");
      
      var link = document.createElement("a");
      link.href = url;
      link.download = isAudio ? "audio.mp3" : "video.mp4";
      link.click();
    }
    
    function saveToLocalStorage() {
      localStorage.setItem("musicPlaylist", playlist.innerHTML);
    }
  </script>
</body>

  
  <div class="input-group">
    <!-- Rest of the code... -->
  </div>
  
  <ul id="playlist">
    <!-- Rest of the code... -->
  </ul>
  
  <div class="player">
    <!-- Rest of the code... -->
  </div>
  
  <footer>
    &copy; 2023 Music Playlist Maker by Amos Kiplang'at. All rights reserved.
  </footer>

  <script>
    // Rest of the code...
  </script>
var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector(".video");
	video.autoplay = false;
	video.preload = true;
	video.loop = false;
});


document.getElementById("play").addEventListener("click", function() {
	video.play();
	var vol = video.volume * 100;
	document.getElementById("volume").textContent = vol+"%";
});

document.getElementById("pause").addEventListener("click", function() {
	console.log("pause");
	video.pause();
});

document.getElementById("slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function() {
	if (video.currentTime + 10 <= video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

document.getElementById("slider").addEventListener("change", function() {
	video.volume = document.getElementById("slider").value / 100;
	var vol = video.volume * 100;
	document.getElementById("volume").textContent = vol + "%";
	console.log(video.volume);
});

document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});



// 	console.log("Play Video");
// });


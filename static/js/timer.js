let workTime = 25 * 60; // default work time in seconds
let breakTime = 5 * 60; // default break time in seconds
let timer;
let isWorking = true;
let remainingTime = workTime;

function startTimer() {
		console.log("Timer started");
		clearInterval(timer); // Clear any existing timer to prevent multiple intervals
		timer = setInterval(() => {
				console.log("Timer tick", remainingTime);
				if (remainingTime <= 0) {
						clearInterval(timer);
						isWorking = !isWorking;
						remainingTime = isWorking ? workTime : breakTime;
						alert(isWorking ? "Break over! Time to work." : "Work session over! Take a break.");
						startTimer();
				} else {
						document.getElementById("timer").innerText = formatTime(remainingTime);
						remainingTime--;
				}
		}, 1000);
}

function resetTimer() {
		clearInterval(timer);
		remainingTime = workTime;
		document.getElementById("timer").innerText = formatTime(remainingTime);
}

function formatTime(seconds) {
		let minutes = Math.floor(seconds / 60);
		let secs = seconds % 60;
		return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateWorkTime() {
		let workMinutes = document.getElementById("workTime").value;
		workTime = workMinutes * 60;
		resetTimer();
}

function updateBreakTime() {
		let breakMinutes = document.getElementById("breakTime").value;
		breakTime = breakMinutes * 60;
		resetTimer();
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("workTime").addEventListener("change", updateWorkTime);
document.getElementById("breakTime").addEventListener("change", updateBreakTime);

// Initialize timer display
document.getElementById("timer").innerText = formatTime(workTime);

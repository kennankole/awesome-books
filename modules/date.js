import { DateTime } from "./luxon.js";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dateDisplay = document.getElementById('date'); 

export function showDate() {
	const dateObj = new Date();
	const month = months[dateObj.getMonth()];
	const day = dateObj.getDay();
	const year = dateObj.getFullYear();
	const hour = dateObj.getHours();
	const minutes = dateObj.getMinutes();
	const secnod = dateObj.getSeconds();
	let amPM = null;
	if (hour >= 12) {
			amPM = 'PM';
	} else {
			amPM = 'AM';
	}
	dateDisplay.innerText = `${month} ${day}th ${year}\\ ${hour}:${minutes}:${secnod}${amPM}`;
}
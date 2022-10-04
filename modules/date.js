import { DateTime } from "./luxon.js";

const dateDisplay = document.getElementById('date'); 

export const showDate = () => {
	const dateObj = DateTime.now();
	const month = dateObj.month;
	const day = dateObj.day;
	const year = dateObj.year;
	const hour = dateObj.hour;
	const minutes = dateObj.minute;
	const secnod = dateObj.second;
	let amPM = null;
	if (hour >= 12) {
			amPM = 'PM';
	} else {
			amPM = 'AM';
	}
	dateDisplay.innerText = `${month} ${day}th ${year} ${hour}:${minutes}:${secnod}${amPM}`;
}
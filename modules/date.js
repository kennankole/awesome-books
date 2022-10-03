import { DateTime } from "./luxon.js";

const setDate = document.getElementById('date');
setDate.innerHTML = DateTime.now();
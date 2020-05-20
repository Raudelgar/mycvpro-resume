export function generateTimestampFromStringDate(str) {
	return new Date(str).getTime();
}

export function getDateFromTimestamp(time) {
	return {
		month: new Date(time).getDate(),
		year: new Date(time).getFullYear(),
	};
}

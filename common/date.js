
const date = new Date();
const year = date.getFullYear();
let month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// 한 자리 수인 경우 앞에 0을 추가해주기
month = month < 10 ? '0' + month : month;
day = day < 10 ? '0' + day : day;
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

const today = `${year}-${month}-${day}`;

const todayAndTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

const todayPluse = (day) => {
    const date = new Date(today);
    date.setDate(date.getDate() + day);
    return date.toISOString().slice(0, 10);
}

const isToday = (compareDay) => {
    return today === compareDay;
}


export { today, todayAndTime, year, month, day, todayPluse, isToday };

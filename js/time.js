const locaTime = document.querySelector('.local_time');

function updateTime() {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();

    const hour = currentHour < 10 ? "0" + currentHour : currentHour;
    const min = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

    locaTime.innerHTML = `${hour}:${min}`;
}
updateTime();
setInterval(updateTime, 1000);


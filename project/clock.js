const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

const getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText = `${hour<10 ? `0${hour}` : hour}:${minutes<10 ? `0${minutes}` : minutes}:${second<10 ? `0${second}` : second}`;
}

const init = () => {
    getTime();
    setInterval(getTime,1000);
    
}

init();


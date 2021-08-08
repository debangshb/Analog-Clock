setInterval(() => {
    let date= new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    hrotation = 30*hours + mins/2;
    mrotation = 6*mins;
    srotation = 6*sec;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
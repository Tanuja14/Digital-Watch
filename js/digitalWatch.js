let indianWatch = () =>{
    let options = { timeZone : 'Asia/Kolkata'};
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString('en-US'. options);
    // console.log(currentTime);
    document.querySelector('#india-date').innerHTML = currentDate;
    document.querySelector('#india-time').innerHTML = currentTime;
}
setInterval(indianWatch, 1000);

let usaWatch = () =>{
    let options = { timeZone : 'America/New_York'};
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString('en-US', options);
    // console.log(currentTime);
    document.querySelector('#america-date').innerHTML = currentDate;
    document.querySelector('#america-time').innerHTML = currentTime;
}
setInterval(usaWatch, 1000);

let chinaWatch = () =>{
    let options = { timeZone : 'Asia/Shanghai'};
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString('en-US', options);
    // console.log(currentTime);
    document.querySelector('#china-date').innerHTML = currentDate;
    document.querySelector('#china-time').innerHTML = currentTime;
}
setInterval(chinaWatch, 1000);
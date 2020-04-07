function updatetime () {
    var date = new date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    //solve the zeros leading
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    //get the elements
    var eHour = document.querySelectorAll('.hour')[0];
    var eMin = document.querySelectorAll('.minutes')[0];
    var eSec = document.querySelectorAll('.seconds')[0];

    eHour.innerHTML = hour;
    eMin.innerHTML = minutes;
    eSec.innerHTML = seconds;

    //uspdate the day
    var today = date.getday();
    var arrdays = ['domingo',
                   'segunda-feira',
                   'terça-feira',
                   'quarta-feira',
                   'quinta-feira',
                   'sexta-feira',
                   'sabado'];
    var eToday = document.querySelectorAll('.today')[0];
    eToday.innerHTML = arrdays[today];         
}

//call this function each 1/2 second
updatetime();
window.setInterval(updateTime, 500);

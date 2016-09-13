


function changePhoto(){
  document.getElementById("high-school").src ="http://images.complex.com/complex/image/upload/t_in_content_image/drake-air-jordan-5-tokyo-23-2_nxii8a.jpg";
}

var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('myBlinkingDiv');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

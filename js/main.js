var canvas = document.getElementById("canvas");
var outerW;
var outerH;
var image = document.getElementById('source');
resizeCanvas();



var context =  canvas.getContext('2d');

context.beginPath();
context.fillStyle= 'grey';
context.fillRect(0, 0, outerW, outerH);
context.drawImage(image, 0, 0, image.width, image.height, 0, 0, outerW, outerH);

canvas.onmousedown = function(){
    canvas.onmousemove = function(){
        //获取鼠标坐标
        var x = event.offsetX;
        var y = event.offsetY;
        draw(x, y);
        console.log(x, y);
    }
}
//鼠标抬起不刮开
canvas.onmouseup=function(){
    canvas.onmousemove = function(){
        return;
    }
}

function resizeCanvas() {
    outerW = canvas.parentElement.offsetWidth;
    outerH = canvas.parentElement.offsetHeight;
    console.log(outerW, outerH);
    canvas.width = outerW;
    canvas.height = outerH;
}

function draw(x, y) {
    //destination-out           显示原来的不在后来区域的部分
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 30, 0,Math.PI*2);
    context.fill();
}

window.addEventListener('resize', function() {
    resizeCanvas();
    draw();
});

var upevent="empty";
var last_position_of_x,last_position_of_y;
cavas=document.getElementById("myCanvas");
ctx=cavas.getContext("2d");
colour="black";
width="1";
cavas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    colour =document.getElementById("input_colour").value;
    width = document.getElementById("input_width").value;
    upevent = "mouseDown";
}
cavas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
current_position_of_mouse_x = e.clientX - cavas.offsetLeft;
current_position_of_mouse_y = e.clientY - cavas.offsetTop;
if(upevent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_y=current_position_of_mouse_y;
last_position_of_x=current_position_of_mouse_x;
}
cavas.addEventListener("mouseleave", my_mouseleave); 
function my_mouseleave(e) { upevent="mouseleave"; }
cavas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) { upevent="mouseUP"; }
function clear_Area() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
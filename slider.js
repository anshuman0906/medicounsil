
var img=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
var i=0;
function slide()
{
//alert("hi");
var div=document.getElementById("slider");
div.style.background="url('images/"+img[i]+"')";
i++;
if(img.length==i)
{
i=0;
}
window.setTimeout("slide()",3000);
}


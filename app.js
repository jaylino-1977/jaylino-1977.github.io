//*************************** buttons *******************************/
 
 const button = document.querySelector('.button');
 const button2 = document.querySelector('.button2');
 const button3 = document.querySelector('.button3');
 
 button.addEventListener('mouseenter', () => {
   if (!button.classList.contains('hover')) {
    button.classList.add('hover');
   }
 });
 
 button.addEventListener('mouseleave', () => {
   if (button.classList.contains('hover')) {
     button.classList.remove('hover');
   }
 });
 
 button2.addEventListener('mouseenter', () => {
     if (!button2.classList.contains('hover')) {
        button2.classList.add('hover');
     }
   });
   
 button2.addEventListener('mouseleave', () => {
     if (button2.classList.contains('hover')) {
        button2.classList.remove('hover');
     }
   });
 
 button3.addEventListener('mouseenter', () => {
   if (!button3.classList.contains('hover')) {
    button3.classList.add('hover');
   }
 });
 
 button3.addEventListener('mouseleave', () => {
   if (button3.classList.contains('hover')) {
    button3.classList.remove('hover');
   }
 });
 //*************************************************************** */

 var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
//*************************************************************** */
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("sample").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

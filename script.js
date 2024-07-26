var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup-box")
var popupbutton=document.getElementById("popup-button")

popupbutton.addEventListener("click",function() {
    overlay.style.display="block"
    popupbox.style.display="block"
}) 
 var cancel=document.getElementById("cancel")
 cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
 })

 var add=document.getElementById("add")
 add.addEventListener("click",function(event){
    event.preventDefault()
 })

 var container=document.querySelector(".container")
 var addbook=document.getElementById("add")
 var Booktitle=document.getElementById("book-title")
 var Bookauthor=document.getElementById("book-author")
 var Bookdescription=document.getElementById("book-description")

 addbook.addEventListener("click",function(event){
   event.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class","book-container")
   div.innerHTML=`<h2>${Booktitle.value}</h2>
            <h5>${Bookauthor.value}</h5>
           <p>${Bookdescription.value}</p>
           <button onclick="Delete(event)">Delete</button>`
            container.append(div)
            overlay.style.display="none"
            popupbox.style.display="none"
         })

         function Delete(event){
            event.target.parentElement.remove()
         }
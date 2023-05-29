



function add() {
let valueOfInput = document.getElementById("inputField").value
if(valueOfInput == "") {
   alert("Bitte schreiben Sie etwas in das Textfeld")
}else {


let newListElement = document.createElement("li")
let text = document.createTextNode(valueOfInput)
newListElement.appendChild(text)

let deleteButton = document.createElement("button")
 let buttonText = document.createTextNode("Löschen")
 deleteButton.classList.add("deleteBtn")
 deleteButton.appendChild(buttonText)

 deleteButton.onclick = function() {
    this.parentNode.remove();

 }
 newListElement.appendChild(deleteButton)
 
let list = document.getElementById("liste")
list.appendChild(newListElement)


document.getElementById("inputField").value = ""
}}

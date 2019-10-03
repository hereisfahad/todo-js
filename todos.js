//vanilla javascript
var toggleForm = document.getElementById('toggle-form')
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.innerHTML=`<span><i class="fa fa-trash"></i></span>`;
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field
}
function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}
function deleteItemFromList(e){
	//little messey but works
	//chheck fo trash class
	if(e.target && e.target.farthestViewportElement.nodeName == "svg"){
		var ulParnet = e.target.parentNode.parentNode.parentNode.parentNode;
		ulParnet.removeChild(e.target.parentNode.parentNode.parentNode)
	}
}
ul.addEventListener('click',deleteItemFromList)
input.addEventListener("keypress", addListAfterKeypress);
toggleForm.addEventListener('click',()=> input.classList.toggle('hide'))

//jquery
// Check Off Specific Todos By Clicking
// $("ul").on("click", "li", function(){
// 	$(this).toggleClass("completed");
// });

//Click on X to delete Todo
// $("ul").on("click", "span", function(event){
// 	$(this).parent().fadeOut(500,function(){
// 		$(this).remove();
// 	});
// 	event.stopPropagation();
// });

//add item
// $("input[type='text']").keypress(function(event){
// 	if(event.which === 13){
// 		//grabbing new todo text from input
// 		var todoText = $(this).val();
// 		$(this).val("");
// 		//create a new li and add to ul
// 		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
// 	}
// });
// toggle input field
// $("#toggle-form").click(function(){
// 	$("input[type='text']").fadeToggle();
// });
// JavaScript Document
var but=document.getElementById("button");

but.onclick= function(){
var value=document.getElementById("Input").value;
if (value === '') {
    alert("You must write something!");}
 else {
var newli= document.createElement("li");
newli.innerHTML=value;
newli.setAttribute("title","Double Click On Me When Completed")
newli.addEventListener("click", addToSecondList);
document.getElementById("list1").appendChild(newli);}
document.getElementById("Input").value="";	
}	


function addToSecondList(event){
	var secondList=document.getElementById("list2");
	var firstList=document.getElementById("list1");
	var newli= document.createElement("li");
	newli.innerHTML = event.target.innerHTML;
	newli.style.textDecoration='line-through';
	newli.setAttribute("title","Double Click To remove and Click to send back to Undergoing task")
	newli.addEventListener("click", deleteFromSecondList);
	newli.addEventListener("drag",backToFirstList)
	secondList.appendChild(newli);
	firstList.removeChild(event.target);
	
}

function backToFirstList(event){
	var secondList=document.getElementById("list2");
	var firstList=document.getElementById("list1");
	var newli= document.createElement("li");
	newli.innerHTML = event.target.innerHTML;
	newli.addEventListener("dblclick", addToSecondList);
	firstList.appendChild(newli);
	firstList.appendChild(newli);
	secondList.removeChild(event.target);
	
}



function deleteFromSecondList(event) {
	
	var secondList=document.getElementById("list2");
	
	secondList.removeChild(event.target);
	
	
}

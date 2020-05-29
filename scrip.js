// JavaScript Document
var but=document.getElementById("button");

but.onclick= function(){
var value=document.getElementById("Input").value;
if (value === '') {
    alert("You must write something!");}
 else {
var newli= document.createElement("li");
newli.innerHTML=value;
 newli.style.fontSize="13px";
newli.setAttribute("title","Double Click On Me When Completed")
newli.addEventListener("dblclick", addToSecondList);
document.getElementById("list1").appendChild(newli);}
document.getElementById("Input").value="";	
}	


function addToSecondList(event){
	var secondList=document.getElementById("list2");
	var firstList=document.getElementById("list1");
	var newli= document.createElement("li");
	newli.innerHTML = event.target.innerHTML;
	newli.style.fontSize="13px";
	newli.style.textDecoration='line-through';
	newli.setAttribute("title","Double Click To remove and Click to send back to Undergoing task")
	newli.addEventListener("dblclick", deleteFromSecondList);
	secondList.appendChild(newli);
	firstList.removeChild(event.target);
	
}





function deleteFromSecondList(event) {
	
	var secondList=document.getElementById("list2");
	
	secondList.removeChild(event.target);
	
	
}

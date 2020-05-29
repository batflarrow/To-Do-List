// JavaScript Document

function liForList2(div){
	var newli= document.createElement("li");
	var value=div.innerHTML; 
	newli.innerHTML=(value);
	document.getElementById("list2").appendChild(newli);
	
}

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
	div.style.display = "none";
	if(div.parentElement.id=="list1")
			{
				liForList2(div);
				
			}
  }
}



//var close = document.getElementsByClassName("close");
//for (i = 0; i < close.length; i++) {
//  close[i].onclick = function() {
//    var div = this.parentElement;
//	if(div.parentElement.id=="list1")
//			{
//	var newli= document.createElement("li");
//	var value=div.innerHTML; 
//	newli.innerHTML=(value);
//	document.getElementById("list2").appendChild(newli);
//			}
//				div.style.display = "none";
//  }
//}

var but=document.getElementById("button");

but.onclick= function(){
	
var newli= document.createElement("li");
var value=document.getElementById("Input").value;

newli.innerHTML=value;

if (value === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list1").appendChild(newli);
  }
	document.getElementById("Input").value="";	

	var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newli.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
		if(div.parentElement.id=="list1")
			{
				liForList2(div);
			}
		div.style.display = "none";
    
  }	
}
	
}



//		
//
//		if(div.parentElement.id=="list1")
//			{
//		var newli= document.createElement("li");
//	var value=div.innerHTML; 
//	newli.innerHTML=(value);
//	document.getElementById("list2").appendChild(newli);
//				div.style.display = "none";
//			}



	

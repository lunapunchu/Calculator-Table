var str = "";
var str2 ="";
var sum = "";
var save = "";
var table = document.getElementById("myTable");
var row = table.insertRow();
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var num = 0;

function calculate(k){
	str = str + k;
	save = save + k;
	document.myform.text1.value = str;
	var text = save;
	node = document.createTextNode(text);
	if(!isNaN(text)){
		if(num == 0){
			cell1.appendChild(node);
			save = "";
		}
		else if(num == 1){
			cell3.appendChild(node);
			save = "";
		}
	}
    else{
		num++;
		cell2.appendChild(node);
		save = "";
	}
}

function clearNum() {
	str = "";
	save = "";
	document.myform.text1.value = str;
	num = 0;
	table = document.getElementById("myTable");
	row = table.insertRow();
	cell1 = row.insertCell(0);
	cell2 = row.insertCell(1);
	cell3 = row.insertCell(2);
	cell4 = row.insertCell(3);
}

function Equal() {
	document.myform.text1.value = eval(document.myform.text1.value);
	var res = eval(document.myform.text1.value);
	node = document.createTextNode(res);
	cell4.appendChild(node);
}
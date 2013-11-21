var soglasion,statusperson,filialperson, countrybrperson, countrylivperson;
soglasion = false;
statusperson = false;
filialperson = false;
countrybrperson = false;
countrylivperson = false;


function addcountriees() {
	for (var i = 0; i <= (countrieslist.length - 1); i++) {
		document.getElementById("listcountrybr").innerHTML +='<div class = "listitem" onclick = " countrybronclick('+i+')">'+countrieslist[i]+'</div>';
		document.getElementById("listcountryliv").innerHTML +='<div class = "listitem" onclick = " countrylivonclick('+i+')">'+countrieslist[i]+'</div>';
		
	};
}

function countrybropen() {
		if (countrybrperson == false)
		{
			$('#buttoncountrybr').css("display", "none");
			$('#listcountrybr').css("display", "block");
  
			$('#listcountrybr').animate(
				{height:"+=214px"},500, function (){
					 jQuery('#listcountrybr').jScrollPane({showArrows: true,
						verticalDragMinHeight: 37,
       	    			verticalDragMaxHeight: 37});
				}
				);
			countrybrperson = true;
		}else {
			
		}

}

function countrylivopen() {
		if (countrylivperson == false)
		{
			

			$('#listcountryliv').css("display", "block");
			 $('#buttoncountryliv').css("display", "none");
  
			$('#listcountryliv').animate(
				{height:"+=214px"},500, function (){
					 jQuery('#listcountryliv').jScrollPane({showArrows: true,
						verticalDragMinHeight: 37,
       	    			verticalDragMaxHeight: 37});
				}
				);
			countrylivperson = true;
		}else {
			
		}

}
 

function statusopen() {

		if (statusperson == false)
		{
			$('#buttonstatus').css("display", "none");
			$('.liststatus').css("display", "block");
  
			$('.liststatus').animate(
				{height:"+=214px"},500, function (){
					 jQuery('.liststatus').jScrollPane({showArrows: true,
						verticalDragMinHeight: 37,
       	    			verticalDragMaxHeight: 37});
				}
				);
			statusperson = true;
		}else {
			
		}
}

function statusopenspec() {
	if (statusperson == false)
		{
			
			$('.liststatus').css("display", "block");
			$('#buttonstatus').css("display", "none");
  
			$('.liststatus').animate(
				{height:"+=214px"},500, function (){
					 jQuery('.liststatus').jScrollPane({showArrows: true,
						verticalDragMinHeight: 37,
       	    			verticalDragMaxHeight: 37});
				}
				);
			statusperson = true;
		}	
}

function filialopen() {

		if (filialperson == false)
		{
			
			$('.listfilial').css("display", "block");
			 $('#filialtextb').css("display", "none");
  
			$('.listfilial').animate(
				{height:"+=175px"},500, function (){
					 jQuery('.listfilial').jScrollPane({showArrows: true,
						verticalDragMinHeight: 37,
       	    			verticalDragMaxHeight: 37});
				}
				);
			filialperson = true;
		}else {
			
		}
}

function filialopenspec() {
		if (filialperson == false)
		{
			
			$('.listfilial').css("display", "block");
  
			$('.listfilial').animate(
				{height:"+=175px"},500, function (){
					 jQuery('.listfilial').jScrollPane({showArrows: true,
						verticalDragMinHeight: 37,
       	    			verticalDragMaxHeight: 37});
				}
				);
			filialperson = true;
		}
}
function soglasieclick() {
	if (soglasion == false){
		soglasion = true;
		//alert(soglasion);
		document.getElementById("soglasietext").innerHTML = '<p  title = "Согласие на обработку персональных данных">Нет, я не согласен(на) на обработку моих данных</p>';
	}else{
		soglasion = false;
		document.getElementById("soglasietext").innerHTML = '<p  title = "Согласие на обработку персональных данных">Да, я согласен(на) на обработку моих данных</p>';
		//alert(soglasion);
	}
}



function submitonclick() {
	if (document.getElementById("personinput").value == ""){
		alert("Вы не ввели свое ФИО");
		document.auto.personname.focus();
	}else {
		alert(document.getElementById("status").value);
		if (document.getElementById("status").value == "") {
				alert("Вы не ввели ваш статус относительно НИУ ВШЭ");
				document.getElementById("statusbutton").focus();
				statusopenspec();
			}else {
					if (document.getElementById("filial").value == "") {
						alert("Вы не выбрали ваш филиал");
						document.getElementById("filialbutton").focus();
						filialopenspec();
					}else {
						document.auto.submit();
					}
			}
	}
}

	/*
if (document.getElementById("personinput").value == ""){
		alert("Вы не ввели свое ФИО");
		document.auto.personname.focus();
	}else {
		if (soglasion==false) {
			alert('Вы не подвердили свое согласие на обработку ваших персональных данных');
			document.getElementById("soglasietext").focus();
		}else{
			if (document.getElementById("status").value == "") {
				alert("Вы не ввели ваш статус относительно НИУ ВШЭ");
				document.getElementById("statusbutton").focus();
			}else {
				document.auto.submit();	
			}
			
		}
	}


	*/

		



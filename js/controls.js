//блок управления элементами статуса
// в массиве должен быть каждый элемент + в html его дублирование в событие onclick

var statusznach = new Array();
	statusznach[0] = "Абитуриент НИУ ВШЭ";
	statusznach[1] = "Студент НИУ ВШЭ";
	statusznach[2] = "Преподаватель НИУ ВШЭ";
	statusznach[3] = "Сотрудник НИУ ВШЭ";
	statusznach[4] = "Родитель абитуриента НИУ ВШЭ";
	statusznach[5] = "Родитель студента НИУ ВШЭ";
var filialznach = new Array();
	filialznach[0] = "Москва";
	filialznach[1] = "МИЭМ";
	filialznach[2] = "Нижний Новгород";
	filialznach[3] = "Пермь";
	filialznach[4] = "ФДП";

var countrieslist = new Array();
	countrieslist[0] = "Австралия";
	countrieslist[1] = "Австрия";
	countrieslist[2] = "Азербайджан";
	countrieslist[3] = "Алжир";
	countrieslist[4] = "Ангола";
	countrieslist[5] = "Андорра";
	countrieslist[6] = "Антигуа и Барбуда";
	countrieslist[7] = "Аргентина";
	countrieslist[8] = "Армения";
	countrieslist[9] = "Афганистан";
	countrieslist[10] = "Багамские Острова";
	countrieslist[11] = "Бангладеш";
	countrieslist[12] = "Барбадос";
	countrieslist[13] = "Бахрейн";
	countrieslist[14] = "Беларусь";
	countrieslist[15] = "Белиз";
	countrieslist[16] = "Бельгия";
	countrieslist[17] = "Бенин";
	countrieslist[18] = "Болгария";
	countrieslist[19] = "Боливия";
	countrieslist[20] = "Босния и Герцеговина";
	countrieslist[21] = "Ботсвана";
	countrieslist[22] = "Бразилия";
	countrieslist[23] = "Бруней";
	countrieslist[24] = "Буркина-Фасо";
	countrieslist[25] = "Бурунди";
	countrieslist[26] = "Бутан";
	countrieslist[27] = "Вануату";
	countrieslist[28] = "Ватикан";
	countrieslist[29] = "Великобритания";
	countrieslist[30] = "Венгрия";
	countrieslist[31] = "Венесуэла";
	countrieslist[32] = "Вьетнам";
	countrieslist[33] = "Габон";
	countrieslist[34] = "Гаити";
	countrieslist[35] = "Гайана";
	countrieslist[36] = "Гамбия";
	countrieslist[37] = "Гана";
	countrieslist[38] = "Гватемала";
	countrieslist[39] = "Гвинея";
	countrieslist[40] = "Германия";
	countrieslist[41] = "Гондурас";
	countrieslist[42] = "Гренада";
	countrieslist[43] = "Греция";
	countrieslist[44] = "Грузия";
	countrieslist[45] = "Дания";
	countrieslist[46] = "Доминиканская Республика";
	countrieslist[47] = "Египет";
	countrieslist[48] = "Замбия";
	countrieslist[49] = "Зимбабве";
	countrieslist[50] = "Израиль";
	countrieslist[51] = "Индия";
	countrieslist[52] = "Индонезия";
	countrieslist[53] = "Иордания";
	countrieslist[54] = "Ирак";
	countrieslist[55] = "Иран";
	countrieslist[56] = "Ирландия";
	countrieslist[57] = "Исландия";
	countrieslist[58] = "Испания";
	countrieslist[59] = "Италия";
    countrieslist[60] = "Йемен";
    countrieslist[61] = "Казахстан";
    countrieslist[62] = "Камбоджа";					
    countrieslist[63] = "Камерун";
    countrieslist[64] = "Канада";
    countrieslist[65] = "Катар";
    countrieslist[66] = "Кения";
    countrieslist[67] = "Кипр";
    countrieslist[68] = "Кирибати";
    countrieslist[69] = "Китай";
    countrieslist[70] = "Колумбия";
    countrieslist[71] = "Коморские Острова";
    countrieslist[72] = "Конго";
    countrieslist[73] = "КНДР";					
    countrieslist[74] = "Коста-Рика";
    countrieslist[75] = "Кот-д'Ивуар";
    countrieslist[76] = "Куба";
    countrieslist[77] = "Кувейт";
    countrieslist[78] = "Кыргызстан";
    countrieslist[79] = "Лаос";
    countrieslist[80] = "Латвия";
    countrieslist[81] = "Лесото";
    countrieslist[82] = "Либерия";
    countrieslist[83] = "Ливан";
    countrieslist[84] = "Ливия";					
    countrieslist[85] = "Литва";
    countrieslist[86] = "Лихтенштейн";
    countrieslist[87] = "Люксембург";
    countrieslist[88] = "Маврикий";
    countrieslist[89] = "Мавритания";
    countrieslist[90] = "Мадагаскар";
    countrieslist[91] = "Македония";
    countrieslist[92] = "Малави";
    countrieslist[93] = "Малайзия";
    countrieslist[94] = "Мали";
    countrieslist[95] = "Мальдивские Острова";
    countrieslist[96] = "Мальта";					
    countrieslist[97] = "Марокко";
    countrieslist[98] = "Маршалловы Острова";
    countrieslist[99] = "Мексика";
    countrieslist[100]="Микронезия";
    countrieslist[101] = "Мозамбик";
    countrieslist[102] = "Молдова";
    countrieslist[103] = "Монако";
    countrieslist[104] = "Монголия";
    countrieslist[105] = "Мьянма";

   
    countrieslist[106] = "Намибия";
    countrieslist[107] = "Науру";
    countrieslist[108] = "Непал";
    countrieslist[109] = "Нигер";
    countrieslist[110] = "Нигерия";
    countrieslist[111] = "Нидерланды";
    countrieslist[112] = "Никарагуа";
    countrieslist[113] = "Новая Зеландия";
    countrieslist[114] = "Норвегия";

    
    countrieslist[115] = "ОАО";
    countrieslist[116] = "Оман";
    countrieslist[117] = "Пакистан";
    countrieslist[118] = "Палау";
    countrieslist[119] = "Панама";
    countrieslist[120] = "Папуа-Новая Гвинея";
    countrieslist[121] = "Парагвай";
    countrieslist[122] = "Перу";
    countrieslist[123] = "Польша";
    countrieslist[124] = "Португалия";

    countrieslist[125] = "Республика Корея";
    countrieslist[126] = "Россия";
    countrieslist[127] = "Руанда";
    countrieslist[128] = "Румыния";

    countrieslist[129] = "Сальвадор";
    countrieslist[130] = "Самоа";
    countrieslist[131] = "Сан-Марино";
    countrieslist[132] = "Саудовская Аравия";
    countrieslist[133] = "Свазиленд";
    countrieslist[134] = "Сейшельские Острова";
    countrieslist[135] = "Сенегал";
    countrieslist[136] = "Сент-Винсент и Гренадины";
    countrieslist[137] = "Сент-Китс и Невис";
    countrieslist[138] = "Сент-Люсия";
    countrieslist[139] = "Сербия*";
    countrieslist[140]= "Сингапур*";
    countrieslist[141] = "Сирия";
    countrieslist[142] = "Словакия";
    countrieslist[143] = "Словения";
    
    countrieslist[144] = "США";
    countrieslist[145] = "Соломоновы Острова";
    countrieslist[146] = "Сомали";
    countrieslist[147] = "Судан";
    countrieslist[148] = "Суринам";
    countrieslist[149] = "Сьерра-Леоне";

    countrieslist[150] = "Таджикистан";
    countrieslist[151] = "Таиланд";
    countrieslist[152] = "Танзания";
    countrieslist[153] = "Тимор-Лешти";
    countrieslist[154] = "Того";
    countrieslist[155] = "Тонга";
    countrieslist[156] = "Тринидад и Тобаго";
    countrieslist[157] = "Тувалу";
    countrieslist[158] = "Тунис";
    countrieslist[159] = "Туркменистан";
    countrieslist[160] = "Турция";
    countrieslist[161] = "Уганда";
    countrieslist[162] = "Узбекистан";
    
    countrieslist[163] = "Украина";
    countrieslist[164] = "Уругвай";
    countrieslist[165] = "Фиджи";
    countrieslist[166] = "Филиппины";
    countrieslist[167] = "Финляндия";
    countrieslist[168] = "Франция";
    countrieslist[169] = "Хорватия";
    countrieslist[170] = "Центральноафриканская Республика";
    countrieslist[171] = "Чад";

    countrieslist[172] = "Черногория*";
    countrieslist[173] = "Чехия";
    countrieslist[174] = "Чили";

    countrieslist[175] = "Швейцария";
    countrieslist[176] = "Швеция";
    countrieslist[177] = "Шри-Ланка";
    countrieslist[178] = "Эквадор";
    countrieslist[179] = "Экваториальная Гвинея";
    countrieslist[180] = "Эритрея";
    countrieslist[181] = "Эстония";
    countrieslist[182] = "Эфиопия";

    countrieslist[183] = "Южная Африка";
    countrieslist[184] = "Южный Судан";
    countrieslist[185] = "Ямайка";
    countrieslist[186] = "Япония";













	
    


function statusonclick(numberelement) {
	document.getElementById("buttonstatus").innerHTML = statusznach[numberelement];
	document.auto.status.value = numberelement;
	//alert(document.auto.status.value);

	$('.liststatus').animate(
				{height:"-=214px"},500
				,function(){
					$('.liststatus').hide();
                    $('#buttonstatus').css("display", "block");
                }
			);
			
	statusperson = false;
}

function countrybronclick(numberelement) {
	document.getElementById("buttoncountrybr").innerHTML = countrieslist[numberelement];
	document.auto.countrybr.value = numberelement;

	$('#listcountrybr').animate(
				{height:"-=214px"},500
				,function(){
					$('#listcountrybr').hide();
                    $('#buttoncountrybr').css("display", "block");
                }
			);
			
			countrybrperson = false;

	//alert(document.auto.status.value);
}

function countrylivonclick(numberelement) {
	document.getElementById("buttoncountryliv").innerHTML = countrieslist[numberelement];
	document.auto.countryliv.value = numberelement;

	$('#listcountryliv').animate(
				{height:"-=214px"},500
				,function(){
					$('#listcountryliv').hide();
                    $('#buttoncountryliv').css("display", "block");
                }
			);
			
			countrylivperson = false;

	//alert(document.auto.status.value);
}

function filialonclick(numberelement) {
	document.getElementById("filialtextb").innerHTML = filialznach[numberelement];
	document.auto.filial.value = numberelement;
//	alert(document.auto.filial.value);
	$('.listfilial').animate(
				{height:"-=175px"},500
				,function(){
					$('.listfilial').hide();
                     $('#filialtextb').css("display", "block");
                }
			);
			
			filialperson = false;
}

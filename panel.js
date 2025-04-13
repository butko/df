document.write("<td width=30% valign=top bgcolor=#99CCCC><h3>Поиск:</h3><center><form action=http://narod.yandex.ru/cgi-bin/yandsearch><input type=hidden name=user value=ab-lib><input name=text><p><input type=submit value=Искать!><input type=hidden name=where value=2></form></center>");
document.write("<hr width=150><h3>Орфография на сайте:</h3><p><center>");
var orfo = new Object;
orfo.email      = "ab-lib@narod.ru";
orfo.img        = "http://ab-lib.narod.ru/banner/enilatiar2.gif";
orfo.img_x      = "121";
orfo.img_y      = "21";
orfo.language   = "ru";
orfo.bgcolor    = 0; // цвет, пока картинка не догрузилась (0 - прозрачный)
orfo.hq         = "http://orphus.dklab.ru"; 
orfo.contlen    = 10;
orfo.contunit   = "word";
orfo.seltag1    = "<!!!>";
orfo.seltag2    = "<!!!>";
orfo.version    = "3.0";

	orfo.alt        = "Выделите орфографическую ошибку мышью и нажмите Ctrl+Enter. Сделаем язык чище!";
	orfo.badbrowser = "Ваш браузер не поддерживает возможность перехвата выделенного текста или IFRAME. Возможно, слишком стара\я верси\я, а возможно, еще кака\я-нибудь ошибка.";
	orfo.toobig     = "Вы выбрали слишком большой объем текста!";
	orfo.thanks     = "Спасибо за сотрудничество!";
	orfo.subject    = "Орфографическая ошибка";
	orfo.docmsg     = "Документ:";
	orfo.intextmsg  = "Орфографическая ошибка в тексте:";
	orfo.ifsendmsg  = "Послать сообщение об ошибке автору?\nВаш браузер останется на той же странице.";
	orfo.gohome     = "Перейти на домашнюю страницу системы Orfo?";
	orfo.author     = "Система Orfo v"+orfo.version+". Автор: Дмитрий Котеров.";

document.writeln(
'<table width=1 cellpadding=0 cellspacing=0 border=0><tr>' +
'<form name=orfo_form target=orfo_frame action="'+orfo.hq+'/" method=post>' +
'<td' + (orfo.bgcolor? ' bgcolor='+orfo.bgcolor : '') + '>' +
	'<table width=1 cellpadding=0 cellspacing=0 border=0' + (orfo.bgcolor? ' bgcolor='+orfo.bgcolor : '') + '>' +
	'<tr valign=top>' +
	'<td>'+
	'	<iframe name=orfo_frame valign=top width=1 height=1 border=0 style="position:absolute;visibility:hidden"></iframe>' +
	'	<input type=hidden name="email" value="'+orfo.email+'">' +
	'	<input type=hidden name="subject" value="'+orfo.subject+'">' +
	'	<input type=hidden name="Referrer" value="">' +
	'	<input type=hidden name="Address" value="">' +
	'	<input type=hidden name="Context" value="">' +
	'</td><td>' +
	'	<a onClick="return orfo_imgclick()" target=_blank href="'+orfo.hq+'/"><img src="'+orfo.img+'" alt="'+orfo.alt+'" title="'+orfo.alt+'" width="'+orfo.img_x+'" height="'+orfo.img_y+'" border=0></a>' +
	'</td>' +
	'</tr>' +
	'</table>' +
'</td>' +
'</form>' +
'</tr></table>'
);
function BODY_onkeypress(e)
{	var pressed=0;
	if(!orfo.ready) return;
	var we=null;
	if(window.event) we=window.event;
	else if(parent && parent.event) we=parent.event;
	if(we) {
		// IE
		pressed=we.keyCode==10;
	} else if(e) {
		// NN
		pressed = 
			(e.which==10 && e.modifiers==2) || // NN4
			(e.keyCode==0 && e.charCode==106 && e.ctrlKey) ||
			(e.keyCode==13 && e.ctrlKey) // Mozilla
	}
	if(pressed) orfo_do();
}
function orfo_strip_tags(text) {
	for(var s=0; s<text.length; s++) {
		if(text.charAt(s)=='<') {
			var e=text.indexOf('>',s); if(e<=0 || e==false) continue;	
			text=text.substring(0,s)+text.substring(e+1); s--;
		}
	}
	return text;
}
function orfo_strip_slashn(text) {
	for(var s=0; s<text.length; s++) {
		if(text.charAt(s)=='\n' || text.charAt(s)=='\r') {
			text=text.substring(0,s)+" "+text.substring(s+1);
			s--;
		}
	}
	return text;
}
function orfo_do() {
	var text=null, context=null;
	if(navigator.appName.indexOf("Netscape")!=-1 && eval(navigator.appVersion.substring(0,1))<5) {
		alert(orfo.badbrowser);
		return;
	}
	var w = parent? parent : window;
	var selection = null;
	if(w.getSelection) {
		context=text=w.getSelection();
	} else if(w.document.getSelection) {
		context=text=orfo_strip_tags(w.document.getSelection());
	} else {
		selection = w.document.selection;
	}
	if(selection) {
		var sel = text = selection.createRange().text;
		var s=0; while(text.charAt(s)==" " || text.charAt(s)=="\n") s++;
		var e=0; while(text.charAt(text.length-e-1)==" " || text.charAt(text.length-e-1)=="\n") e++;
		var rngA=selection.createRange();
		rngA.moveStart(orfo.contunit,-orfo.contlen);
		rngA.moveEnd("character",-text.length+s);
		var rngB=selection.createRange();
		rngB.moveEnd(orfo.contunit,orfo.contlen);
		rngB.moveStart("character",text.length-e);
		text    = text.substring(s,text.length-e);
		context = rngA.text+orfo.seltag1+text+orfo.seltag2+rngB.text;
	}
	if(text==null) { alert(orfo.badbrowser); return; }
	if(context.length>256) {
		alert(orfo.toobig);
		return;
	}
	var url = w.document.location;
	if(confirm(orfo.docmsg+"\n    "+url+"\n"+orfo.intextmsg+'\n    "'+orfo_strip_slashn(context)+'"\n\n'+orfo.ifsendmsg)) {
		orfo_send(text,url,context);
		orfo_thanks(0);
	}
}
function orfo_thanks(n)
{	var s=orfo.thanks;
	if(n>20) return;
	if(!(n%5)) s=' ';
	window.status=s;
	setTimeout("orfo_thanks("+(n+1)+")",100);
}
function orfo_send(text,url,context)
{	var form=document.orfo_form;
	if(!form) return;
	if(!context) context=text;
	form["Address"].value=url;
	form["Context"].value=context;
	form["Referrer"].value=top.document.location;
	form.submit();
}
function orfo_imgclick() {
	return confirm(orfo.author+"\n\n"+orfo.alt+"\n\n"+orfo.gohome);
}
orfo.ready = true;
document.onkeypress = BODY_onkeypress;
if(parent) parent.document.onkeypress = BODY_onkeypress;
document.write("</center><br><small>чтобы сообщить об ошибке на странице, просто выделите ее и нажмите Ctrl+Enter.</small>");
//
document.write("<hr width=150><h3>Общение:</h3><small><br><a href=http://www.guestbook.ru/book.cgi?user=butko&action=sign>Оставить запись в гостевой книге</a><br><a href=http://www.guestbook.ru/book.cgi?user=butko&action=show>Посмотреть гостевую книгу</a><br><a href=mailto:abutko@gmail.com?subject=web_site>Написать письмо владельцу сайта</a><br><a href=http://ab-lib.narod.ru/phpbb/>Форум сайта</a><br><a href=http://subscribe.ru/catalog/lit.book.library.ablib>Рассылка сайта</a><br><a href=http://www.livejournal.com/users/butko/>Живой журнал</a></small>");

//
document.write("<hr width=150><h3>Новости:</h3><p><small>");

document.write("<b>20.02.09</b> Сайт переехал обратно. Хостинг IATP больше не работает<br>");
document.write("<b>12.11.04</b> Сайт переезжает на новый хостинг, возможны перебои в работе отдельных частей сайта. Страницы на <a href=http://ab-lib.narod.ru>http://ab-lib.narod.ru</a> больше не будут обновляться и со временем будут переадресовывать на новый адрес<br>");
document.write("<b>04.01.2005</b> Фотографии  Донецка. Индустриалка <a href=http://ab-lib.narod.ru/butko/ab_foto_2004_industrial.htm> &gt;&gt;</a><br>");
document.write("<b>27.12.2004</b> RSS-ленты <a href=http://ab-lib.narod.ru/butko/ab_site.htm> &gt;&gt;</a><br>");
document.write("<b>24.12.2004</b> Фотографии парка ленинского комсомола в Донецке <a href=http://ab-lib.narod.ru/butko/ab_foto_2004_donetskpark.htm> &gt;&gt;</a><br>");
document.write("<b>20.12.2004</b> Фотографии  Донецка <a href=http://ab-lib.narod.ru/butko/ab_foto_2004_donetsk.htm> &gt;&gt;</a><br>");
document.write("<b>16.12.2004</b> 6 mp3-шек с ДФ 2004 <a href=http://ab-lib.narod.ru/df/df_mp3_04.htm> &gt;&gt;</a><br>");
document.write("<b>14.12.2004</b> Фотографии Большого каньона в Крыму <a href=http://ab-lib.narod.ru/butko/ab_foto_2004_kanyon.htm> &gt;&gt;</a><br>");
document.write("<b>13.12.2004</b> Фотографии Балаклавы <a href=http://ab-lib.narod.ru/butko/ab_foto_2004_balaklava.htm> &gt;&gt;</a><br>");
document.write("<b>06.12.2004</b> Новый автор: Юля Шинкарь <a href=http://ab-lib.narod.ru/juliett/> &gt;&gt;</a><br>");
document.write("<b>лето-осень 2004</b> Сайт &laquo;Социальная информация как инструмент социальных изменений&raquo; <a href=http://ab-lib.narod.ru/butko/ab_site_socinfo.htm> &gt;&gt;</a><br>");
document.write("<b>15.11.2004</b> Очередная попытка завести форум для сайта :) <a href=http://ab-lib.narod.ru/phpbb/> &gt;&gt;</a><br>");
document.write("<b>11.11.2004</b> Возобновила работу рассылка сайта  <a href=http://subscribe.ru/catalog/lit.book.library.ablib> &gt;&gt;</a><br>");
document.write("<b>08.11.2004</b> Фотографии парка кованых скульптур в Донецке <a href=http://ab-lib.narod.ru/butko/ab_foto_2004_donetskkovan.htm> &gt;&gt;</a><br>");
document.write("<b>05.11.2004</b> Фотографии осеннего леса <a href=http://ab-lib.narod.ru/butko/ab_foto_2004_osen.htm> &gt;&gt;</a><br>");
document.write("<b>27.10.2004</b> Фотографии Инкермана <a href=http://ab-lib.narod.ru/butko/ab_foto_2004_inkerman.htm> &gt;&gt;</a><br>");
document.write("<b>27.10.2004</b> Фотографии Нового Света <a href=http://ab-lib.narod.ru/butko/ab_foto_2004_svet.htm> &gt;&gt;</a><br>");
document.write("</small>");
//
document.write("<FORM TARGET=_top ACTION=http://subscribe.ru/member/quick METHOD=POST>");
document.write("<INPUT TYPE=hidden NAME=action VALUE=quick>");
document.write("<TABLE align=center BORDER=1 CELLSPACING=0 CELLPADDING=2>");
document.write("<TR><TD BGCOLOR=#FCF5E9 ALIGN=CENTER COLSPAN=2>");
document.write("<FONT SIZE=-1>Рассылки ");
document.write("<A HREF=http://subscribe.ru/><B>Subscribe.Ru</B></A></FONT>");
document.write("</TD></TR><TR><TD BGCOLOR=#FFFFFF ALIGN=LEFT VALIGN=middle COLSPAN=2>");
document.write("<FONT SIZE=-1><INPUT TYPE=checkbox NAME=grp VALUE='lit.book.library.ablib' CHECKED>");
document.write("<A HREF=http://subscribe.ru/catalog/lit.book.library.ablib");
document.write(">Арт-новости</A><BR>");
document.write("<INPUT TYPE=checkbox NAME=grp VALUE='country.ua.fin.dobrota' CHECKED>");
document.write("<A HREF=http://subscribe.ru/catalog/country.ua.fin.dobrota");
document.write(">Социальные новости</A><BR>");
document.write("</FONT>");
document.write("</TD></TR><TR><TD BGCOLOR=#FFFFFF ALIGN=CENTER VALIGN=middle COLSPAN=2>");
document.write("<FONT SIZE=-1>");
document.write("<INPUT TYPE=text NAME=email SIZE=20 MAXLENGTH=100 VALUE='ваш e-mail'");
document.write("style='font-size: 9pt'>");
document.write("<INPUT TYPE=submit VALUE='OK' style='font-size: 9pt'>");
document.write("</FONT></TD></TR>");
document.write("</TABLE>");
document.write("<INPUT TYPE=hidden NAME=src VALUE='list_lit.book.library.ablib'>");
document.write("</FORM>");

//

document.write("<hr width=150><h3>Акварели Евгения Кривцуна:</h3><center>");
var e=Math.round(Math.random()*72)+1;
var uri="http://krivtsun.narod.ru/";
if (e>9) {document.write("<a href=",uri,"view.htm?",uri,"kr0",e,"*jpg><img src=",uri,"kr0",e,"s.jpg></a>");} else {document.write("<a href=",uri,"view.htm?",uri,"kr00",e,"*jpg><img src=",uri,"kr00",e,"s.jpg></a>");}
document.write("<br><small><a href='mailto:krivtsun@narod.ru?subject=хочу купить акварель ",e,"'>купить эту акварель</a></small></center>");
//
document.write("</tr><tr><td colspan=3 valign=bottom bgcolor=#99CCCC><small><p align=right><a href=http://ab-lib.narod.ru>http://ab-lib.narod.ru</a><br><nobr>web-master &copy; <a href=http://ab-lib.narod.ru/butko/ab_site.htm>Бутко А.В.</a></small></nobr></tr></table>");
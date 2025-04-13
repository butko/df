function kadr(k)
	{document.write("<td width=150 align=center valign=middle><a href=view.htm?",k,"*jpg><img src=",k,"s.jpg></a>");}

function perforacia()
	{document.write("<tr><td colspan=4><table background=http://ab-lib.narod.ru/kadr.gif width=100% height=25 cellpadding=0 cellspacing=0><tr><td>&nbsp;</tr></table></tr>");}

function plenka(i1,i2,i3,i4)
	{document.write("<center><table bgcolor=black cellspacing=5>");
	perforacia();  	
	document.write("<tr>"); kadr(i1); kadr(i2); kadr(i3); kadr(i4); document.write("</tr>");
	perforacia();  	
	document.write("</table></center>");}

function page(x,y)
	{if (document.location!=x) {document.write("<a href=",x,">",y,"</a>")} 
	else {document.write(y)}}

function navigate(list,nav1,nav2) {
	for(i=z; i>=0; i--) { flag=1;
	for(j=0; j<30; j++) {
		if (pm[i]==nav2[j]) {page(nav1[j],pm[i]); flag=0}}
        	if (flag==1) {document.write(pm[i])}
		if (i!=0) {document.write(" &gt; ")}}
	document.write("<br><b>Что есть еще:</b> "); 
	for(i=0; i<list; i++)
		{document.write("<nobr>"); page(nav1[i],nav2[i]); document.write("</nobr>"); 
		if (i!=list-1) {document.write(" <b>::</b> ")}}}

function showb100 (n) {
	document.write("<p><a href=",b100l[n],"><img src=http://ab-lib.narod.ru/banner/100x100_",n,".jpg width=100 height=100><br><small>это ",b100t[n],"</small></a>");}

var url="http://ab-lib.narod.ru/";
var b100t=["смерть","VRML-сцена","online-пятнашки","карта к Heroes of Might & Magic III","одуванчиковый ветер","билет на ДФ","останки CD","Курт Воннегут","Сергей Левшин","Алексей Шинкарь","рисунок ученицы","кроссворд в табличном редакторе","акварель Евгения Кривцуна","акварель Евгения Кривцуна","жизнь","шахматы","лавочка","кованый петух"];
var b100l=[url+"df/df_text_smert.htm",url+"butko/src011.htm",url+"butko/ab_game_15_js.htm",url+"butko/ab_game.htm",url+"farin/farin002.htm",url+"df/",url+"butko/ab_pic_zhazhda.htm",url+"helga/vonnegut01.htm",url+"levshin/",url+"shinkar/","http://na-start.narod.ru/studgraph/1.htm",url+"butko/table003.htm","http://krivtsun.narod.ru","http://krivtsun.narod.ru",url+"d_roll/gal1/pic1.htm",url+"butko/ab_pic_chess.htm",url+"butko/ab_foto_2004_pushkin.htm",url+"butko/ab_foto_2004_donetskkovan.htm"];
var maxb100=18;

document.write("<table align=center cellspacing=10 cellpadding=10 width=100%><tr><td colspan=3 valign=bottom bgcolor=#99CCCC><small><b>Вы здесь:</b> ");
var pm=document.title.split(' :: ');
var z=0; while (pm[z]!="А.Б.иблиотека") {z++};
navigate(list,nav1,nav2);
document.write("</small></tr><tr><td valign=top bgcolor=#99CCCC>");

var e=[0,0,0,0];
for(i=0; i<4; i++) 
{e[i]=Math.round(Math.random()*maxb100);
showb100(e[i]);
document.write("<hr width=50>");}
document.write("<h3>Счетчики:</h3><center>");

//LiveInternet counter
document.write('<a href="http://www.liveinternet.ru/click" '+
'target=_blank><img src="http://counter.yadro.ru/hit?t14.1;r'+
escape(document.referrer)+((typeof(screen)=='undefined')?'':
';s'+screen.width+'*'+screen.height+'*'+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+';u'+escape(document.URL)+
';'+Math.random()+
'" alt="liveinternet.ru: показано число просмотров за 24 часа, посетителей за 24 часа и за сегодн\я" '+
'border=0 width=88 height=31></a>')
//TOP100
document.write("<br><a href=http://top100.rambler.ru/top100/><img src=http://counter.rambler.ru/top100.cnt?235196 alt='Ramblers Top100' width=1 height=1></a><a href=http://top100.rambler.ru/top100/><img src=http://top100-images.rambler.ru/top100/w1.gif alt='Ramblers Top100' width=88 height=31></a><img width=1 height=1>");
//
document.write("</center><td width=70% valign=top bgcolor=white class=ramka><h1>",pm[0],"</h1>");
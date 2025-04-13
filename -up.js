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

document.write("<table align=center cellspacing=10 cellpadding=10 width=100%><tr><td colspan=3 valign=bottom bgcolor=#99CCCC><small><b>Вы здесь:</b> ");
var pm=document.title.split(' :: ');
var z=0; while (pm[z]!="А.Б.иблиотека") {z++};
navigate(list,nav1,nav2);
document.write("</small></tr><tr><td valign=top bgcolor=#99CCCC>");

var e=[0,0,0,0];
for(i=0; i<4; i++) 
{e[i]=Math.round(Math.random()*maxb100);
showb100(e[i]);
//
document.write("</center><td width=70% valign=top bgcolor=white class=ramka><h1>",pm[0],"</h1>");
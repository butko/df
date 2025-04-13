function plus() {i1.width=i1.width+10}

function minus() {i1.width=i1.width-10}

function num() {for (i=0; i<=maxiw; i++) {if (location.search==iw[i]) {return i+1}}}

function slide() {document.write("<p><img src=http://ab-lib.narod.ru/banner/left.gif alt='Предыдущее изображение' onclick=left()> | изображение ",num()," из ",maxiw," | <img src=http://ab-lib.narod.ru/banner/right.gif alt='Следующее изображение' onclick=right()>")}

function right() {for (i=0; i<=maxiw; i++) {if (location.search==iw[i]) {if (i+1!=maxiw) {location.search=iw[i+1]} else {location.search=iw[0]}}}}

function left() {for (i=0; i<=maxiw; i++) {if (location.search==iw[i]) {if (i!=0) {location.search=iw[i-1]} else {location.search=iw[maxiw-1]}}}}

function picture(ext)
{document.write("<p><small><img src=",pm[0],".",ext," id=i1>");
document.write("<p>"); //slide();
document.write(" | <img src=http://ab-lib.narod.ru/banner/plus.gif alt='Увеличить рисунок' onclick=plus()> | <img src=http://ab-lib.narod.ru/banner/minus.gif alt='Уменьшить рисунок' onclick=minus()></small>"); }

function vector(ext)
{picture(ext);
document.write(" | <a href=",pm[0],".",pm[1],"><img src=http://ab-lib.narod.ru/banner/save.gif alt='скачать векторный рисунок'></a>");}

document.write("<center>"); 
var pm=location.search.substring(1).split('*');
if ((pm[2]!="jpg")&&(pm[2]!="png")) {pm[2]="gif"};
switch(pm[1])
{
case "gif": picture("gif"); break;
case "jpg": picture("jpg"); break;
case "png": picture("png"); break;
case "cdr": vector(pm[2]); break;
case "sxd": vector(pm[2]); break;
case "por": vector(pm[2]); break;
case "xar": vector(pm[2]); break;

case "wrl":
document.write("<p><small>Для просмотра сцены понадобится VRML-клиент. Например <a href=http://www.paragraph.ru/cortona/>Cortona VRML-client</a> или <a href=http://www.cosmosoftware.com>Cosmo Player</a>");
document.write("<p><embed src=",pm[0],".wrl width=700 height=350 ><p>");
document.write("<p>"); //slide();
document.write(" | <a href=",pm[0],".wrl><img src=http://ab-lib.narod.ru/banner/full.gif alt='посмотреть сцену на все окно браузера'></a> | <a href=",pm[0],".zip><img src=http://ab-lib.narod.ru/banner/save.gif alt='скачать сцену'></a></small>"); break;

case "swf":
document.write("<p><small>Для просмотра понадобится <a href=http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash>плагин от Macromedia</a>");
document.write("<p><embed src=",pm[0],".swf quality=high width=500 height=500 type=application/x-shockwave-flash pluginspage=http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash></small>"); break;
}

document.write("</center>"); 
function picture(ext)
{document.write("<p><center><img src=",pm[0],".",ext,"></center>"); }

function vector(ext)
{picture(ext);
document.write("<p><center><small><a href=",pm[0],".",pm[1],">������� ��������� �������</a> :: <a href=",location.pathname,"?",pm[0],"*swf>���������� flash-�������</a></small></center>");}

var pm=location.search.substring(1).split('*');
switch(pm[1])
{
case "gif": picture("gif"); break;
case "jpg": picture("jpg"); break;
case "png": picture("png"); break;
case "cdr": vector(pm[2]); break;

case "wrl":
document.write("<p><small><center>��� ��������� ����� ����������� VRML-������. �������� <a href=http://www.paragraph.ru/cortona/>Cortona VRML-client</a> ��� <a href=http://www.cosmosoftware.com>Cosmo Player</a>");
document.write("<p><embed src=",pm[0],".wrl width=700 height=350 >");
document.write("<p><a href=",pm[0],".wrl>���������� ����� �� ���� �����</a> :: <a href=",pm[0],".zip>������� �����</a></small></center>"); break;

case "xar":
vector(pm[2]);
document.write("<br><center><a href=http://www.xara.com/xx.asp?ID=164936><img src=http://ab-lib.narod.ru/banner/xarax.gif  alt='������� XaraX'></a></center>"); break;

case "sxd":
picture("gif");
document.write("<p><center><small><a href=",pm[0],".sxd>������� ��������� �������</a></small></center>"); break;

case "por":
picture("gif");
document.write("<p><center><small><a href=",pm[0],".por>������� �������</a></small></center>"); break;

case "swf":
document.write("<p><center><small>��� ��������� ����������� <a href=http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash>������ �� Macromedia</a>");
document.write("<p><embed src=",pm[0],".swf quality=high width=500 height=500 type=application/x-shockwave-flash pluginspage=http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash></small></center>"); break;
}
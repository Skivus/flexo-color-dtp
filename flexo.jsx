   //создаем диалог
    var docRef = app.activeDocument;
    var docRefAll = docRef.pageItems.length;  
  
    dlg = new Window('dialog');
    // определяем файловую систему
    if(File.fs == "Windows") WFS = true;
activeDocument.XMPString = activeDocument.XMPString.replace('         </dc:title>', '''         </dc:title>
<dc:creator>
<rdf:Seq>
<rdf:li>Brumel</rdf:li>
</rdf:Seq>
</dc:creator>          
<dc:subject>
<rdf:Bag>
<rdf:li>(c) 2012 flexo prepress script by Brumel</rdf:li>
</rdf:Bag>
</dc:subject>''');
    mainmenu();


function mainmenu(){    
    dlg.text = "FlexoDTP ver.: 0.3.120727" ; // заголовок диалога
    dlg.childrenAlignment = 'center';

    var cb_w = 20;
    var cb_h = 15;    

    var mp = dlg.add('panel');
    var mp_left = 5;
    var mp_top = 5;
    var mp_right = 600;
    var mp_bottom = 320;
        mp.bounds = [mp_left, mp_top, mp_right, mp_bottom];
    
    MAKE_TXT(200, 10, 400, mp, "В документе обнаружено: "+docRefAll+" объектов");
    
//"Определение параметров обработки CMYK" 
      var CMYK = mp.add('panel');
      var CMYK_left = 5;
      var CMYK_top = 30;
      var CMYK_right = 295;
      var CMYK_bottom = 110;
      CMYK.text="Обработка CMYK";
      CMYK.bounds = [CMYK_left, CMYK_top, CMYK_right, CMYK_bottom]; 
      
    MAKE_CB(5, 10, 1, CMYK, 'CMYK98');    
    MAKE_TXT(25, 10, 170, CMYK, "Ограничение в 98% цвета");

    MAKE_CB(5, 30, 1, CMYK, 'CMYK4');
    MAKE_TXT(25, 30, 130, CMYK, "%min растра на печати");
    MAKE_INPUT(155, 30, 20, CMYK, "4", 'CMYK04');
    
 MAKE_CB(5, 50, 0, CMYK, 'CMYKcmy');
 MAKE_TXT(25, 50, 130, CMYK, "CMYK -> CMY");
 
   
// "Определение параметров обработки Spot";
      var SPOT = mp.add('panel');
      var SPOT_left = 300;
      var SPOT_top = 30;
      var SPOT_right = 585;
      var SPOT_bottom = 110;
      SPOT.text="Обработка SPOT";
      SPOT.bounds = [SPOT_left, SPOT_top, SPOT_right, SPOT_bottom];

    MAKE_CB(5, 10, 0, SPOT, 'SPOT98');    
    MAKE_TXT(25, 10, 170, SPOT, "Ограничение в 98% цвета");

    MAKE_CB(5, 30, 0, SPOT, 'SPOT4');
    MAKE_TXT(25, 30, 130, SPOT, "%min растра на печати");
    MAKE_INPUT(155, 30, 20, SPOT, "4", 'SPOT04');
    
  //  MAKE_CB(5, 50, 0, SPOT, 'SPOTgr');    
  //  MAKE_TXT(25, 50, 170, SPOT, "Gray -> CMYK");    

// определение параметров для STROKE
      var STROKE = mp.add('panel');
      var STROKE_left = 5;
      var STROKE_top = 115;
      var STROKE_right = 585;
      var STROKE_bottom = 175;
      STROKE.text="Обработка STROKE";
      STROKE.bounds = [STROKE_left, STROKE_top, STROKE_right, STROKE_bottom];

    MAKE_CB(5, 10, 1, STROKE, 'STROKE98');    
    MAKE_TXT(25, 10, 170, STROKE, "Ограничение в 98% цвета");
    
    MAKE_CB(5, 30, 1, STROKE, 'STROKE4');
    MAKE_TXT(25, 30, 130, STROKE, "%min растра на печати");
    MAKE_INPUT(155, 30, 20, STROKE, "4", 'STROKE04');
    
    MAKE_CB(300, 10, 1, STROKE, 'STROKEli');
    MAKE_TXT(320, 10, 130, STROKE, "толщина stroke");
    MAKE_INPUT(450, 10, 40, STROKE, "0.2", 'STROKEline');
    MAKE_TXT(495, 10, 50, STROKE, "мм");
  
  MAKE_CB(300, 30, 0, STROKE, 'STROKEcmy');
    MAKE_TXT(320, 30, 130, STROKE, "CMYK -> CMY"); 
    
// определение параметров для GRADIENT
      var GRADIENT = mp.add('panel');
      var GRADIENT_left = 5;
      var GRADIENT_top = 180;
      var GRADIENT_right = 585;
      var GRADIENT_bottom = 260;
      GRADIENT.text="Обработка GRADIENT";
      GRADIENT.bounds = [GRADIENT_left, GRADIENT_top, GRADIENT_right, GRADIENT_bottom];

    MAKE_CB(5, 10, 1, GRADIENT, 'GRADIENT98');    
    MAKE_TXT(25, 10, 170, GRADIENT, "Ограничение в 98% цвета");

    MAKE_CB(5, 30, 1, GRADIENT, 'GRADIENT4');
    MAKE_TXT(25, 30, 130, GRADIENT, "%min растра на печати");
    MAKE_INPUT(155, 30, 20, GRADIENT, "4", 'GRADIENT04'); 
    
  MAKE_CB(5, 50, 0, GRADIENT, 'GRADIENTcmy');
  MAKE_TXT(25, 50, 130, GRADIENT, "CMYK -> CMY");   
// определение параметров для OVERPRINT
      var OVERPRINT = mp.add('panel');
      var OVERPRINT_left = 5;
      var OVERPRINT_top = 265;
      var OVERPRINT_right = 585;
      var OVERPRINT_bottom = 305;
      OVERPRINT.text="Обработка OVERPRINT";
      OVERPRINT.bounds = [OVERPRINT_left, OVERPRINT_top, OVERPRINT_right, OVERPRINT_bottom];

    MAKE_CB(5, 10, 1, OVERPRINT, 'OVERPRINTfil');   
    MAKE_TXT(25, 10, 170, OVERPRINT, "Black overprint fill");

    MAKE_CB(305, 10, 1, OVERPRINT, 'OVERPRINTstr');
    MAKE_TXT(325, 10, 130, OVERPRINT, "Black overprint stroke");

    var help=0;
      
    dlg.okPanel = dlg.add('group');
    dlg.okPanel.orientation = 'row';
    dlg.okPanel.okBtn = dlg.okPanel.add('button', undefined, 'OK');// кнопка ОК
    dlg.okPanel.cancelBtn =dlg.okPanel.add('button',undefined, 'Cancel');// кнопка Cancel
    help = dlg.okPanel.add('button', undefined, 'Help');
    help.onClick = HELP_CLICK;
    
    
      var DIALOG_BUTTON = dlg.show();
    
      if (DIALOG_BUTTON == 1) 
    {

    if (CMYK.children[0].value){
    var CMYKup = 98;
    }
    else {
    var CMYKup = 100;
    }

    if (CMYK.children[2].value){
    var CMYKdown = CMYK.children[4].text;
    }
    else {
    var CMYKdown = 0;
    }

    if (CMYK.children[5].value){
    var CMYKcmy = 1;
    }
    else {
    var CMYKcmy = 0;
    }


    if (SPOT.children[0].value){
    var SPOTup = 98;
    }
    else {
    var SPOTup = 100;
    }

    if (SPOT.children[2].value){
    var SPOTdown = SPOT.children[4].text;
    }
    else {
    var SPOTdown = 0;
    }

//    if (SPOT.children[5].value){
//    var GRAYcmy = 1;
//    }
//    else {
//    var GRAYcmy = 0;
//    }

    if (STROKE.children[0].value){
    var STROKEup = 98;
    }
    else {
    var STROKEup = 100;
    }

    if (STROKE.children[2].value){
    var CMYKdown = STROKE.children[4].text;
    }
    else {
    var STROKEdown = 0;
    }

    if (STROKE.children[5].value){
    var STROKEsize = STROKE.children[7].text;
    }
    else {
    var STROKEsize = 0;
    }
  
    if (STROKE.children[9].value){
    var STROKEcmy = 1;
    }
    else {
    var STROKEcmy = 0;
    } 
  

    if (GRADIENT.children[0].value){
    var GRADIENTup = 98;
    }
    else {
    var GRADIENTup = 100;
    }

    if (GRADIENT.children[2].value){
    var GRADIENTdown = GRADIENT.children[4].text;
    }
    else {
    var GRADIENTdown = 0;
    }

    if (GRADIENT.children[5].value){
    var GRADIENTcmy = 1;
    }
    else {
    var GRADIENTcmy = 0;
    }   
    
    if (OVERPRINT.children[0].value){
    var OVERPRINTfil = 1;
    }
    else {
    var OVERPRINTfil = 0;
    }

    if (OVERPRINT.children[2].value){
    var OVERPRINTstr = 1;
    }
    else {
    var OVERPRINTstr = 0;
    } 
  //GRAYcmy GRADIENTcmy,CMYKcmy
  proverka(CMYKup,CMYKdown,SPOTup,SPOTdown,STROKEup,STROKEdown,STROKEsize,GRADIENTup,GRADIENTdown,OVERPRINTfil,OVERPRINTstr,CMYKcmy,STROKEcmy,GRADIENTcmy);
 
}
  }
    
    


function HELP_CLICK()
        {
    HELPMENU();
    }
    
function HELPMENU(){
var text="Спасибо, что используете мой скрипт.\n\n";
text+="!!! ВНИМАНИЕ! Данный скрипт нужен в первую и последнюю очередь препрессникам флексопечати. Остальным - на Ваше личное усмотрение !!!\n\n";
text+="Данный скрипт проверяет каждый объект на предмет цвета заливки и обводки.\n";
text+="Если в цвете присутствует 'загрязняющий' канал (к примеру в синем цвете тень выполнена желтым) то скрипт автоматически исправляет этот недочет и перекидывает всю грязь в черный.\n";
text+="Также присутствует проверка на минимально допустимую толщину линий (указываете сами).\n";
text+="Типы обрабатываемых цветовых заливок: CMYK, Spot, Gradient, Gray. Типы обрабатываемых цветовых обводок: CMYK, Spot, Gray. Прозрачности не трогаю.\n";
text+="Изменения\n";
text+="[+] Конвертирование CMYK в CMY в заливках и обводках.\n";
text+="\n\n";
text+="Написание скрипта начато в бытность мою препрессником в ДнПА, ну а закончено - на Профи-Пак.\n";
text+="Если вдруг захотите выразить мне моральную благодарность то пишите на Skype:profypack";
text+="\n";
text+="Ну, а если материальную благодарность (так сказать на пиво :) то WMU:275465380352\n\n";
text+="(с) 2011-2012 Brumel";
alert (text);
}   
    
function MAKE_BUTTON(x, y, w, where, txt)
    {
      var b = where.add('button');
      var btn_h = 20;
      b.text = txt;
      b.bounds = [x, y, x+w, y+btn_h];
      return b;
    }
    // подпрограмма создания чекбокса
function MAKE_CB( x, y, s, where, name)
    {
      var cb = where.add('checkbox');
      cb.value = s;
      var c_w = 15;  
      cb.bounds = [x, y, x+c_w, y+15];
      cb.id=name;
      return cb;
    };// end MAKE_CB  
function MAKE_TXT(x, y, w, where, txt){
    var g_t = where.add('statictext');
    g_t.text = txt;
    g_t.bounds = [x, y, x+w, y+20];
    return g_t;
}   
function MAKE_INPUT(x, y, w, where, txt, name){
      var txt_ed = where.add('edittext');
      txt_ed.bounds = [x, y, x+w, y+18];
      txt_ed.text = txt;
      txt_ed.id=name;
      return txt_ed;
}

function proverka(CMYKup,CMYKdown,SPOTup,SPOTdown,STROKEup,STROKEdown,STROKEsize,GRADIENTup,GRADIENTdown,OVERPRINTfil,OVERPRINTstr,CMYKcmy,STROKEcmy,GRADIENTcmy){
// Check there is at least 1 document open
if (app.documents.length > 0 ) {
  var objC=0;
  var objM=0;
  var objY=0;
  var objK=0;
  var objR=0;
  var objG=0;
  var objB=0;
  var grandC=grandM=grandY=grandK=0;

for (i=0; i<docRefAll; i++){
var grCy=grMa=grYe=grBk=0;
objC=objM=objY=objK=objR=objG=objB=0;
// check fillcolor=cmyk
  if ((docRef.pageItems[i]=="[PathItem ]") && (docRef.pageItems[i].fillColor=="[CMYKColor]")){
objC=Math.round(docRef.pageItems[i].fillColor.cyan);
objM=Math.round(docRef.pageItems[i].fillColor.magenta);
objY=Math.round(docRef.pageItems[i].fillColor.yellow);
objK=Math.round(docRef.pageItems[i].fillColor.black);


objR=objM+objY;
objG=objC+objY;
objB=objC+objM;

if (objC<CMYKdown){
objC=0;
}
if (objC>CMYKup){
objC=CMYKup;
}
if (objM<CMYKdown){
objM=0;
}
if (objM>CMYKup){
objM=CMYKup;
}
if (objY<CMYKdown){
objY=0;
}
if (objY>CMYKup){
objY=CMYKup;
}
if (objK<CMYKdown){
objK=0;
}
if (objK>CMYKup){
objK=CMYKup;
}
fil=1;
over=OVERPRINTfil;
   verifyColor(objC, objM, objY, objK, objR, objG, objB, fil, over, CMYKup, CMYKdown, CMYKcmy);

  }
// check strokecolor=cmyk and stroke width < 0.2mm
  if (docRef.pageItems[i].strokeColor=="[CMYKColor]"){
objC=Math.round(docRef.pageItems[i].strokeColor.cyan);
objM=Math.round(docRef.pageItems[i].strokeColor.magenta);
objY=Math.round(docRef.pageItems[i].strokeColor.yellow);
objK=Math.round(docRef.pageItems[i].strokeColor.black);

objR=objM+objY;
objG=objC+objY;
objB=objC+objM;

if (objC<STROKEdown){
objC=0;
}
if (objC>STROKEup){
objC=STROKEup;
}
if (objM<STROKEdown){
objM=0;
}
if (objM>STROKEup){
objM=STROKEup;
}
if (objY<STROKEdown){
objY=0;
}
if (objY>STROKEup){
objY=STROKEup;
}
if (objK<CMYKdown){
objK=0;
}
if (objK>STROKEup){
objK=STROKEup;
}

over=OVERPRINTstr;

fil=2;
   verifyColor (objC, objM, objY, objK, objR, objG, objB, fil, over, CMYKup, CMYKdown, STROKEcmy);
   
  
   strSiz=docRef.pageItems[i].strokeWidth;
   strSize=strSiz*0.353;
   STRsize=STROKEsize/0.353;
   STRsize=STRsize.toFixed(3);
//   alert (strSize);
   if (strSize<STROKEsize){
   
   docRef.pageItems[i].strokeWidth=STRsize;
   }

  }
// check fillcolor=spot
if ((docRef.pageItems[i]=="[PathItem ]") && (docRef.pageItems[i].fillColor=="[SpotColor]")){
objSpot = docRef.pageItems[i].fillColor.tint;
if (objSpot<SPOTdown){
docRef.pageItems[i].fillColor.tint = SPOTdown;
}
if (objSpot>SPOTup){
docRef.pageItems[i].fillColor.tint=SPOTup;
}
}
// check strokecolor=spot and stroke width < 0.2mm
if (docRef.pageItems[i].strokeColor=="[SpotColor]"){
objSpot = docRef.pageItems[i].strokeColor.tint;
if (objSpot<SPOTdown){
docRef.pageItems[i].strokeColor.tint = SPOTdown;
}
if (objSpot>SPOTup){
docRef.pageItems[i].strokeColor.tint=SPOTup;
}
   strSiz=docRef.pageItems[i].strokeWidth;
   strSize=strSiz*0.353;
   STRsize=STROKEsize/0.353;
   STRsize=STRsize.toFixed(3);
//   alert (strSize);
   if (strSize<STROKEsize){
   
   docRef.pageItems[i].strokeWidth=STRsize;
   }

}
// check fillcolor=gradient
  if ((docRef.pageItems[i]=="[PathItem ]") && (docRef.pageItems[i].fillColor=="[GradientColor]")){
gradNumb=docRef.pageItems[i].fillColor.gradient.gradientStops.length;
//alert (gradNumb);

 for (k=0; k<gradNumb; k++){

 gradKey=docRef.pageItems[i].fillColor.gradient.gradientStops[k].color;
 gradKol=0;
// alert (gradKey);
  if (gradKey=="[CMYKColor]"){
 gradC=Math.round(gradKey.cyan);
 gradM=Math.round(gradKey.magenta);
 gradY=Math.round(gradKey.yellow);
 gradK=Math.round(gradKey.black);
 gradR=gradM+gradY;
 gradG=gradC+gradY;
 gradB=gradC+gradM;
 gradKol=1;
 up = CMYKup;
 down = CMYKdown;
 }
 else if (gradKey=="[GrayColor]"){
 gradG=Math.round(gradKey.gray);
 gradKol=2;
 up = SPOTup;
 down = SPOTdown; 
  }
 else if (gradKey=="[SpotColor]"){
 gradS=Math.round(gradKey.tint);
 gradKol=3;
 up = SPOTup;
 down = SPOTdown; 
  }
  else {
 }
caseGradient (gradKol,gradKey, up, down,GRADIENTcmy);

 gradC=Math.round(gradKey.cyan);
 gradM=Math.round(gradKey.magenta);
 gradY=Math.round(gradKey.yellow);
 gradK=Math.round(gradKey.black);

 grCy+=gradC;
 grMa+=gradM;
 grYe+=gradY;
 grBk+=gradK;
//alert (gradC+"/"+gradM+"/"+gradY+"/"+gradK);
 }

 

grandC=grCy/gradNumb;
grandM=grMa/gradNumb;
grandY=grYe/gradNumb;
grandK=grBk/gradNumb;

//alert (grandC+"."+grandM+"."+grandY+"."+grandK);

//alert (grandC+"/"+grandM+"/"+grandY+"/"+grandK);

grandC=grandC/4;
grandM=grandM/4;
grandY=grandY/4;
grandK=grandK/4;

//alert (grandC+"/"+grandM+"/"+grandY+"/"+grandK);

if (grandC>1){
for (k=0; k<gradNumb; k++){
gradKey=docRef.pageItems[i].fillColor.gradient.gradientStops[k].color;
goC=gradKey.cyan;
if (goC<4){
gradKey.cyan=4;
}
}
}
else if (grandC<=1){
for (k=0; k<gradNumb; k++){
gradKey=docRef.pageItems[i].fillColor.gradient.gradientStops[k].color;
gradKey.cyan=0;
}
}
if (grandM>1){
for (k=0; k<gradNumb; k++){
gradKey=docRef.pageItems[i].fillColor.gradient.gradientStops[k].color;
goM=gradKey.magenta;
if (goM<4){
gradKey.magenta=4;
}
}
}
else if (grandM<=1){
for (k=0; k<gradNumb; k++){
gradKey=docRef.pageItems[i].fillColor.gradient.gradientStops[k].color;
gradKey.magenta=0;
}
}
if (grandY>1){
for (k=0; k<gradNumb; k++){
gradKey=docRef.pageItems[i].fillColor.gradient.gradientStops[k].color;
goY=gradKey.yellow;
if (goY<4){
gradKey.yellow=4;
}
}
}
else if (grandY<=1){
for (k=0; k<gradNumb; k++){
gradKey=docRef.pageItems[i].fillColor.gradient.gradientStops[k].color;
gradKey.yellow=0;
}
}
if (grandK>1){
for (k=0; k<gradNumb; k++){
gradKey=docRef.pageItems[i].fillColor.gradient.gradientStops[k].color;
goK=gradKey.black;
if (goK<4){
gradKey.black=4;
}
}
}
else if (grandK<=1){
for (k=0; k<gradNumb; k++){
gradKey=docRef.pageItems[i].fillColor.gradient.gradientStops[k].color;
gradKey.black=0;
}
}

 }

   
   
  }

  }
}
function caseGradient(gradKol, gradKey, up, down,GRADIENTcmy){
 switch (gradKol){
 case 1: 
    // alert ("CMYK"); 
   verifyColor2(gradC, gradM, gradY, gradK, gradR, gradG, gradB, up, down, GRADIENTcmy);
   break;
 case 2: 
     //обработка Греев в градиенте
    if (gradG<down){
    gradKey.gray = down;
    }
    if (gradG>up){
    gradKey.gray=up;
    }
   break;
 case 3: 
     //обработка Спотов в градиенте
    if (gradS<down){
    gradKey.tint = down;
    }
    if (gradS>up){
    gradKey.tint=up;
    }
   break;  
 default:
     break; 
 }
}

function verifyColor2(gradC, gradM, gradY, gradK, gradR, gradG, gradB, up, down, cmy){

//case cyan
if (gradC>3 && gradM<4 && gradY<4 && gradK<4){
//alert ("gradect is Cyan!");
gradK+=gradM+gradY;
 if (gradK>up){
 gradK=up;
 }
 if (gradK<down){
 gradK=0;
 }

 gradM=0;
 gradY=0;
 
 if (gradC>up){
 gradC=up;
 }
gradKey.cyan=gradC;
gradKey.magenta=gradM;
gradKey.yellow=gradY;
gradKey.black=gradK;
 return ;
}
//case magenta
if ((gradM>gradC) && (gradM>gradY) && (gradM>gradK) && (gradM>3) && (gradC<4) && (gradY<4) && (gradK<4)){
//alert ("gradect is Magenta!");
gradK+=gradC+gradY;
 if (gradK>up){
 gradK=up;
 }
gradC=0;
gradY=0;
if (gradM>up){
gradM=up;
}
gradKey.cyan=gradC;
gradKey.magenta=gradM;
gradKey.yellow=gradY;
gradKey.black=gradK;
return ;
}
//case yellow
if ((gradY>gradC) && (gradM>gradM) && (gradM>gradK) && (gradY>3) && (gradM<4) && (gradC<4) && (gradK<4)){
//alert ("gradect is Yellow!");
gradK+=gradM+gradC;
 if (gradK>up){
 gradK=up;
 }
gradC=0;
gradM=0;

if (gradY>up){
gradY=up;
}

gradKey.cyan=gradC;
gradKey.magenta=gradM;
gradKey.yellow=gradY;
gradKey.black=gradK;
return;
}
//case white
if ((gradC<4) && (gradM<4) && (gradY<4) && (gradK<4)){
gradC=0;
gradM=0;
gradY=0;
gradK=0;
gradKey.cyan=gradC;
gradKey.magenta=gradM;
gradKey.yellow=gradY;
gradKey.black=gradK;
return;
}
//case black
if ((gradK>gradC) && (gradK>gradM) && (gradK>gradY) && (gradK>3) && (gradC<4) && (gradM<4) && (gradY<4)){
//alert ("gradect is Black!");
gradK+=gradM+gradY+gradC;
 if (gradK>up){
 gradK=up;
 }
gradC=0;
gradM=0;
gradY=0;
gradKey.cyan=gradC;
gradKey.magenta=gradM;
gradKey.yellow=gradY;
gradKey.black=gradK;
return;
}
if (cmy==1){
gradC+=gradK;
gradM+=gradK;
gradY+=gradK;
gradK=0;

if (gradC<down){
gradC=0;
}
if (gradC>up){
gradC=up;
}
if (gradM<down){
gradM=0;
}
if (gradM>up){
gradM=up;
}
if (gradY<down){
gradY=0;
}
if (gradY>up){
gradY=up;
}

gradKey.cyan=gradC;
gradKey.magenta=gradM;
gradKey.yellow=gradY;
gradKey.black=gradK;

}
else{
//case red
if ((gradR>gradG) && (gradR>gradB) && (gradM>gradC) && (gradY>gradC)){
//alert ("gradect is Red!");
gradK+=gradC;
 if (gradK>up){
 gradK=up;
 }
gradC=0;
if (gradM>up){
gradM=up;
}
if (gradY>up){
gradY=up;
}
gradKey.cyan=gradC;
gradKey.magenta=gradM;
gradKey.yellow=gradY;
gradKey.black=gradK;
return;
}
//case green
if ((gradG>gradR) && (gradG>gradB) && (gradM<gradC) && (gradY>gradM)){
//alert ("gradect is Green!");
gradK+=gradM;
 if (gradK>up){
 gradK=up;
 }
gradM=0;
if (gradC>up){
gradC=up;
}
if (gradY>up){
gradY=up;
}
gradKey.cyan=gradC;
gradKey.magenta=gradM;
gradKey.yellow=gradY;
gradKey.black=gradK;
return;
}
//case blue
if ((gradB>gradR) && (gradB>gradG) && (gradM>gradY) && (gradY<gradC)){
//alert ("gradect is Blue!");
gradK+=gradY;
 if (gradK>up){
 gradK=up;
 }
gradY=0;
if (gradC>up){
gradC=up;
}
if (gradM>up){
gradM=up;
}
gradKey.cyan=gradC;
gradKey.magenta=gradM;
gradKey.yellow=gradY;
gradKey.black=gradK;
return;
}
}
}

function verifyColor(objC, objM, objY, objK, objR, objG, objB, fil, over, up, down, cmy){
til=objC+objM+objY+objK;
overpr=0;
//case cyan
if (objC>objM && objC>objY && objC>objK && objC>3 && objM<4 && objY<4 && objK<4){
//alert ("object is Cyan!");
objK+=objM+objY;
 if (objK>up){
 objK=up;
 }
 objM=0;
 objY=0;
}
//case magenta
if (objM>objC && objM>objY && objM>objK && objM>3 && objC<4 && objY<4 && objK<4){
//alert ("object is Magenta!");
objK+=objC+objY;
 if (objK>up){
 objK=up;
 }
objC=0;
objY=0;
}
//case yellow
if (objY>objC && objM>objM && objM>objK && objY>3 && objM<4 && objC<4 && objK<4){
//alert ("object is Yellow!");
objK+=objM+objC;
 if (objK>up){
 objK=up;
 }
objC=0;
objM=0;

}
//case white
if (objC<4 && objM<4 && objY<4 && objK<4){
objC=0;
objM=0;
objY=0;
objK=0;
}
//case cmyk -> cmy
if (cmy==1){
objC+=objK;
objM+=objK;
objY+=objK;
objK=0;

if (objC<down){
objC=0;
}
if (objC>up){
objC=up;
}
if (objM<down){
objM=0;
}
if (objM>up){
objM=up;
}
if (objY<down){
objY=0;
}
if (objY>up){
objY=up;
}


}
else{
//case black
if (objK>objC && objK>objM && objK>objY && objK>3 && objC<4 && objM<4 && objY<4 || til>=300){
//alert ("object is Black!");
objK+=objM+objY+objC;
 if (objK>up){
 objK=up;
 }
objC=0;
objM=0;
objY=0;
if (over == 1){
overpr=1;
}
else{
overpr=0;
}
}
//case red
if (objR>objG && objR>objB && objM>objC && objY>objC){
//alert ("object is Red!");
objK+=objC;
 if (objK>up){
 objK=up;
 }
objC=0;

}
//case green
if (objG>objR && objG>objB && objM<=objC && objY>=objM){
//alert ("object is Green!");
objK+=objM;
 if (objK>up){
 objK=up;
 }
objM=0;

}
//case blue
if (objB>objR && objB>objG && objM>=objY && objC>=objY){
//alert ("object is Blue!");
objK+=objY;
 if (objK>up){
 objK=up;
 }
objY=0;

}
}
//alert ('C:'+objC+'/M:'+objM+'/Y:'+objY+'/K:'+objK);
switch (fil){
case 1: 
til2=objC+objM+objY+objK;
   docRef.pageItems[i].fillColor.cyan=objC;
   docRef.pageItems[i].fillColor.magenta=objM;
   docRef.pageItems[i].fillColor.yellow=objY;
   docRef.pageItems[i].fillColor.black=objK;   
   docRef.pageItems[i].fillOverprint = overpr;
   if (til2==0){
      docRef.pageItems[i].fillOverprint = 0;
   }
   break;
 case 2:
 til2=objC+objM+objY+objK;
   docRef.pageItems[i].strokeColor.cyan=objC;
   docRef.pageItems[i].strokeColor.magenta=objM;
   docRef.pageItems[i].strokeColor.yellow=objY;
   docRef.pageItems[i].strokeColor.black=objK;
   docRef.pageItems[i].strokeOverprint = overpr;
   if (til2==0){
      docRef.pageItems[i].strokeOverprint = 0;
   }   
   break;
 default:
   break;    
}
}


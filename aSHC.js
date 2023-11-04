const soilContents  = 
["]n.-F¨v ",
"hnZypXv NmeIX ",
"ssPhImÀ_¬ ",
" e`y-amb `mhlw", 
"e`y-amb £mcw ",
" e`y-amb ImÕyw ",
" e`y-amb aáojyw",
"  e`y-amb kÄ^À",
"  e`y-amb Ccp¼v ",
"  e`y-amb amwK-\okv ",
" e`y-amb kn¦v ",
"  e`y-amb sN¼v ",
" e`y-amb t_mtdm¬ "];

const exHead = ["jilla","pancha","post","sCode","farmer","hName","survey","gArea","gps",
                "ph","Ec","OC","P","K","Ca","Mg","Sa","Fe","Mn","Zn","Cu","B","c1","c2","c3"];

 var serverResponse = '<p contenteditable="true">This is an editable paragraph injected by the server. You can click on it and start typing to edit the text. You can also apply formatting, such as making text bold, italic, or changing the font size, just like in a text editor.</p>';

                    
                    const createButten = document.getElementById("createB");
                    const printButten = document.getElementById("printB");
                    const refreshButten= document.getElementById("refreshB");
                    const totalCards= document.getElementById("totalCards");
                    printButten.disabled = true;
                    refreshButten.disabled = true;
                    printButten.style.opacity = 0;
                    refreshButten.style.opacity = 0;
function readExcelfile(){

  gRefresh();

   
    const fileInput = document.getElementById("excel-file");
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const range = XLSX.utils.decode_range(worksheet["!ref"]);
            const  totalColm= range.e.c ;
            const  totalRo=range.e.r;
            totalCards.innerHTML=totalRo;
  
               
                var divContainer = document.getElementById("papper");
               
var newObject={};
          
            for (let i = 1; i <=totalRo;  i++) {// loop  according to Excel Row ----

                     

                const divA4 = createDiv("a4");
                const dPageNo= createDiv("pageNo");
                const dA4Bak = createDiv("a4Bak");
                const divResult = createDiv("result");
                const divFarmerL = createDiv("farmerDetailsL");
                const divFarmerR = createDiv("farmerDetailsR");
                        
                        var table = document.createElement("table");
                        var trH = document.createElement("tr");

                        const tableHeadData = [
                            { className: "slNo", textContent: "{Ia  \\\w" },
                            { className: "blank", textContent: "" },
                            { className: "unit", textContent: "bqWnäv" },
                            { className: "falam", textContent: "]cntim[\ ^ew" },
                            { className: "nilavaram", textContent: "\\nehmcw" },
                            { className: "manadan", textContent: "am\\ZWvUw" }];

                        // Create and append table header cells using the function and data
tableHeadData.forEach(data => {
    const th = createTableHeaderCell(data.className, data.textContent);
    trH.appendChild(th);});

        table.appendChild(trH);

 
            

                const exData={};
                let colNo=0;
                exHead.forEach((element) => {
                const cell = worksheet[XLSX.utils.encode_cell({ r: i, c: colNo })];
                var cellValue = cell ? cell.v : 0; // Use .v to get the raw value
                 if (colNo >= 9 && colNo <= 21) {
                cellValue = cellValue.toFixed(2);}
                exData[element] = cellValue;
                colNo++ }); //xxxxxxxxxxxx loop for array elements End here
              
                
                createAndAppendPElement("IÀjIsâ t]cv: " + exData.farmer, divFarmerL,"fL mousePointer","false");
                createAndAppendPElement("hnemkw : " + exData.hName + ", " + exData.post, divFarmerL,"fL","false");
                createAndAppendPElement("]©mb¯v : " + exData.pancha, divFarmerL,"fL mousePointer","false");
                createAndAppendPElement("PnÃ: " + exData.jilla, divFarmerL,"fL mousePointer","false");
                createAndAppendPElement("kÀsÆ  \\\¼À: " + exData.survey, divFarmerR,"fR mousePointer","false");
                createAndAppendPElement("hnkvXrXn: " + exData.gArea + " slÎÀ", divFarmerR,"fR mousePointer","false");
                
                var pR3 = document.createElement("p");
                pR3.textContent = "A£mwitcJmwiw: "; // gps
                divFarmerR.appendChild(pR3);
                
                var spanElement0 = document.createElement('span'); 
                spanElement0.textContent = exData.gps;
                pR3.appendChild(spanElement0);
                
                var pR4 = document.createElement("p"); //sample code malaylam
                pR4.textContent = "km¼nÄ tImUv: ";
                divFarmerR.appendChild(pR4);
                
                var spanElement = document.createElement('span');
                spanElement.textContent = exData.sCode;
                pR4.appendChild(spanElement);// Sample Code English
                    
                createAndAppendPElement("hf {]tbmK \\nÀt±i§Ä",dA4Bak,"pHeading mousePointer","false");//വളപ്രയോഗം 
                
                const vila=[exData.c1,exData.c2,exData.c3];
                var uooriya; var rajfos; var mop;
                vila.forEach(element => {  
                switch(element){
                       
                        case "r":
                                
                                 if (exData.OC <= 0.16) uooriya = 250;
                            else if (exData.OC <= 0.33) uooriya = 230;
                            else if (exData.OC <= 0.50) uooriya = 210;
                            else if (exData.OC <= 0.75) uooriya = 190;
                            else if (exData.OC <= 1)    uooriya = 180;
                            else if (exData.OC <= 1.25) uooriya = 170;
                            else if (exData.OC<= 1.50) uooriya = 145;
                            else if (exData.OC<= 1.83) uooriya = 140;
                            else if (exData.OC<= 2.16) uooriya = 125;
                            else if (exData.OC<= 2.50) uooriya = 105;

                                 if(exData.P <=3)      rajfos=290;
                            else if( exData.P <=6.5)   rajfos= 260;
                            else if( exData.P <=10)    rajfos= 240;
                            else if( exData.P <=13.5)  rajfos= 210;
                            else if( exData.P <=17)    rajfos= 185;
                            else if( exData.P <=20.5)  rajfos= 160;
                            else if( exData.P <=24)    rajfos= 135;
                            else if( exData.P <=27.5)  rajfos= 110;
                            else if( exData.P <=30)    rajfos= 80;
                            else if( exData.P <=34.5)  rajfos= 55;
                            else rajfos=50;

                                if(exData.K<=35)     mop=90;
                            else if(exData.K<=75)    mop=85;
                            else if(exData.K<=115)   mop=75;
                            else if(exData.K<=155)   mop=70;
                            else if(exData.K<=195)   mop=60;
                            else if(exData.K<=235)   mop=50;
                            else if(exData.K<=275)   mop=45;
                            else if(exData.K<=315)   mop=35;
                            else if(exData.K<=355)   mop=25;
                            else if(exData.K<=395)   mop=20;
                           


                            createAndAppendPElement("hnf: s\\Ãv",dA4Bak,"vila mousePointer","false");//വിള
                            createAndAppendPElement("A¾X Ipdbv¡m\\pw ImÂky¯nsâ A]cym]vXX \\nI¯m\\pw slIvSdn\\v 350 In.{Kmw. Ip½mbw \\nesamcp¡p¶ kab¯v tNÀ¯vsImSpt¡ïXmWv. \\«v Hcpamk¯n\\ptijw slIvSdn\\v 250 In.{Kmw. Ip½mbw hoïpw tNÀ¯vsImSp¡Ww.",
                            dA4Bak,"test","true");
                            createAndAppendPElement(" -a[yIme aq¸pÅ C\\§Ä¡v Hcp hnfbv¡v slIvSdn\\v " + uooriya +"In{Kmw bqdnb, "+rajfos+ "In{Kmw cmPvt^mkv, "+ mop +"In{Kmw ayqdntbäv Hm^v s]m«mjv F¶nh \\ÂImw. s]mSnhnXbmsW¦nÂ taÂ]dª Afhnsâ aq¶nsemcp`mKw hoXw bqdnb, hnX¨v HcmgvN¡v tijhpw, Nn\\¸v s]m«p¶ kab¯pw, IXncphcm³ XpS§p¶ kab¯pw \\ÂIWw. apgph³ `mKw cmPvt^mkpw \\nesamcp¡p¶ kab¯v ASnhfambn \\ÂImw. Ac`mKw hoXw s]m«mjv hnX¨v HcmgvNbv¡v tijhpw, IXncphcp¶ kab¯pw tNÀ¯vsImSp¡mw. ]dn¨p\\SoemsW¦nÂ Ac`mKw bqdnbbpw Ac`mKw s]m«mjpw apgph³ `mKw cmPvt^mkpw ASnhfambpw _m¡n`mKw bqdnbbpw s]m«mjpw IXncv hcp¶Xn\\v HcmgvN ap³]mbpw \\ÂImw.",
                            dA4Bak,"test","true");
                            
                            break;
                            case"c":
                            createAndAppendPElement("hnf: sX§v ",dA4Bak,"vila mousePointer","false");//വിള
                            createAndAppendPElement("HmtcmsX§n\\pw 15 apXÂ 25 Intem{Kmwhsc ]¨nehfw/Imenhfw/It¼mÌv F¶nh Pq¬þPqembv amk§fnÂ tNÀ¯p sImSp¡p¶Xv A\ptbmPyamWv. ]cntim[\\^ew A\\pkcn¨v, Hmtcm sX§n\\pw 680 {KmwhoXwbqdnb, 215 {KmwhoXwcmPvt^mkv, 1150 {KmwhoXw s]m«mjv F¶nh tNÀt¡­XmWv.hf§fpsS aq¶ntemcp `mKw G{]nÂþsabv amk§fnepw, _m¡n sk]väw_ÀþHIvtSm_À amk§fnepw tNÀ¡mw.  sN¼nsâ Ipdhv \\nI¯m³ tIm¸À kÄt^äv Hcp slIvSdn\\v 2 In. {Kmw F¶ F¶ tXmXnÂ a®nÂtNÀ¡pI. aáojyw A]cym]vXambn ImWp¶p. CXp ]cnlcn¡p¶Xn\\mbn aáojyw kÂt^äv Hcp slIvSdn\\v 80 Intem{Kmw F¶ tXmXnÂ a®nÂ tNÀ¡pI.t_mtdm¬ A]cym]vXambn ImWp¶p. CXv ]cnlcn¡p¶Xn\\mbn t_mdmIvkv Hcp slÎdn\\v 10 Intem{Kmw F¶ tXmXnÂ a®nÂtNÀ¡pI.",
                            dA4Bak,"test","true");
                            break;

                           
                            case"a":
                            createAndAppendPElement("hnf: Ihp§v ",dA4Bak,"vila mousePointer","false");//വിള
                            createAndAppendPElement("Hmtcm Ihp§n\\pw 12 Intem{Kmw hsc ]¨nehfw/Imenhfw/It¼mÌv F¶nh sk]väw_ÀþHtÎm_À amk§fnÂ tNÀ¯psImSp¡pI. ]cntim[\\m ^ew A\\pkcn¨v Hmtcm Ihp§n\\pw 200 {Kmw hoXw bqdnb, 120 {Kmw hoXw cmPvt^mkv, 285 {Kmw hoXw s]m«mjv F¶nh 2 XhWIfmbn sk]väw_À þ HtÎm_À amk§fnepw amk§fnepw amÀ¨vþG{]nÂ amk§fnepw tNÀ¯psImSp¡pI.", 
                            dA4Bak,"test","true");
                            break;

                            case"n":
                            createAndAppendPElement("hnf: PmXn ",dA4Bak,"vila mousePointer","false");//വിള
                            createAndAppendPElement("Hmtcm PmXn ac¯n\\pw hÀj¯nÂ Hcn¡Â 50 Intem{Kmw hoXw ]¨nehfw/ Imenhfw/It¼mÌv F¶nh tNÀ¯psImSp¡p¶Xv DNnXamWv.  ]cntim[\\m ^ew A\\pkcn¨v Hmtcm ac¯n\\pw 1070 {Kmw hoXw bqdnb, 310 {Kmw hoXw cmPvt^mkv, 1870 {Kmw hoXw s]m«mjv F¶nh hÀj¯nÂ Hcn¡Â tNÀ¡pI  ",
                            dA4Bak,"test","true");

                            break;






                }});
                
               
               


  
        var slNo=0;
        var unit="";
        var falam="";
        var manam;//manadhandam
        var nilavaram= ""
        soilContents.forEach(element => {  
            
             slNo ++;
              
             switch(slNo) {
                case 1:
                     unit="";
                     falam=exData.ph;
                     manam= "Aavfw : < 6.5  , \\nÀÆocyw: 6.6 þ 7.3 , -£mcw: > 7.4";
                     if(falam>=7.4){nilavaram="£mcw"};
                     if(falam<=7.3){nilavaram="\\nÀÆocyw"};
                     if (falam<=6.5) {nilavaram="Aavfw"};
                     break;
                
                case 2:
                    unit="sUkn-ko-a³kv/ aoäÀ";
                    falam=exData.Ec;
                    manam="eh-Wmwiw Ipdhv : < 2, eh-Wmwiw a[yaw: 2 – 16, eh-WmwiwIqSpXÂ: > 16"
                    if(falam>=16){nilavaram="eh-WmwiwIqSpXÂ"};
                     if(falam<=15.9){nilavaram="eh-Wmwiw a[yaw"};
                     if (falam<=2) {nilavaram="eh-Wmwiw Ipdhv"};
                    
                    break;
                  
                case 3:
                    unit="%";
                    falam=exData.OC;
                    manam= "Ipdhv: <0.5, a[yaw : 0.5 – 1.5, IqSpXÂ : >1.5"
                    if(falam>=1.5){nilavaram="IqSpXÂ"};
                     if(falam<=1.4){nilavaram="a[yaw"};
                     if (falam<=.5) {nilavaram="Ipdhv"};
                    break;
                case 4:
                    unit="Intem{Kmw/ slIvSÀ";
                    falam=exData.P;
                    manam="Ipdhv : < 10, a[yaw : 10 – 24.1, IqSpXÂ  : 24.1 – 34.5"
                    if(falam>=24.1){nilavaram="IqSpXÂ"};
                    if(falam<=24){nilavaram="a[yaw"};
                    if (falam<=10) {nilavaram="Ipdhv"};

                    break;

                case 5:
                    unit="Intem{Kmw/ slIvSÀ";
                    falam=exData.K;
                    manam= "Ipdhv : < 115, a[yaw : 116 – 275, IqSpXÂ  : 275 – 395"
                    if(falam>=275){nilavaram="IqSpXÂ"};
                     if(falam<=274.9){nilavaram="a[yaw"};
                     if (falam<=115) {nilavaram="Ipdhv"};
                    break;
                case 6:
                    unit="]n.-]n.Fw ";
                    falam=exData.Ca;
                    manam="A]cym]vXw:< 300, ]cym]vXw: > 300 "
                    if(falam>=300){nilavaram="]cym]vXw"};
                     if(falam<300){nilavaram="A]cym]vXw"};
                     
                   
                    break;
                case 7:
                    unit="]n.-]n.Fw ";
                    falam=exData.Mg;
                    manam="A]cym]vXw :< 120, ]cym]vXw: > 120"
                    if(falam>=120){nilavaram="]cym]vXw"};
                     if(falam<120){nilavaram="A]cym]vXw"};
                    break;
                case 8:
                    unit="]n.-]n.Fw ";
                    falam=exData.Sa;
                    manam= manam= "A]cym]vXw: < 5, ]cym]vXw: 5 þ 10"
                    if(falam>=5){nilavaram="]cym]vXw"};
                     if(falam<5){nilavaram="A]cym]vXw"};
                    break;
                case 9:
                    unit="]n.-]n.Fw ";
                    falam=exData.Fe;
                    manam= "A]cym]vXw: < 5, ]cym]vXw: > 5"
                    if(falam>=5){nilavaram="]cym]vXw"};
                    if(falam<5){nilavaram="A]cym]vXw"};
                    break;

                case 10:
                    unit="]n.-]n.Fw ";
                    falam=exData.Mn;
                    manam= "A]cym]vXw: < 1.0, ]cym]vXw: > 1.0"
                    if(falam>=1){nilavaram="]cym]vXw"};
                    if(falam<1){nilavaram="A]cym]vXw"};
                    break;

                case 11:
                    unit="]n.-]n.Fw ";
                    falam=exData.Zn;
                    manam= "A]cym]vXw: < 1, ]cym]vXw: > 1"
                    if(falam>=1){nilavaram="]cym]vXw"};
                    if(falam<1){nilavaram="A]cym]vXw"};
                    break;

                case 12:
                    unit="]n.-]n.Fw ";
                    falam=exData.Cu;
                    manam= "A]cym]vXw: < 1, ]cym]vXw: > 1"
                    if(falam>=1){nilavaram="]cym]vXw"};
                    if(falam<1){nilavaram="A]cym]vXw"};
                    break;

                case 13:
                    unit="]n.-]n.Fw ";
                    falam=exData.B;
                    manam= "A]cym]vXw: < 0.5, ]cym]vXw: > 0.5"
                    if(falam>=.5){nilavaram="]cym]vXw"};
                    if(falam<.5){nilavaram="A]cym]vXw"};
                    break;
                  
                default:
                    var passText="prob";}//swithch End


            
            
            createTableRow(table,element,slNo,unit,falam,manam,nilavaram);      })// soil contents loop end


                
                        divContainer.appendChild(divA4);

                        divA4.appendChild(dPageNo);
                       createAndAppendPElement(i,dPageNo,"pagenumber","false");
                        divA4.appendChild(divResult);
                        divResult.appendChild(divFarmerL);
                       divResult.appendChild(divFarmerR);
                       divResult.appendChild(table);
                       divContainer.appendChild(dA4Bak);
            }  // loop for TotalRow---- End
             };// On load function end here

        reader.readAsArrayBuffer(file);

        printButten.style.opacity = 1;
        refreshButten.style.opacity = 1;
        printButten.disabled = false;
        refreshButten.disabled = false;
        
    }}//If file is exist Read Excel File End
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Functions xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz






















function createTableHeaderCell(className, textContent) {
    const th = document.createElement("th");
    th.className = className;
    th.textContent = textContent;
    return th;}

function createTableRow(table,inText,slNo,unit,falam,manam,nilavaram){
    const passText=   [slNo,inText,unit,falam,nilavaram,manam];
const tr =document.createElement("tr")
table.appendChild(tr);

for (let i = 0; i <=5;  i++) {  
   const td=document.createElement("td");
   td.textContent=passText[i];
   tr.appendChild(td);}
}


function createAndAppendPElement(text, div, cName,editSatus) {
    var p = document.createElement("p");
  
    p.className = cName;
    p.textContent = text;
    p.setAttribute("contenteditable", editSatus); // Make the paragraph editable
   
    div.appendChild(p);
}




function gRefresh(){
    const elementsToRemove = document.querySelectorAll('.a4, .a4Bak');
    elementsToRemove.forEach(function(element) {
        element.parentNode.removeChild(element); });
       
        
        printButten.disabled = true;
        refreshButten.disabled = true;
       
   
    
}
function createDiv(className) {
    const div = document.createElement("div");
    div.className = className;
    return div;
  }
 
 



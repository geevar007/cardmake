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
                    const enterButton=document.getElementById("createB");
                    var divContainer = document.getElementById("papper");
                    const fileInput = document.getElementById("excel-file");
                    const displayDiv=document.getElementById("displayDiv");
                    const numberIn=document.getElementById("numberIn");
                    const startNumber= document.getElementById("startNumber");
                    const endNumber= document.getElementById("endNumber");
                   printButten.disabled = true;
                   printButten.style.opacity = 0;
                    
                    refreshButten.disabled = true;
                    refreshButten.style.opacity = 0;
                    
                    enterButton.disabled=true;
                    enterButton.style.opacity=0;
                  
                        
                    
function checkFile(whoCalled){

  gRefresh();
  
  
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
           var  totalRo=range.e.r;
            
            totalCards.innerHTML=totalRo;
        
        
        
            if (whoCalled=="generateButton") {
                var gvr= parseInt(startNumber.value);
                var gvrE=parseInt(endNumber.value);
                    if(gvr>=1&&gvrE<=totalRo&&gvrE>=gvr&& gvr<=totalRo)
                     {var totalRo = gvrE}//
                    else {var gvr =1}
            for (let i=gvr; i <=totalRo;  i++) {// loop  according to Excel Row ----
                   
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
                var cellValue = cell ? cell.v : ""; // Use .v to get the raw value
                 if (colNo >= 9 && colNo <= 21&& typeof cellValue === 'number') 
                 {cellValue = cellValue.toFixed(2);}// fixing for two decimal
                
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
                           
        
        
                            createAndAppendPElement("hnf: s\\Ãv",dA4Bak,"vila mousePointer","false");//നെല്ല് 
                            createAndAppendPElement("A¾X Ipdbv¡m\\pw ImÂky¯nsâ A]cym]vXX \\nI¯m\\pw slIvSdn\\v 350 In.{Kmw. Ip½mbw \\nesamcp¡p¶ kab¯v tNÀ¯vsImSpt¡ïXmWv. \\«v Hcpamk¯n\\ptijw slIvSdn\\v 250 In.{Kmw. Ip½mbw hoïpw tNÀ¯vsImSp¡Ww.",
                            dA4Bak,"test","true");
                            createAndAppendPElement(" -a[yIme aq¸pÅ C\\§Ä¡v Hcp hnfbv¡v slIvSdn\\v " + uooriya +"In{Kmw bqdnb, "+rajfos+ "In{Kmw cmPvt^mkv, "+ mop +"In{Kmw ayqdntbäv Hm^v s]m«mjv F¶nh \\ÂImw. s]mSnhnXbmsW¦nÂ taÂ]dª Afhnsâ aq¶nsemcp`mKw hoXw bqdnb, hnX¨v HcmgvN¡v tijhpw, Nn\\¸v s]m«p¶ kab¯pw, IXncphcm³ XpS§p¶ kab¯pw \\ÂIWw. apgph³ `mKw cmPvt^mkpw \\nesamcp¡p¶ kab¯v ASnhfambn \\ÂImw. Ac`mKw hoXw s]m«mjv hnX¨v HcmgvNbv¡v tijhpw, IXncphcp¶ kab¯pw tNÀ¯vsImSp¡mw. ]dn¨p\\SoemsW¦nÂ Ac`mKw bqdnbbpw Ac`mKw s]m«mjpw apgph³ `mKw cmPvt^mkpw ASnhfambpw _m¡n`mKw bqdnbbpw s]m«mjpw IXncv hcp¶Xn\\v HcmgvN ap³]mbpw \\ÂImw.",
                            dA4Bak,"test","true");
                            
                            break;
                            case"c":


                            if (exData.OC <= 0.16) uooriya = 960;
                            else if (exData.OC <= 0.33) uooriya = 875;
                            else if (exData.OC <= 0.50) uooriya = 790;
                            else if (exData.OC <= 0.75) uooriya = 725;
                            else if (exData.OC <= 1)    uooriya = 680;
                            else if (exData.OC <= 1.25) uooriya = 650;
                            else if (exData.OC<= 1.50) uooriya = 550;
                            else if (exData.OC<= 1.83) uooriya = 530;
                            else if (exData.OC<= 2.16) uooriya = 470;
                            else if (exData.OC<= 2.50) uooriya = 400;
        
                                 if(exData.P <=3)      rajfos=1090;
                            else if( exData.P <=6.5)   rajfos= 995;
                            else if( exData.P <=10)    rajfos= 900;
                            else if( exData.P <=13.5)  rajfos= 800;
                            else if( exData.P <=17)    rajfos= 700;
                            else if( exData.P <=20.5)  rajfos= 600;
                            else if( exData.P <=24)    rajfos= 510;
                            else if( exData.P <=27.5)  rajfos= 400;
                            else if( exData.P <=30)    rajfos= 315;
                            else if( exData.P <=34.5)  rajfos= 215;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=1400;
                            else if(exData.K<=75)    mop=1270;
                            else if(exData.K<=115)   mop=1150;
                            else if(exData.K<=155)   mop=1020;
                            else if(exData.K<=195)   mop=900;
                            else if(exData.K<=235)   mop=770;
                            else if(exData.K<=275)   mop=650;
                            else if(exData.K<=315)   mop=520;
                            else if(exData.K<=355)   mop=400;
                            else if(exData.K<=395)   mop=270;




                            createAndAppendPElement("hnf: sX§v ",dA4Bak,"vila mousePointer","false");//തെങ്ങ്
                            createAndAppendPElement("HmtcmsX§n\\pw 15 apXÂ 25 Intem{Kmwhsc ]¨nehfw/Imenhfw/It¼mÌv F¶nh Pq¬þPqembv amk§fnÂ tNÀ¯p sImSp¡p¶Xv A\ptbmPyamWv. ]cntim[\\^ew A\\pkcn¨v, Hmtcm sX§n\\pw " + uooriya +"{KmwhoXwbqdnb,  "+rajfos+ " {KmwhoXwcmPvt^mkv,  "+ mop +" {KmwhoXw s]m«mjv F¶nh tNÀt¡­XmWv.hf§fpsS aq¶ntemcp `mKw G{]nÂþsabv amk§fnepw, _m¡n sk]väw_ÀþHIvtSm_À amk§fnepw tNÀ¡mw.  sN¼nsâ Ipdhv \\nI¯m³ tIm¸À kÄt^äv Hcp slIvSdn\\v 2 In. {Kmw F¶ F¶ tXmXnÂ a®nÂtNÀ¡pI. aáojyw A]cym]vXambn ImWp¶p. CXp ]cnlcn¡p¶Xn\\mbn aáojyw kÂt^äv Hcp slIvSdn\\v 80 Intem{Kmw F¶ tXmXnÂ a®nÂ tNÀ¡pI.t_mtdm¬ A]cym]vXambn ImWp¶p. CXv ]cnlcn¡p¶Xn\\mbn t_mdmIvkv Hcp slÎdn\\v 10 Intem{Kmw F¶ tXmXnÂ a®nÂtNÀ¡pI.",
                            dA4Bak,"test","true");
                            break;
        
                           
                            case"a":
                            if (exData.OC <= 0.16) uooriya = 280;
                            else if (exData.OC <= 0.33) uooriya = 260;
                            else if (exData.OC <= 0.50) uooriya = 230;
                            else if (exData.OC <= 0.75) uooriya = 210;
                            else if (exData.OC <= 1)    uooriya = 200;
                            else if (exData.OC <= 1.25) uooriya = 190;
                            else if (exData.OC<= 1.50) uooriya = 160;
                            else if (exData.OC<= 1.83) uooriya = 155;
                            else if (exData.OC<= 2.16) uooriya = 140;
                            else if (exData.OC<= 2.50) uooriya = 120;
        
                                 if(exData.P <=3)      rajfos=255;
                            else if( exData.P <=6.5)   rajfos= 235;
                            else if( exData.P <=10)    rajfos= 215;
                            else if( exData.P <=13.5)  rajfos=190;
                            else if( exData.P <=17)    rajfos= 170;
                            else if( exData.P <=20.5)  rajfos= 140;
                            else if( exData.P <=24)    rajfos= 120;
                            else if( exData.P <=27.5)  rajfos= 100;
                            else if( exData.P <=30)    rajfos= 75;
                            else if( exData.P <=34.5)  rajfos= 50;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=285;
                            else if(exData.K<=75)    mop=260;
                            else if(exData.K<=115)   mop=240;
                            else if(exData.K<=155)   mop=210;
                            else if(exData.K<=195)   mop=185;
                            else if(exData.K<=235)   mop=160;
                            else if(exData.K<=275)   mop=135;
                            else if(exData.K<=315)   mop=110;
                            else if(exData.K<=355)   mop=80;
                            else if(exData.K<=395)   mop=55;
                            createAndAppendPElement("hnf: Ihp§v ",dA4Bak,"vila mousePointer","false");//കവുങ്ങ് 
                            createAndAppendPElement("Hmtcm Ihp§n\\pw 12 Intem{Kmw hsc ]¨nehfw/Imenhfw/It¼mÌv F¶nh sk]väw_ÀþHtÎm_À amk§fnÂ tNÀ¯psImSp¡pI. ]cntim[\\m ^ew A\\pkcn¨v Hmtcm Ihp§n\\pw " + uooriya +" {Kmw hoXw bqdnb, "+rajfos+ "{Kmw hoXw cmPvt^mkv,  "+ mop +" {Kmw hoXw s]m«mjv F¶nh 2 XhWIfmbn sk]väw_À þ HtÎm_À amk§fnepw amk§fnepw amÀ¨vþG{]nÂ amk§fnepw tNÀ¯psImSp¡pI.", 
                            dA4Bak,"test","true");
                            break;
        
                            case"n":

                            if (exData.OC <= 0.16) uooriya = 1400;
                            else if (exData.OC <= 0.33) uooriya = 1290;
                            else if (exData.OC <= 0.50) uooriya = 1160;
                            else if (exData.OC <= 0.75) uooriya = 1070;
                            else if (exData.OC <= 1)    uooriya = 1000;
                            else if (exData.OC <= 1.25) uooriya = 960;
                            else if (exData.OC<= 1.50) uooriya = 810;
                            else if (exData.OC<= 1.83) uooriya = 780;
                            else if (exData.OC<= 2.16) uooriya = 690;
                            else if (exData.OC<= 2.50) uooriya = 590;
        
                                 if(exData.P <=3)      rajfos=1600;
                            else if( exData.P <=6.5)   rajfos=1460;
                            else if( exData.P <=10)    rajfos= 1325;
                            else if( exData.P <=13.5)  rajfos=1175;
                            else if( exData.P <=17)    rajfos= 1040;
                            else if( exData.P <=20.5)  rajfos= 890;
                            else if( exData.P <=24)    rajfos= 750;
                            else if( exData.P <=27.5)  rajfos= 600;
                            else if( exData.P <=30)    rajfos= 460;
                            else if( exData.P <=34.5)  rajfos= 310;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=2050;
                            else if(exData.K<=75)    mop=1870;
                            else if(exData.K<=115)   mop=1700;
                            else if(exData.K<=155)   mop=1500;
                            else if(exData.K<=195)   mop=1330;
                            else if(exData.K<=235)   mop=1140;
                            else if(exData.K<=275)   mop=960;
                            else if(exData.K<=315)   mop=770;
                            else if(exData.K<=355)   mop=590;
                            else if(exData.K<=395)   mop=400;
                            createAndAppendPElement("hnf: PmXn ",dA4Bak,"vila mousePointer","false");//ജാതി
                            createAndAppendPElement("Hmtcm PmXn ac¯n\\pw hÀj¯nÂ Hcn¡Â 50 Intem{Kmw hoXw ]¨nehfw/ Imenhfw/It¼mÌv F¶nh tNÀ¯psImSp¡p¶Xv DNnXamWv.  ]cntim[\\m ^ew A\\pkcn¨v Hmtcm ac¯n\\pw " + uooriya +" {Kmw hoXw bqdnb,  "+rajfos+ "{Kmw hoXw cmPvt^mkv,  "+ mop +"{Kmw hoXw s]m«mjv F¶nh hÀj¯nÂ Hcn¡Â tNÀ¡pI  ",
                            dA4Bak,"test","true");
                            break;

                            case"b":
                            if (exData.OC <= 0.16) uooriya = 280;
                            else if (exData.OC <= 0.33) uooriya = 260;
                            else if (exData.OC <= 0.50) uooriya = 230;
                            else if (exData.OC <= 0.75) uooriya = 210;
                            else if (exData.OC <= 1)    uooriya = 200;
                            else if (exData.OC <= 1.25) uooriya = 190;
                            else if (exData.OC<= 1.50) uooriya = 160;
                            else if (exData.OC<= 1.83) uooriya = 155;
                            else if (exData.OC<= 2.16) uooriya = 140;
                            else if (exData.OC<= 2.50) uooriya = 120;
        
                                 if(exData.P <=3)      rajfos=1230;
                            else if( exData.P <=6.5)   rajfos= 1170;
                            else if( exData.P <=10)    rajfos= 1060;
                            else if( exData.P <=13.5)  rajfos=940;
                            else if( exData.P <=17)    rajfos= 830;
                            else if( exData.P <=20.5)  rajfos= 710;
                            else if( exData.P <=24)    rajfos= 600;
                            else if( exData.P <=27.5)  rajfos=480;
                            else if( exData.P <=30)    rajfos= 370;
                            else if( exData.P <=34.5)  rajfos= 250;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=820;
                            else if(exData.K<=75)    mop=750;
                            else if(exData.K<=115)   mop=680;
                            else if(exData.K<=155)   mop=600;
                            else if(exData.K<=195)   mop=530;
                            else if(exData.K<=235)   mop=455;
                            else if(exData.K<=275)   mop=385;
                            else if(exData.K<=315)   mop=310;
                            else if(exData.K<=355)   mop=235;
                            else if(exData.K<=395)   mop=160;
                            createAndAppendPElement("hnf: hmg ",dA4Bak,"vila mousePointer","false");//വാഴ
                            createAndAppendPElement("hmg H¶n\\v  10 Intem{Kmw hoXw ]¨nehfw/Imenhfw/It¼mÌv F¶nh \\Spt¼mÄ IpgnbnÂ tNÀt¡ïXmWv. ]cntim[\\^ew A\\pkcn¨v, Hmtcm hmg¡pw " + uooriya +"{Kmw hoXw bqdnb, " +rajfos+" {Kmw hoXw cmPvt^mkv,  "+mop+ " {Kmw hoXw s]m«mjv F¶nh 2 XhWIfmbn \\«v 2,4 amk§Ä¡v tijw tNÀ¡mhp¶XmWv.",
                            dA4Bak,"test","true");
                           
                            break;
                         
                            case"p":
                            if (exData.OC <= 0.16) uooriya = 140;
                            else if (exData.OC <= 0.33) uooriya = 130;
                            else if (exData.OC <= 0.50) uooriya = 115;
                            else if (exData.OC <= 0.75) uooriya = 105;
                            else if (exData.OC <= 1)    uooriya = 100;
                            else if (exData.OC <= 1.25) uooriya = 95;
                            else if (exData.OC<= 1.50) uooriya =  80;
                            else if (exData.OC<= 1.83) uooriya = 75;
                            else if (exData.OC<= 2.16) uooriya = 70;
                            else if (exData.OC<= 2.50) uooriya = 60;
        
                                 if(exData.P <=3)      rajfos=320;
                            else if( exData.P <=6.5)   rajfos= 290;
                            else if( exData.P <=10)    rajfos= 265;
                            else if( exData.P <=13.5)  rajfos=235;
                            else if( exData.P <=17)    rajfos= 210;
                            else if( exData.P <=20.5)  rajfos= 180;
                            else if( exData.P <=24)    rajfos= 150;
                            else if( exData.P <=27.5)  rajfos= 120;
                            else if( exData.P <=30)    rajfos= 90;
                            else if( exData.P <=34.5)  rajfos= 60;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=310;
                            else if(exData.K<=75)    mop=280;
                            else if(exData.K<=115)   mop=255;
                            else if(exData.K<=155)   mop=225;
                            else if(exData.K<=195)   mop=200;
                            else if(exData.K<=235)   mop=170;
                            else if(exData.K<=275)   mop=145;
                            else if(exData.K<=315)   mop=115;
                            else if(exData.K<=355)   mop=90;
                            else if(exData.K<=395)   mop=60;
                            createAndAppendPElement("hnf: IpcpapfIv ",dA4Bak,"vila mousePointer","false");//കുരുമുളക് 
                            createAndAppendPElement("Hmtcm sNSn¡pw 10 Intem{Kmw hoXw ]¨nehfw/Imenhfw/It¼mÌv F¶nh Pq¬þPqembv amk§fnÂ tNÀ¡mw.  ]cntim[\\m ^ew A\\pkcn¨v IpcpapfIv sNSn H¶n\\v " + uooriya +" {Kmw hoXw bqdnb, "+rajfos+ " {Kmw hoXw cmPvt^mkv,  "+mop+ " {Kmw hoXw s]m«mjv F¶nh Xpey XhWIfmbn sabvþPq¬, HmKÌvþsk]väw_À amk§fnÂ tNÀt¡ïXmWv.",
                            dA4Bak,"test","true");
                           
                            break;
                            case"bb":
                            if (exData.OC <= 0.16) uooriya = 536;
                            else if (exData.OC <= 0.33) uooriya = 490;
                            else if (exData.OC <= 0.50) uooriya = 440;
                            else if (exData.OC <= 0.75) uooriya = 400;
                            else if (exData.OC <= 1)    uooriya = 380;
                            else if (exData.OC <= 1.25) uooriya = 360;
                            else if (exData.OC<= 1.50) uooriya =  310;
                            else if (exData.OC<= 1.83) uooriya = 295;
                            else if (exData.OC<= 2.16) uooriya = 260;
                            else if (exData.OC<= 2.50) uooriya = 225;
        
                                 if(exData.P <=3)      rajfos=735;
                            else if( exData.P <=6.5)   rajfos= 670;
                            else if( exData.P <=10)    rajfos= 610;
                            else if( exData.P <=13.5)  rajfos=540;
                            else if( exData.P <=17)    rajfos= 480;
                            else if( exData.P <=20.5)  rajfos= 410;
                            else if( exData.P <=24)    rajfos= 345;
                            else if( exData.P <=27.5)  rajfos= 275;
                            else if( exData.P <=30)    rajfos= 210;
                            else if( exData.P <=34.5)  rajfos= 145;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=615;
                            else if(exData.K<=75)    mop=560;
                            else if(exData.K<=115)   mop=510;
                            else if(exData.K<=155)   mop=450;
                            else if(exData.K<=195)   mop=400;
                            else if(exData.K<=235)   mop=340;
                            else if(exData.K<=275)   mop=290;
                            else if(exData.K<=315)   mop=230;
                            else if(exData.K<=355)   mop=180;
                            else if(exData.K<=395)   mop=120;
                            createAndAppendPElement("hnf: t\\{´hmg ",dA4Bak,"vila mousePointer","false");//നേന്ത്ര 
                            createAndAppendPElement("hmg H¶n\\v 10 Intem{Kmw hoXw ]¨nehfw/Imenhfw/It¼mÌv F¶nh \\Spt¼mÄ IpgnbnÂ tNÀt¡ïXmWv.  ]cntim[\\m ^ew A\\pkcn¨v Hmtcmhmg¡pw " + uooriya +" {Kmw hoXw bqdnb, "+rajfos+ "{Kmw hoXw cmPvt^mkv, "+mop+ " {Kmw hoXw s]m«mjv F¶nh 6 XhWIfmbnþ\\«v 1, 2, 3, 4, 5 amk§Ä¡v tijhpwIpe h¶ DSt\\bpw tNÀt¡ïXmWv.",
                            dA4Bak,"test","true");
                           
                            break;
        
                          
        
        
                }
            
               
            
            
            
            });// array vila each elment End
                
         
        
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
                    if(falam>=16){nilavaram="eh-Wmwiw IqSpXÂ"};
                     if(falam<=15.9){nilavaram="eh-Wmwiw a[yaw"};
                     if (falam<=2) {nilavaram="eh-Wmwiw Ipdhv"};
                    break;
                  
                case 3:
                    unit="%";
                    falam=exData.OC;
                    manam= "Ipdhv: <0.5, a[yaw : 0.5 – 1.5, IqSpXÂ : >1.5"
                    if(falam>.5){nilavaram="a[yaw"};
                    if(falam>=1.5){nilavaram="IqSpXÂ"};
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
                   }//swithch End
        
        
            
            
            createTableRow(table,element,slNo,unit,falam,manam,nilavaram);      })// soil contents loop end
        
        
                
                        divContainer.appendChild(divA4);
        
                        divA4.appendChild(dPageNo);
                       createAndAppendPElement(i,dPageNo,"pagenumber","false");
                        divA4.appendChild(divResult);
                        divResult.appendChild(divFarmerL);
                       divResult.appendChild(divFarmerR);
                       divResult.appendChild(table);
                       divContainer.appendChild(dA4Bak);
            } // End  loop  according to Excel Row ---- End
        
        
            printButten.disabled = false;
            refreshButten.disabled = false;
            printButten.style.opacity = 1;  
            
          
               
        
        }// if called by generater Button is end
       else{  startNumber.value="";
                endNumber.value="" }
        
        } // On load function end here
            reader.readAsArrayBuffer(file);
        

                    enterButton.disabled=false;
                    enterButton.style.opacity=1;

                    refreshButten.disabled = false;
                    refreshButten.style.opacity = 1;
                   
                    
                    
        
    }}//if file is exist end, check file End
    
    
 
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Functions xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


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
 
 function clearInputs(){
    alert("cleared the inputs")
 }



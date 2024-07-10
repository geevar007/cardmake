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
"  e`y-amb amwK-\\okv ",
" e`y-amb kn¦v ",
"  e`y-amb sN¼v ",
" e`y-amb t_mtdm¬ "];

const exHead = ["jilla","pancha","post","sCode","farmer","hName","survey","gArea","gps",
                "ph","Ec","OC","P","K","Ca","Mg","Sa","Fe","Mn","Zn","Cu","B","c1","c2","c3","c4","c5"];

                    const footDiv= document.getElementById("printBDiv");
                    
                    const printButten = document.getElementById("printB");
                    const listBtn= document.getElementById("listB");
                    const refreshButten= document.getElementById("refreshB");
                    const totalCards= document.getElementById("totalCards");
                    const enterButton=document.getElementById("createB");
                    var divContainer = document.getElementById("papper");
                    const fileInput = document.getElementById("excel-file");
                    //const displayDiv=document.getElementById("displayDiv");
                    const numberIn=document.getElementById("numberIn");
                    const startNumber= document.getElementById("startNumber");
                    const endNumber= document.getElementById("endNumber");
                    const checkBtn= document.getElementById("CheckList");
                   printButten.disabled = true;
                  // checkBtn.disabled=true;
                  // checkBtn.style.opacity=0;
                   printButten.style.opacity = 0;
                    
                    refreshButten.disabled = true;
                    refreshButten.style.opacity = 0;
                    footDiv.style.opacity=0;
                    enterButton.disabled=true;
                    enterButton.style.opacity=0;
                  
                    listBtn.disabled=true;
                    listBtn.style.opacity=0;
                    
function checkFile(btnName){

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
        
        
        
            if (btnName=="cards"||btnName=="list") {
                var gvr= parseInt(startNumber.value);// (parseInt) function is used to convert a string into an integer
                var gvrE=parseInt(endNumber.value);
                    if(gvr>=1&&gvrE<=totalRo&&gvrE>=gvr&& gvr<=totalRo)
                     {var totalRo = gvrE}//
                    else {var gvr =1}
           
 
 const divFinal= createDiv("conclutionA4");//creating div for checklist
 const tableFinal=document.createElement("table");//creating table for farmer list


//--L1 start--------------------------loop depend on farmer number or selected card number-----------------------------------------------------------

 for (let i=gvr; i <=totalRo;  i++) {
                   
                const divA4 = createDiv("a4");//result frond page
                const dPageNo= createDiv("pageNo");//water mark of card number
                const dA4Bak = createDiv("a4Bak");//result bak page
                const divResult = createDiv("result");
                const divFarmerL = createDiv("farmerDetailsL");
                const divFarmerR = createDiv("farmerDetailsR");
                        
                        var table = document.createElement("table");//for result entry
                        var trH = document.createElement("tr");
                        var ftr=document.createElement("tr");// for final table
                        
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
//--L1(L1)-Start----------------------------loop (27tims) acorrding to excel colum like jilla,panchayath, Name,....ect---------------------------------------------------------------
                
                exHead.forEach((element) => {                  
                const cell = worksheet[XLSX.utils.encode_cell({ r: i, c: colNo })];
                var cellValue = cell ? cell.v : ""; // Use .v to get the raw value
                 
                    if (colNo >= 9 && colNo <= 21&& typeof cellValue === 'number') 
                    {cellValue = cellValue.toFixed(2);}// fixing for two decimal
                   
                    exData[element] = cellValue;
                   colNo++


                 
                 });  //gives all data in a (i)th row  as  exData 
//--L1(L1) End-------------------------loop according to excel colum  End here------------------------------------------------------------------------------            
                


  //  addPara( exData.farmer+" - "+exData.hName+ exData.post, divFinal,"allFarmerList","false");
                addPara("IÀjIsâ t]cv: " + exData.farmer, divFarmerL,"fL mousePointer","false");
                addPara("hnemkw : " + exData.hName + ", " + exData.post, divFarmerL,"fL","false");
                addPara("]©mb¯v : " + exData.pancha, divFarmerL,"fL mousePointer","false");
                addPara("PnÃ: " + exData.jilla, divFarmerL,"fL mousePointer","false");
                addPara("kÀsÆ  \\\¼À: " + exData.survey, divFarmerR,"fR mousePointer","false");
                addPara("hnkvXrXn: " + exData.gArea + " slÎÀ", divFarmerR,"fR mousePointer","false");
                
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
                    
                addPara("hf {]tbmK \\nÀt±i§Ä",dA4Bak,"pHeading mousePointer","false");//വളപ്രയോഗം 
               
                var ph;
                var phValues = {
                   6.5: 75, 6.4: 135, 6.3: 270, 6.2: 405, 6.1: 540, 6: 675, 5.9: 810, 5.8: 945, 5.7: 1080, 5.6: 1215,
                    5.5: 1350, 5.4: 1485, 5.3: 1620, 5.2: 1755, 5.1: 1890, 5: 2025, 4.9: 2160, 
                    4.8: 2295, 4.7: 2430, 4.6: 2665, 4.5: 2700, 4.4: 2835, 4.3: 2970, 4.2: 3105,
                    4.1: 3240, 4: 3375
                };
               
                if (exData.ph<= 6.5) {
        ph = phValues[parseFloat(exData.ph).toFixed(1)] || 3375;
       
        addPara("• ]pfnckw ImWp¶XvsImïv skân\\v "+ph+" {Kmw hoXw Ip½mbw tNÀt¡ïXmWv. CXn\\p cïv BgvN¡vtijw am{Xw cmkhf{]tbmKw \\S¯pI.",dA4Bak, "commonRec mousePointer", "true");}//കുമ്മായം 
         if (exData.Cu<1){addPara("• sN¼nsâ Ipdhv \\nI¯m³ tIm¸À kÄt^äv Hcp G¡dn\\v 800 {Kmw F¶ tXmXnÂ a®nÂtNÀ¡pI.",dA4Bak,"test","true")}
         if (exData.Mg<120){addPara("• aáojyw A]cym]vXambn ImWp¶p. CXp ]cnlcn¡p¶Xn\\mbn aáojyw kÂt^äv Hcp G¡dn\\v 32 Intem{Kmw F¶ tXmXnÂ a®nÂ tNÀ¡pI.",dA4Bak,"test","true")}
         if (exData.B<.5){addPara("• t_mtdm¬ A]cym]vXambn ImWp¶p. CXv ]cnlcn¡p¶Xn\\mbn t_mdmIvkv Hcp G¡dn\\v 4 Intem{Kmw F¶ tXmXnÂ a®nÂtNÀ¡pI.",dA4Bak,"test","true")}
         if ( exData.Sa<5){addPara("• kÄ^À A]cym]vXambn ImWp¶p. CXv ]cnlcn¡p¶Xn\\mbn  Hcp G¡dn\\v kÄ^À s]mSn 10 Intem{Kmw F¶ tXmXnÂ a®nÂ tNÀ¡pI",dA4Bak,"test","true")};
        
         if (  exData.Zn<1){addPara("• kn¦v A]cym]vXambn ImWp¶p. CXv ]cnlcn¡p¶Xn\\mbn kn¦v kÂt^äv Hcp G¡dn\\v 8 Intem{Kmw F¶ tXmXnÂ a®nÂ tNÀ¡pI.",dA4Bak,"test","true")};
        
                const vila=[exData.c1,exData.c2,exData.c3,exData.c4,exData.c5];
               
                const regex = /\d+/g; // Regular expression to match digits
                const tScode = exData.sCode.match(regex); // Extract all number parts


                const fTableData=[tScode,exData.farmer,exData.hName,exData.post,exData.survey]

 var ftr2 = createFinalTable(fTableData,ftr); 
               
                var uooriya; var rajfos; var mop; var vilaSlNo=0;
               
                

//--Start--L1(L2)-------------loop according to (crop array) named vila-----and add recomentation -----------------------------------------------------------------               
                vila.forEach(element => { 
                   
                switch(element){
                       
                        case "r":
                          
                            vilaSlNo++; 
                                 if (exData.OC <= 0.16) uooriya = 250;
                            else if (exData.OC <= 0.33) uooriya = 230;
                            else if (exData.OC <= 0.50) uooriya = 210;
                            else if (exData.OC <= 0.75) uooriya = 190;
                            else if (exData.OC <= 1)    uooriya = 180;
                            else if (exData.OC <= 1.25) uooriya = 170;
                            else if (exData.OC<= 1.50) uooriya = 145;
                            else if (exData.OC<= 1.83) uooriya = 140;
                            else if (exData.OC<= 2.16) uooriya = 125;
                            else uooriya=105;
                            
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
                            else mop=20;
                           
                            var tempTd = document.createElement('td');
                            tempTd.textContent = "s\\Ãv";
                            ftr2.appendChild(tempTd);

                            addPara("hnf: s\\Ãv",dA4Bak,"vila mousePointer","false");//നെല്ല് 
                            addPara("A¾X Ipdbv¡m\\pw ImÂky¯nsâ A]cym]vXX \\nI¯m\\pw slIvSdn\\v 350 In.{Kmw. Ip½mbw \\nesamcp¡p¶ kab¯v tNÀ¯vsImSpt¡ïXmWv. \\«v Hcpamk¯n\\ptijw slIvSdn\\v 250 In.{Kmw. Ip½mbw hoïpw tNÀ¯vsImSp¡Ww.",
                            dA4Bak,"test","true");
                            addPara(" -a[yIme aq¸pÅ C\\§Ä¡v Hcp hnfbv¡v slIvSdn\\v " + uooriya +" In{Kmw bqdnb, "+rajfos+ " In{Kmw cmPvt^mkv, "+ mop +"In{Kmw ayqdntbäv Hm^v s]m«mjv F¶nh \\ÂImw. s]mSnhnXbmsW¦nÂ taÂ]dª Afhnsâ aq¶nsemcp`mKw hoXw bqdnb, hnX¨v HcmgvN¡v tijhpw, Nn\\¸v s]m«p¶ kab¯pw, IXncphcm³ XpS§p¶ kab¯pw \\ÂIWw. apgph³ `mKw cmPvt^mkpw \\nesamcp¡p¶ kab¯v ASnhfambn \\ÂImw. Ac`mKw hoXw s]m«mjv hnX¨v HcmgvNbv¡v tijhpw, IXncphcp¶ kab¯pw tNÀ¯vsImSp¡mw. ]dn¨p\\SoemsW¦nÂ Ac`mKw bqdnbbpw Ac`mKw s]m«mjpw apgph³ `mKw cmPvt^mkpw ASnhfambpw _m¡n`mKw bqdnbbpw s]m«mjpw IXncv hcp¶Xn\\v HcmgvN ap³]mbpw \\ÂImw.",
                            dA4Bak,"test","true");
                            
                            break;
                            case"c"://തെങ്ങ്var
                            vilaSlNo++; 

                            if (exData.OC <= 0.16) uooriya = 960;
                            else if (exData.OC <= 0.33) uooriya = 875;
                            else if (exData.OC <= 0.50) uooriya = 790;
                            else if (exData.OC <= 0.75) uooriya = 725;
                            else if (exData.OC <= 1)    uooriya = 680;
                            else if (exData.OC <= 1.25) uooriya = 650;
                            else if (exData.OC<= 1.50) uooriya = 550;
                            else if (exData.OC<= 1.83) uooriya = 530;
                            else if (exData.OC<= 2.16) uooriya = 470;
                            else uooriya=400;
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
                            else mop=270;

                           var tempTd = document.createElement('td');
                            tempTd.textContent = "sX§v";
                            ftr2.appendChild(tempTd);

                            addPara("hnf: sX§v ",dA4Bak,"vila mousePointer","false");//തെങ്ങ്
                            addPara("Hmtcm sX§n\\pw 15 apXÂ 25 Intem{Kmw hsc ]¨nehfw/Imenhfw/It¼mÌv F¶nh Pq¬þPqembv amk§fnÂ tNÀ¯psImSp¡p¶Xv A\ptbmPyamWv. ]cntim[\\^ew A\\pkcn¨v, Hmtcm sX§n\\pw " + uooriya +" {Kmw hoXw bqdnb,  "+rajfos+ " {Kmw hoXw cmPvt^mkv,  "+ mop +" {Kmw hoXw s]m«mjv F¶nh tNÀt¡ïXmWv. hf§fpsS aq¶ntemcp `mKw G{]nÂþsabv amk§fnepw, _m¡n sk]väw_ÀþHIvtSm_À amk§fnepw tNÀ¡mw.",
                            dA4Bak,"test","true");

                           
                            break;
        
                           
                            case"a":
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 280;
                            else if (exData.OC <= 0.33) uooriya = 260;
                            else if (exData.OC <= 0.50) uooriya = 230;
                            else if (exData.OC <= 0.75) uooriya = 210;
                            else if (exData.OC <= 1)    uooriya = 200;
                            else if (exData.OC <= 1.25) uooriya = 190;
                            else if (exData.OC<= 1.50) uooriya = 160;
                            else if (exData.OC<= 1.83) uooriya = 155;
                            else if (exData.OC<= 2.16) uooriya = 140;
                            else  uooriya = 120;
        
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
                            else  mop=55;


                            var tempTd = document.createElement('td');
                            tempTd.textContent = "Ihp§v";
                            ftr2.appendChild(tempTd);

                            addPara("hnf: Ihp§v ",dA4Bak,"vila mousePointer","false");//കവുങ്ങ് 
                            addPara("Hmtcm Ihp§n\\pw 12 Intem{Kmw hsc ]¨nehfw/Imenhfw/It¼mÌv F¶nh sk]väw_ÀþHtÎm_À amk§fnÂ tNÀ¯psImSp¡pI. ]cntim[\\m ^ew A\\pkcn¨v Hmtcm Ihp§n\\pw " + uooriya +" {Kmw hoXw bqdnb, "+rajfos+ "{Kmw hoXw cmPvt^mkv,  "+ mop +" {Kmw hoXw s]m«mjv F¶nh 2 XhWIfmbn sk]väw_À þ HtÎm_À amk§fnepw amk§fnepw amÀ¨vþG{]nÂ amk§fnepw tNÀ¯psImSp¡pI.", 
                            dA4Bak,"test","true");
                            break;
        
                            case"n":
                            vilaSlNo++; 

                            if (exData.OC <= 0.16) uooriya = 1400;
                            else if (exData.OC <= 0.33) uooriya = 1290;
                            else if (exData.OC <= 0.50) uooriya = 1160;
                            else if (exData.OC <= 0.75) uooriya = 1070;
                            else if (exData.OC <= 1)    uooriya = 1000;
                            else if (exData.OC <= 1.25) uooriya = 960;
                            else if (exData.OC<= 1.50) uooriya = 810;
                            else if (exData.OC<= 1.83) uooriya = 780;
                            else if (exData.OC<= 2.16) uooriya = 690;
                            else uooriya = 590;
        
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
                            else  mop=400;


                            var tempTd = document.createElement('td');
                            tempTd.textContent = "PmXn";
                            ftr2.appendChild(tempTd);

                           
                            addPara("hnf: PmXn ",dA4Bak,"vila mousePointer","false");//ജാതി
                            addPara("Hmtcm PmXn ac¯n\\pw hÀj¯nÂ Hcn¡Â 50 Intem{Kmw hoXw ]¨nehfw/ Imenhfw/It¼mÌv F¶nh tNÀ¯psImSp¡p¶Xv DNnXamWv.  ]cntim[\\m ^ew A\\pkcn¨v Hmtcm ac¯n\\pw " + uooriya +" {Kmw hoXw bqdnb,  "+rajfos+ "{Kmw hoXw cmPvt^mkv,  "+ mop +"{Kmw hoXw s]m«mjv F¶nh hÀj¯nÂ Hcn¡Â tNÀ¡pI  ",
                            dA4Bak,"test","true");
                            break;

                            case"b":
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 280;
                            else if (exData.OC <= 0.33) uooriya = 260;
                            else if (exData.OC <= 0.50) uooriya = 230;
                            else if (exData.OC <= 0.75) uooriya = 210;
                            else if (exData.OC <= 1)    uooriya = 200;
                            else if (exData.OC <= 1.25) uooriya = 190;
                            else if (exData.OC<= 1.50) uooriya = 160;
                            else if (exData.OC<= 1.83) uooriya = 155;
                            else if (exData.OC<= 2.16) uooriya = 140;
                            else uooriya = 120;
        
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
                            else  mop=160;


                            var tempTd = document.createElement('td');
                            tempTd.textContent = "hmg";
                            ftr2.appendChild(tempTd);

                            addPara("hnf: hmg ",dA4Bak,"vila mousePointer","false");//വാഴ
                            addPara("hmg H¶n\\v  10 Intem{Kmw hoXw ]¨nehfw/Imenhfw/It¼mÌv F¶nh \\Spt¼mÄ IpgnbnÂ tNÀt¡ïXmWv. ]cntim[\\^ew A\\pkcn¨v, Hmtcm hmg¡pw " + uooriya +" {Kmw hoXw bqdnb, " +rajfos+" {Kmw hoXw cmPvt^mkv,  "+mop+ " {Kmw hoXw s]m«mjv F¶nh 2 XhWIfmbn \\«v 2,4 amk§Ä¡v tijw tNÀ¡mhp¶XmWv.",
                            dA4Bak,"test","true");
                           
                            break;
                         
                            case"p":
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 140;
                            else if (exData.OC <= 0.33) uooriya = 130;
                            else if (exData.OC <= 0.50) uooriya = 115;
                            else if (exData.OC <= 0.75) uooriya = 105;
                            else if (exData.OC <= 1)    uooriya = 100;
                            else if (exData.OC <= 1.25) uooriya = 95;
                            else if (exData.OC<= 1.50) uooriya =  80;
                            else if (exData.OC<= 1.83) uooriya = 75;
                            else if (exData.OC<= 2.16) uooriya = 70;
                            else uooriya = 60;
        
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
                            else  mop=60;

                            var tempTd = document.createElement('td');
                            tempTd.textContent = "Ip-:ap-f-Iv";
                            ftr2.appendChild(tempTd);

                            addPara("hnf: IpcpapfIv ",dA4Bak,"vila mousePointer","false");//കുരുമുളക് 
                            addPara("Hmtcm sNSn¡pw 10 Intem{Kmw hoXw ]¨nehfw/Imenhfw/It¼mÌv F¶nh Pq¬þPqembv amk§fnÂ tNÀ¡mw.  ]cntim[\\m ^ew A\\pkcn¨v IpcpapfIv sNSn H¶n\\v " + uooriya +" {Kmw hoXw bqdnb, "+rajfos+ " {Kmw hoXw cmPvt^mkv,  "+mop+ " {Kmw hoXw s]m«mjv F¶nh Xpey XhWIfmbn sabvþPq¬, HmKÌvþsk]väw_À amk§fnÂ tNÀt¡ïXmWv.",
                            dA4Bak,"test","true");
                           
                            break;
                            case"bb":
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 536;
                            else if (exData.OC <= 0.33) uooriya = 490;
                            else if (exData.OC <= 0.50) uooriya = 440;
                            else if (exData.OC <= 0.75) uooriya = 400;
                            else if (exData.OC <= 1)    uooriya = 380;
                            else if (exData.OC <= 1.25) uooriya = 360;
                            else if (exData.OC<= 1.50) uooriya =  310;
                            else if (exData.OC<= 1.83) uooriya = 295;
                            else if (exData.OC<= 2.16) uooriya = 260;
                            else uooriya = 225;
        
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
                            else  mop=120;

                           var tempTd = document.createElement('td');
                            tempTd.textContent = "t\\{´";
                            ftr2.appendChild(tempTd);
                            
                            addPara("hnf: t\\{´hmg ",dA4Bak,"vila mousePointer","false");//നേന്ത്ര 
                            addPara("hmg H¶n\\v 10 Intem{Kmw hoXw ]¨nehfw/Imenhfw/It¼mÌv F¶nh \\Spt¼mÄ IpgnbnÂ tNÀt¡ïXmWv.  ]cntim[\\m ^ew A\\pkcn¨v Hmtcmhmg¡pw " + uooriya +" {Kmw hoXw bqdnb, "+rajfos+ " {Kmw hoXw cmPvt^mkv, "+mop+ " {Kmw hoXw s]m«mjv F¶nh 6 XhWIfmbnþ\\«v 1, 2, 3, 4, 5 amk§Ä¡v tijhpwIpe h¶ DSt\\bpw tNÀt¡ïXmWv.",
                            dA4Bak,"test","true");
                           
                            break;

                            case"rr":
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 207;
                            else if (exData.OC <= 0.33) uooriya = 190;
                            else if (exData.OC <= 0.50) uooriya = 172;
                            else if (exData.OC <= 0.75) uooriya = 157;
                            else if (exData.OC <= 1)    uooriya = 147;
                            else if (exData.OC <= 1.25) uooriya = 136;
                            else if (exData.OC<= 1.50) uooriya =  126;
                            else if (exData.OC<= 1.83) uooriya = 115;
                            else if (exData.OC<= 2.16) uooriya =102;
                            else  uooriya = 87;
        
                                 if(exData.P <=3)      rajfos=532;
                            else if( exData.P <=6.5)   rajfos= 487;
                            else if( exData.P <=10)    rajfos= 440;
                            else if( exData.P <=13.5)  rajfos=391;
                            else if( exData.P <=17)    rajfos= 345;
                            else if( exData.P <=20.5)  rajfos= 296;
                            else if( exData.P <=24)    rajfos= 250;
                            else if( exData.P <=27.5)  rajfos= 200;
                            else if( exData.P <=30)    rajfos= 154;
                            else if( exData.P <=34.5)  rajfos= 104;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=160;
                            else if(exData.K<=75)    mop=146;
                            else if(exData.K<=115)   mop=133;
                            else if(exData.K<=155)   mop=118;
                            else if(exData.K<=195)   mop=104;
                            else if(exData.K<=235)   mop=89;
                            else if(exData.K<=275)   mop=75;
                            else if(exData.K<=315)   mop=60;
                            else if(exData.K<=355)   mop=46;
                            else  mop=31;
                            
                           var tempTd = document.createElement('td');
                            tempTd.textContent = "d-º-À-";
                            ftr2.appendChild(tempTd);
                            
                            
                            addPara("hnf: d-º-À-",dA4Bak,"vila mousePointer","false");//റബ്ബർ
                            addPara("Hcp sNSn¡v  " + uooriya +" {Kmw hoXw bqdnb, "+rajfos+ " knwKnÄ kq¸Àt^mkvt^äpw, "+mop+ " {Kmw s]m«mjpw AS§p¶ an{inXw hÀj¯nÂ Hcp XhWbmtbm (G{]nÂþsabvamk¯nÂ) AsÃ¦nÂ c-ïp-  XhWIfmbn (G{]nÂþsabv, sk]väw_ÀþHtÎm_À amk¯nÂ)  tNÀ¯psImSp¡pI.",
                            dA4Bak,"test","true");
                            break;
                            
                            case"t"://കൊള്ളി 
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 555;
                            else if (exData.OC <= 0.33) uooriya = 510;
                            else if (exData.OC <= 0.50) uooriya = 460;
                            else if (exData.OC <= 0.75) uooriya = 420;
                            else if (exData.OC <= 1)    uooriya = 395;
                            else if (exData.OC <= 1.25) uooriya = 365;
                            else if (exData.OC<= 1.50) uooriya =  340;
                            else if (exData.OC<= 1.83) uooriya = 310;
                            else if (exData.OC<= 2.16) uooriya =275;
                            else  uooriya = 235;


                            if(exData.P <=3)      rajfos=1280;
                            else if( exData.P <=6.5)   rajfos= 1170;
                            else if( exData.P <=10)    rajfos= 1060;
                            else if( exData.P <=13.5)  rajfos=940;
                            else if( exData.P <=17)    rajfos= 830;
                            else if( exData.P <=20.5)  rajfos= 710;
                            else if( exData.P <=24)    rajfos= 600;
                            else if( exData.P <=27.5)  rajfos= 480;
                            else if( exData.P <=30)    rajfos= 370;
                            else if( exData.P <=34.5)  rajfos= 250;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=425;
                            else if(exData.K<=75)    mop=390;
                            else if(exData.K<=115)   mop=355;
                            else if(exData.K<=155)   mop=310;
                            else if(exData.K<=195)   mop=280;
                            else if(exData.K<=235)   mop=235;
                            else if(exData.K<=275)   mop=200;
                            else if(exData.K<=315)   mop=160;
                            else if(exData.K<=355)   mop=125;
                            else  mop=85;
                            
                           var tempTd = document.createElement('td');
                            tempTd.textContent = "-sImÅn-";
                            ftr2.appendChild(tempTd);
                            
                            


                            addPara("hnf: a-c-¨o-\\n- ",dA4Bak,"vila mousePointer","false");//കൊള്ളി 
                            addPara("Hmtcm skân\\pw 50 Intem{Kmw hoXw Imenhfw/It¼mÌv/]¨nehfw F¶nh tNÀ¡pI.  ]cntim[\\ ^ew A\\pkcn¨v Hmtcm skân\\pw "+ uooriya+" {Kmw hoXw bqdnb, "+  rajfos+" {Kmw hoXw knwKnÄ kq¸À t^mkvt^ävv, "+ mop+" {Kmw hoXw s]m«mjv F¶nh tNÀ¡Ww.  aq¶nÂ Hcp `mKw bqdnbbpw, apgph³ knwKnÄ kq¸Àt^mkvt^äpw, aq¶nÂ Hcp `mKw s]m«mjpw ASnhfambpw, aq¶nÂ Hcp `mKw bqdnbbpw aq¶nÂ Hcp `mKw s]m«mjpw 2 amk¯n\\p tijhpw, aq¶v amk¯n\\p tijhpw tNÀ¯psImSp¡pI.",
                            dA4Bak,"test","true");
                            break;

                            case"tc"://തക്കാളി,മുളക്,വഴുതന
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 830;
                            else if (exData.OC <= 0.33) uooriya = 760;
                            else if (exData.OC <= 0.50) uooriya = 690;
                            else if (exData.OC <= 0.75) uooriya = 630;
                            else if (exData.OC <= 1)    uooriya = 590;
                            else if (exData.OC <= 1.25) uooriya =545;
                            else if (exData.OC<= 1.50) uooriya =  505;
                            else if (exData.OC<= 1.83) uooriya = 460;
                            else if (exData.OC<= 2.16) uooriya =410;
                            else  uooriya = 350;


                            if(exData.P <=3)      rajfos=1025;
                            else if( exData.P <=6.5)   rajfos= 935;
                            else if( exData.P <=10)    rajfos= 850;
                            else if( exData.P <=13.5)  rajfos=750;
                            else if( exData.P <=17)    rajfos= 665;
                            else if( exData.P <=20.5)  rajfos= 570;
                            else if( exData.P <=24)    rajfos=480;
                            else if( exData.P <=27.5)  rajfos= 385;
                            else if( exData.P <=30)    rajfos= 295;
                            else if( exData.P <=34.5)  rajfos= 200;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=205;
                            else if(exData.K<=75)    mop=185;
                            else if(exData.K<=115)   mop=170;
                            else if(exData.K<=155)   mop=150;
                            else if(exData.K<=195)   mop=135;
                            else if(exData.K<=235)   mop=115;
                            else if(exData.K<=275)   mop=95;
                            else if(exData.K<=315)   mop=75;
                            else if(exData.K<=355)   mop=60;
                            else  mop=40;
                            
                            var tempTd = document.createElement('td');
                            tempTd.textContent = "X¡mfn";
                            ftr2.appendChild(tempTd);
                            
                            


                            addPara("hnf: X¡mfn/apfIv/hgpX\\ ",dA4Bak,"vila mousePointer","false");//തക്കാളി,മുളക്,വഴുതന
                            addPara("	Hcp skân\\v 80 Intem{Kmw F¶ tXmXnÂ It¼mÌv/]¨nehfw/ Imenhfw F¶nh tNÀ¡pI. ]cntim[\\^ew A\\pkcn¨v Hmtcm skân\\pw "+ uooriya+" {Kmw hoXw bqdnb, "+rajfos+ " {Kmw hoXw cmPvt^mkv, "+mop+"{Kmw hoXw s]m«mjv F¶nh tNÀ¡Ww. ]IpXn bqdnbbpw, ]IpXn s]m«mjpw, apgph³ cmPvt^mkpw ASnhfambpw, tijn¡p¶ s]m«mjpw, ImÂ`mKw bqdnbbpw \\«v 20þ30 Znhk§Ä¡ptijhpw, _m¡nbpÅ bqdnb \\«v 2 amk§Ä¡v tijhpw tNÀ¡pI.",
                            dA4Bak,"test","true");
                            break;



                            case"v"://വെണ്ട
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 555;
                            else if (exData.OC <= 0.33) uooriya = 510;
                            else if (exData.OC <= 0.50) uooriya = 460;
                            else if (exData.OC <= 0.75) uooriya = 420;
                            else if (exData.OC <= 1)    uooriya = 395;
                            else if (exData.OC <= 1.25) uooriya =365;
                            else if (exData.OC<= 1.50) uooriya = 340;
                            else if (exData.OC<= 1.83) uooriya = 310;
                            else if (exData.OC<= 2.16) uooriya =275;
                            else  uooriya = 235;


                            if(exData.P <=3)      rajfos=205;
                            else if( exData.P <=6.5)   rajfos= 187;
                            else if( exData.P <=10)    rajfos= 170;
                            else if( exData.P <=13.5)  rajfos=150;
                            else if( exData.P <=17)    rajfos= 130;
                            else if( exData.P <=20.5)  rajfos= 115;
                            else if( exData.P <=24)    rajfos=96;
                            else if( exData.P <=27.5)  rajfos= 75;
                            else if( exData.P <=30)    rajfos= 60;
                            else if( exData.P <=34.5)  rajfos= 40;
                            else rajfos=20;
        
                                if(exData.K<=35)     mop=210;
                            else if(exData.K<=75)    mop=195;
                            else if(exData.K<=115)   mop=175;
                            else if(exData.K<=155)   mop=156;
                            else if(exData.K<=195)   mop=138;
                            else if(exData.K<=235)   mop=118;
                            else if(exData.K<=275)   mop=100;
                            else if(exData.K<=315)   mop=80;
                            else if(exData.K<=355)   mop=62;
                            else  mop=42;
                            
                            var tempTd = document.createElement('td');
                            tempTd.textContent = "-shï-";
                            ftr2.appendChild(tempTd);
                            
                            


                            addPara("hnf: -shï-  ",dA4Bak,"vila mousePointer","false");//വെണ്ട
                            addPara("	Hcp skân\\v 48 Intem{Kmw F¶ tXmXnÂ Imenhfw/It¼mÌv/ ]¨nehfw F¶nhtNÀ¡p¶Xv \\ÃXmWv. ]cntim[\\^ew A\\pkcn¨v, Hmtcm skân\\pw " +uooriya+"{Kmw hoXw bqdnb, " +rajfos+" {Kmw hoXw cmPvt^mkv, " +mop+ "{Kmw hoXw s]m«mjv F¶nh tNÀ¡Ww. ]IpXn bqdnbbpw, apgph³ cmPvt^mkpw, apgph³ s]m«mjpw ASnhfambpw, _m¡n ]IpXn bqdnb \\«v Hcp amk¯n\\ptijhpw tNÀ¡mw.	",
                            dA4Bak,"test","true");
                            break;



                            case"cu"://വെള്ളരിവർഗം
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 768;
                            else if (exData.OC <= 0.33) uooriya = 700;
                            else if (exData.OC <= 0.50) uooriya = 635;
                            else if (exData.OC <= 0.75) uooriya = 565;
                            else if (exData.OC <= 1)    uooriya = 500;
                            else if (exData.OC <= 1.25) uooriya =425;
                            else if (exData.OC<= 1.50) uooriya = 360;
                            else if (exData.OC<= 1.83) uooriya = 290;
                            else if (exData.OC<= 2.16) uooriya =220;
                            else  uooriya = 150;


                            if(exData.P <=3)      rajfos=640;
                            else if( exData.P <=6.5)   rajfos= 585;
                            else if( exData.P <=10)    rajfos= 530;
                            else if( exData.P <=13.5)  rajfos=470;
                            else if( exData.P <=17)    rajfos= 415;
                            else if( exData.P <=20.5)  rajfos= 355;
                            else if( exData.P <=24)    rajfos=300;
                            else if( exData.P <=27.5)  rajfos= 240;
                            else if( exData.P <=30)    rajfos= 185;
                            else if( exData.P <=34.5)  rajfos= 125;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=1025;
                            else if(exData.K<=75)    mop=935;
                            else if(exData.K<=115)   mop=850;
                            else if(exData.K<=155)   mop=750;
                            else if(exData.K<=195)   mop=665;
                            else if(exData.K<=235)   mop=570;
                            else if(exData.K<=275)   mop=480;
                            else if(exData.K<=315)   mop=385;
                            else if(exData.K<=355)   mop=295;
                            else  mop=200;;

                           var tempTd = document.createElement('td');
                            tempTd.textContent = "shÅcn";
                            ftr2.appendChild(tempTd);
                            
                            


                            addPara("hnf: a¯³/shÅcn/]Shew/]mhÂ/tImhÂ/Ip¼fw ",dA4Bak,"vila mousePointer","false");//വെള്ളരിവർഗം
                            addPara("	Hmtcm skân\\pw 80 Intem{Kmw hoXw Imenhfw/It¼mÌv/]¨nehfw F¶nh tNÀ¡pI. ]cntim[\\^ew A\\pkcn¨v, Hmtcm skân\\pw "+ uooriya+"{Kmw hoXw bqdnb, " +rajfos+" {Kmw hoXw cmPvt^mkv, " +mop+ " {Kmw hoXw s]m«mjv F¶nh tNÀ¡Ww. ]IpXn bqdnbbpw, apgph³ cmPvt^mkpw, apgph³ s]m«mjpw ASnhfambpw, _m¡n ]IpXn bqdnb 2 BgvNs¯ CSthfIfnÂ ]e XhWIfmbpw tNÀ¯psImSp¡pI.	",
                            dA4Bak,"test","true");
                            break;


                            case"pr"://പയർ
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 218;
                            else if (exData.OC <= 0.33) uooriya = 200;
                            else if (exData.OC <= 0.50) uooriya = 180;
                            else if (exData.OC <= 0.75) uooriya = 165;
                            else if (exData.OC <= 1)    uooriya = 155;
                            else if (exData.OC <= 1.25) uooriya =140;
                            else if (exData.OC<= 1.50) uooriya = 135;
                            else if (exData.OC<= 1.83) uooriya = 120;
                            else if (exData.OC<= 2.16) uooriya =110;
                            else  uooriya = 90;


                            if(exData.P <=3)      rajfos=768;
                            else if( exData.P <=6.5)   rajfos= 700;
                            else if( exData.P <=10)    rajfos= 635;
                            else if( exData.P <=13.5)  rajfos=565;
                            else if( exData.P <=17)    rajfos= 500;
                            else if( exData.P <=20.5)  rajfos= 425;
                            else if( exData.P <=24)    rajfos=360;
                            else if( exData.P <=27.5)  rajfos= 290;
                            else if( exData.P <=30)    rajfos= 220;
                            else if( exData.P <=34.5)  rajfos= 150;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=76;
                            else if(exData.K<=75)    mop=70;
                            else if(exData.K<=115)   mop=65;
                            else if(exData.K<=155)   mop=55;
                            else if(exData.K<=195)   mop=50;
                            else if(exData.K<=235)   mop=40;
                            else if(exData.K<=275)   mop=35;
                            else if(exData.K<=315)   mop=30;
                            else if(exData.K<=355)   mop=20;
                            else  mop=15;;

                            var tempTd = document.createElement('td');
                             tempTd.textContent = "]bÀ";
                             ftr2.appendChild(tempTd);
                             
                             


                            addPara("hnf: ]bÀ ",dA4Bak,"vila mousePointer","false");//പയർ
                            addPara("	Hmtcm skân\\pw 80 Intem{Kmw hoXw Imenhfw/It¼mÌv/]¨nehfw F¶nh tNÀ¡pI. ]cntim[\\ ^ew A\\pkcn¨v Hmtcm skân\\pw "+ uooriya+" {Kmw hoXw bqdnb, " +rajfos+"  {Kmw hoXw cmPvt^mkv, " +mop+ "{Kmw hoXw s]m«mjv F¶nh tNÀ¯psImSp¡pI. ]IpXn bqdnbbpw, apgph³ cmPvt^mkpw, apgph³ s]m«mjpw ASnhfambpw, _m¡n ]IpXn bqdnb \\«v 15þ20 Znhk§Ä¡ptijhpw tNÀ¯psImSp¡mw.",
                            dA4Bak,"test","true");
                            break;

                            case"ku"://കൂർക്ക
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 665;
                            else if (exData.OC <= 0.33) uooriya = 610;
                            else if (exData.OC <= 0.50) uooriya = 550;
                            else if (exData.OC <= 0.75) uooriya = 505;
                            else if (exData.OC <= 1)    uooriya = 470;
                            else if (exData.OC <= 1.25) uooriya =435;
                            else if (exData.OC<= 1.50) uooriya = 405;
                            else if (exData.OC<= 1.83) uooriya = 370;
                            else if (exData.OC<= 2.16) uooriya =330;
                            else  uooriya = 280;


                            if(exData.P <=3)      rajfos=1535;
                            else if( exData.P <=6.5)   rajfos= 1400;
                            else if( exData.P <=10)    rajfos= 1270;
                            else if( exData.P <=13.5)  rajfos=1130;
                            else if( exData.P <=17)    rajfos= 1000;
                            else if( exData.P <=20.5)  rajfos= 850;
                            else if( exData.P <=24)    rajfos=720;
                            else if( exData.P <=27.5)  rajfos= 580;
                            else if( exData.P <=30)    rajfos= 440;
                            else if( exData.P <=34.5)  rajfos= 300;
                            else rajfos=150;
        
                                if(exData.K<=35)     mop=845;
                            else if(exData.K<=75)    mop=770;
                            else if(exData.K<=115)   mop=700;
                            else if(exData.K<=155)   mop=620;
                            else if(exData.K<=195)   mop=550;
                            else if(exData.K<=235)   mop=470;
                            else if(exData.K<=275)   mop=395;
                            else if(exData.K<=315)   mop=315;
                            else if(exData.K<=355)   mop=245;
                            else  mop=165;;

                            var tempTd = document.createElement('td');
                             tempTd.textContent = "Iq-À-¡-";
                             ftr2.appendChild(tempTd);
                             
                             


                            addPara("hnf: Iq-À-¡- ",dA4Bak,"vila mousePointer","false");//കൂർക്ക
                            addPara("	]cntim[\\m ^ew A\\pkcn¨v Hmtcm skân\\pw "+uooriya+ "{Kmw hoXw bqdnb, " +rajfos+" {Kmw hoXw knwKnÄ kq¸À t^mkvt^äv, " +mop+" {Kmw hoXw s]m«mjv F¶nh tNÀ¡Ww.  aq¶nÂ Hcp `mKw bqdnbbpw, aq¶nÂ Hcp `mKw s]m«mjpw apgph³ knwKnÄ kq¸À t^mkvt^äqw ASnhfambpw, _m¡n s]m«mjpw bqdnbbpw 45 Znhk§Ä¡v tijhpw tNÀ¯v sImSp¡pI.",
                            dA4Bak,"test","true");
                            break;



                            case"ch"://ചീര
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 1110;
                            else if (exData.OC <= 0.33) uooriya = 1020;
                            else if (exData.OC <= 0.50) uooriya = 920;
                            else if (exData.OC <= 0.75) uooriya = 840;
                            else if (exData.OC <= 1)    uooriya = 790;
                            else if (exData.OC <= 1.25) uooriya =730;
                            else if (exData.OC<= 1.50) uooriya = 680;
                            else if (exData.OC<= 1.83) uooriya = 620;
                            else if (exData.OC<= 2.16) uooriya =550;
                            else  uooriya = 470;


                            if(exData.P <=3)      rajfos=1280;
                            else if( exData.P <=6.5)   rajfos= 1170;
                            else if( exData.P <=10)    rajfos= 1060;
                            else if( exData.P <=13.5)  rajfos=940;
                            else if( exData.P <=17)    rajfos= 830;
                            else if( exData.P <=20.5)  rajfos= 710;
                            else if( exData.P <=24)    rajfos=600;
                            else if( exData.P <=27.5)  rajfos= 480;
                            else if( exData.P <=30)    rajfos= 370;
                            else if( exData.P <=34.5)  rajfos= 250;
                            else rajfos=150;
        
                                if(exData.K<=35)     mop=425;
                            else if(exData.K<=75)    mop=390;
                            else if(exData.K<=115)   mop=355;
                            else if(exData.K<=155)   mop=310;
                            else if(exData.K<=195)   mop=280;
                            else if(exData.K<=235)   mop=235;
                            else if(exData.K<=275)   mop=200;
                            else if(exData.K<=315)   mop=160;
                            else if(exData.K<=355)   mop=125;
                            else  mop=85;;

                            var tempTd = document.createElement('td');
                             tempTd.textContent = "Noc";
                             ftr2.appendChild(tempTd);
                             
                             


                            addPara("hnf: Noc ",dA4Bak,"vila mousePointer","false");//ചീര
                            addPara("	Hmtcm skân\\pw 200 Intem{Kmw hoXw Imenhfw/It¼mÌv/]¨nehfw F¶nh tNÀ¡pI. ]cntim[\\^ew A\\pkcn¨v, Hmtcm skân\\pw "+uooriya+ "{Kmw hoXw bqdnb," +rajfos+" {Kmw hoXw cmPvt^mkv,  " +mop+" {Kmw hoXw s]m«mjv, F¶nh tNÀ¡Ww. ]IpXn bqdnbbpw, apgph³ cmPvt^mkpw, apgph³ s]m«mjpw ASnhfambpw, tijn¡p¶ ]IpXn bqdnb \\nÝnX CSthfIfnÂ ]e XhWIfmbpw tNÀ¯psImSp¡pI. ",
                            dA4Bak,"test","true");
                            break;

                            case"i"://ഇഞ്ചി
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 840;
                            else if (exData.OC <= 0.33) uooriya = 760;
                            else if (exData.OC <= 0.50) uooriya = 700;
                            else if (exData.OC <= 0.75) uooriya = 640;
                            else if (exData.OC <= 1)    uooriya = 600;
                            else if (exData.OC <= 1.25) uooriya =580;
                            else if (exData.OC<= 1.50) uooriya = 480;
                            else if (exData.OC<= 1.83) uooriya = 460;
                            else if (exData.OC<= 2.16) uooriya =420;
                            else  uooriya = 360;


                            if(exData.P <=3)      rajfos=1280;
                            else if( exData.P <=6.5)   rajfos= 1160;
                            else if( exData.P <=10)    rajfos= 1060;
                            else if( exData.P <=13.5)  rajfos=940;
                            else if( exData.P <=17)    rajfos= 840;
                            else if( exData.P <=20.5)  rajfos= 720;
                            else if( exData.P <=24)    rajfos=600;
                            else if( exData.P <=27.5)  rajfos= 480;
                            else if( exData.P <=30)    rajfos= 360;
                            else if( exData.P <=34.5)  rajfos= 240;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=400;
                            else if(exData.K<=75)    mop=380;
                            else if(exData.K<=115)   mop=340;
                            else if(exData.K<=155)   mop=300;
                            else if(exData.K<=195)   mop=260;
                            else if(exData.K<=235)   mop=220;
                            else if(exData.K<=275)   mop=200;
                            else if(exData.K<=315)   mop=160;
                            else if(exData.K<=355)   mop=120;
                            else  mop=80;;

                            var tempTd = document.createElement('td');
                             tempTd.textContent = "C©n";
                             ftr2.appendChild(tempTd);
                             
                             


                            addPara("hnf: C©n ",dA4Bak,"vila mousePointer","false");//ഇഞ്ചി
                            addPara("	Hcp skân-\\v 120 Intem{Kmw hoXw Imenhfw/It¼mÌv/]¨nehfw F¶nh tNÀ¡pI.  ]cntim[\\m ^ew A\\pkcn¨v Hmtcm skân-\\pw "+uooriya+ "{Kmw hoXw bqdnb, " +rajfos+"{Kmw hoXw knwKnÄ kq¸Àt^mkvt^äv,  " +mop+" {Kmw hoXw s]m«mjv F¶nh tNÀ¡Ww.  apgph³ knwKnÄ kq¸À t^mkvt^äpw, ]IpXn s]m«mjpw ASnhfambpw ]IpXn bqdnb 2 amk¯n\\p tijhpw tNÀ¯psImSp¡pI.  _m¡n ]IpXn bqdnbbpw s]m«mjpw 4 amk¯n\\v tijhpw tNÀ¯psImSp¡pI.",
                            dA4Bak,"test","true");
                            break;
                            case"m"://മഞ്ഞൾ
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 340;
                            else if (exData.OC <= 0.33) uooriya = 300;
                            else if (exData.OC <= 0.50) uooriya =280;
                            else if (exData.OC <= 0.75) uooriya = 260;
                            else if (exData.OC <= 1)    uooriya = 240;
                            else if (exData.OC <= 1.25) uooriya =220;
                            else if (exData.OC<= 1.50) uooriya = 200;
                            else if (exData.OC<= 1.83) uooriya = 180;
                            else if (exData.OC<= 2.16) uooriya =160;
                            else  uooriya = 140;


                            if(exData.P <=3)      rajfos=760;
                            else if( exData.P <=6.5)   rajfos= 700;
                            else if( exData.P <=10)    rajfos= 640;
                            else if( exData.P <=13.5)  rajfos=560;
                            else if( exData.P <=17)    rajfos= 500;
                            else if( exData.P <=20.5)  rajfos= 420;
                            else if( exData.P <=24)    rajfos=360;
                            else if( exData.P <=27.5)  rajfos= 280;
                            else if( exData.P <=30)    rajfos= 220;
                            else if( exData.P <=34.5)  rajfos= 160;
                            else rajfos=50;
        
                                if(exData.K<=35)     mop=480;
                            else if(exData.K<=75)    mop=440;
                            else if(exData.K<=115)   mop=400;
                            else if(exData.K<=155)   mop=360;
                            else if(exData.K<=195)   mop=320;
                            else if(exData.K<=235)   mop=280;
                            else if(exData.K<=275)   mop=240;
                            else if(exData.K<=315)   mop=180;
                            else if(exData.K<=355)   mop=140;
                            else  mop=100;;

                            var tempTd = document.createElement('td');
                             tempTd.textContent = "a-ª-Ä";
                             ftr2.appendChild(tempTd);
                             
                             


                            addPara("hnf: a-ª-Ä- ",dA4Bak,"vila mousePointer","false");//മഞ്ഞൾ
                            addPara("skân-\\v 160 Intem{KmwhoXw ]¨nehfw/It¼mÌv/NmWIs¸mSn F¶nh tNÀ¡pI.  a®v ]cntim[\\m^ew A\\pkcn¨v Hcp skân-\\v "+uooriya+ "{Kmw bqdnb,  " +rajfos+"{Kmw knwKnÄkq¸À t^mkvt^äv,  " +mop+" {Kmw s]m«mjv F¶nh tNÀ¡Ww.  apgph³ knwKnÄ kq¸À t^mkvt^äpw ]IpXn s]m«mjpw ASnhfambn tNÀ¡pI.  aq¶nÂ c­v `mKw bqdnb 30 Znhk¯n\\v tijw tNÀ¡pI.  _m¡nbpÅ s]m«mjpw aq¶nÂ Hcp `mKw bqdnbbpw 60 Znhk¯n\\v tijw tNÀ¡mhp¶XmWv.",
                            dA4Bak,"test","true");
                            break;


                            case"e"://ചേന 
                            vilaSlNo++; 
                            if (exData.OC <= 0.16) uooriya = 1100;
                            else if (exData.OC <= 0.33) uooriya = 1000;
                            else if (exData.OC <= 0.50) uooriya = 910;
                            else if (exData.OC <= 0.75) uooriya = 835;
                            else if (exData.OC <= 1)    uooriya = 780;
                            else if (exData.OC <= 1.25) uooriya =720;
                            else if (exData.OC<= 1.50) uooriya = 670;
                            else if (exData.OC<= 1.83) uooriya = 610;
                            else if (exData.OC<= 2.16) uooriya =540;
                            else  uooriya = 465;


                            if(exData.P <=3)      rajfos=1280;
                            else if( exData.P <=6.5)   rajfos= 1170;
                            else if( exData.P <=10)    rajfos= 1060;
                            else if( exData.P <=13.5)  rajfos=940;
                            else if( exData.P <=17)    rajfos= 830;
                            else if( exData.P <=20.5)  rajfos= 710;
                            else if( exData.P <=24)    rajfos=600;
                            else if( exData.P <=27.5)  rajfos= 480;
                            else if( exData.P <=30)    rajfos= 370;
                            else if( exData.P <=34.5)  rajfos= 250;
                            else rajfos=150;
        
                                if(exData.K<=35)     mop=1180;
                            else if(exData.K<=75)    mop=1170;
                            else if(exData.K<=115)   mop=1060;
                            else if(exData.K<=155)   mop=940;
                            else if(exData.K<=195)   mop=830;
                            else if(exData.K<=235)   mop=710;
                            else if(exData.K<=275)   mop=600;
                            else if(exData.K<=315)   mop=480;
                            else if(exData.K<=355)   mop=370;
                            else  mop=250;;

                            var tempTd = document.createElement('td');
                             tempTd.textContent = "tN\\ ";
                             ftr2.appendChild(tempTd);
                             
                             


                            addPara("hnf: tN\\  ",dA4Bak,"vila mousePointer","false");//ചേന 
                            addPara("	HcpIp-gn-bv¡v 2 Intem{Kmw  F¶ AfhnÂ Imenhfw/It¼mÌv/]¨nehfw F¶nh tNÀ¡Ww.  ]cntim[\\m ^ew A\\pkcn¨v Hmtcm skân\\pw  "+uooriya+ " {Kmw hoXw bqdnb, " +rajfos+" {Kmw hoXw cmPvt^mkv,  " +mop+" {Kmw  s]m«mjv F¶nhbpw -tNÀt¡ï-Xm-Wv .  ]IpXn bqdnbbpw, ]IpXn s]m«mjpw, apgph³ cmPvt^mkpw \\«v H¶camk¯n\\p tijhpw _m¡n ]IpXn bqdnbbpw ]IpXn s]m«mjpw BZy hf{]tbmKw Ignªp Hcpamk¯n\\p tijhpw tNÀ¯psImSp¡pI. ",
                            dA4Bak,"test","true");
                            break;


        
                }
            
               
            
            
            
            });
       
//---End--L1(L2)----------------loop according to crop array named vila-------------------------------------------------------------              
         
        
        var slNo=0;i
        var unit="";
        var falam="";
        var manam;//മാനദണ്ഡം
        var nilavaram= ""
 // --start--L1(L3)--------Loop according SoilContents ----create result table data- -----------       
        soilContents.forEach(element => {  
            
             slNo ++;
              
             switch(slNo) {
                case 1:
                     unit="";
                     falam=exData.ph;
                     manam= "Aavfw : < 6.5  , \\nÀÆocyw: 6.5 þ 7.3 , -£mcw: > 7.4";
                     if(falam>=7.4){nilavaram="£mcw"};//ക്ഷാരം 
                     if(falam<=7.3){nilavaram="\\nÀÆocyw"};//നിർവീര്യം 
                     if (falam<=6.5) {nilavaram="Aavfw"};//അമ്ലം  
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
                   }
                   //swithch End
        
        
                createTableRow(table,element,slNo,unit,falam,manam,nilavaram);     
                                                                 })
//-----End--L1(L3)--------------------------------------------- soil contents loop end-----------
                        
                        divA4.appendChild(dPageNo);
                       
                        addPara(i,dPageNo,"pagenumber","false");
                       
                        divA4.appendChild(divResult);
                        divResult.appendChild(divFarmerL);
                       divResult.appendChild(divFarmerR);
                       divResult.appendChild(table);
                      
                       if(btnName=="cards"){ divContainer.appendChild(divA4);
                                             divContainer.appendChild(dA4Bak) }
                       tableFinal.appendChild(ftr2)
            } 
//--L1 End ------------------------End--loop depend on farmer number or selected card number End-----------------------------------------------   
            divFinal.appendChild(tableFinal)
            
            if(btnName=="list"){divContainer.appendChild(divFinal)}
            
            
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
                    listBtn.disabled=false;
                    listBtn.style.opacity=1;
                    refreshButten.disabled = false;
                    refreshButten.style.opacity = 1;
                    footDiv.style.opacity=1;
                    
                    
        
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


function  addPara(text, div, clsName,editSatus) {
    editSatus="false";
    var p = document.createElement("p");
  
    p.className = clsName;
    p.textContent = text;
    p.setAttribute("contenteditable", editSatus); // Make the paragraph editable
   
    div.appendChild(p);
}


function gRefresh(){
    const elementsToRemove = document.querySelectorAll('.a4, .a4Bak, .conclutionA4');
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
 
  function createFinalTable(data, tr) {
    
    data.forEach(cellData => {
        const ftd = document.createElement('td');
        ftd.textContent = cellData;
       
        tr.appendChild(ftd);
       
    });

    return tr; // If you need to return the modified tr element
}

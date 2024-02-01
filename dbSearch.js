document.body.style.fontFamily = 'Arial, sans-serif';
const fileInput = document.getElementById("excel-file");
    var resultArr=[];
    const pName=[];
    const hName=[];
    const hNo=[];
    const mNo=[];
    const rName=[];
    var lang="Eng"
    const inputBox=document.getElementById("name");
    const inputHome=document.getElementById("house");
    const counter=document.getElementById("counter");
 
  const checkbox = document.getElementById('changeFontCheckbox');
  const textToChange = document.getElementById('nameautocomplete-list');
  var myButton = document.getElementById("myButton");
  const fileLabel = document.getElementById('file-label');
  const mainDiv=document.getElementById('container');
  inputBox.style.display = 'none';
  inputHome.style.display = 'none';
  inputBox.addEventListener("input", function(e) { keyPressed();})
  inputHome.addEventListener("input", function(e) {subSearch();  }) 
    
    function keyPressed(){ 
      
      var val = inputBox.value;
       
        closeAllLists();
       // const file = fileInput.files[0]; 
        if(!val) {return false }
        
        var arr= getSelectedArray();
        
        var a = makeDiveForOutPut()
       
       var totalFound=0;
       resultArr=[];
        /*for each item in the array...*/
        for (var i = 0; i < arr.length; i++) {
                      
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
           
                           resultArr.push(i);

                         if(inputHome.value){subSearch()}
                          
                         else{totalFound++; createOutput (a,i,totalFound); }          }
                }
                          }//Keypressd End*/}})
   
   
      

function subSearch(){
  if(!inputBox.value) { return false }
  closeAllLists(); 

     var totalFound = 0;
     var val2=inputHome.value;
     var a =  makeDiveForOutPut();
    

     resultArr.forEach(function (element) {
     
     var arr2=hName;
     var sOption=document.querySelector('input[name="option"]:checked').value
    if( sOption=='hName'){ var arr2=pName;}

 
        if(val2 && arr2[element].substr(0,val2.length).toUpperCase()==val2.toUpperCase()){
          totalFound++;
          createOutput (a,element,totalFound); }// if same text find end

if(!val2){keyPressed()}
     })// forEach result arr End 
                    }// sub search end heare

function makeDiveForOutPut(){

 var a = document.createElement("DIV");    
  a.setAttribute("class", "autocomplete-items");
  
  if(lang=="Mal") { a.style.fontFamily = 'karthika'};
  mainDiv.appendChild(a);
  return a;

}



function createOutput(a,i,totalFound){


 var b = document.createElement("p");
  b.innerHTML = (1+i)+' '+pName[i]+" - ( "+ rName[i] +" ) "+"_ "+
hNo[i]+" _ "+hName[i]+' _'+ "Mob:"+mNo[i];
a.style.display="block";
a.appendChild(b);
    
    counter.innerHTML= "Total Found: "+totalFound
}

    function closeAllLists() {

      counter.innerHTML= ""
     var x = document.getElementsByClassName("autocomplete-items");
      
      for (var i = 0; i < x.length; i++) {x[i].parentNode.removeChild(x[i])}
    }
 

  function checkFile(){

    hName.length = 0;
    hNo.length = 0;
    mNo.length = 0;
    pName.length = 0;
    rName.length=0;
    const file = fileInput.files[0]; 
  if (file) {
    inputBox.style.display = 'block';
    inputHome.style.display = 'block';
    inputBox.disabled = false;
    fileLabel.textContent = fileInput.files[0].name.replace(/\.[^/.]+$/, '');
    fileLabel.style.backgroundColor="#3498db";
    fileLabel.style.color="white";
      const reader = new FileReader();
      reader.onload = function(e) {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const range = XLSX.utils.decode_range(worksheet["!ref"]);
          const  totalColm= range.e.c ;
           var  totalRo=range.e.r;
    const sNo=[];
    
              
          for (let i=1; i <=5;  i++) {
         
              
             
            for (let rNo=1; rNo<=totalRo; rNo++ ) {
              const cell = worksheet[XLSX.utils.encode_cell({ r: rNo, c: i })];
              var cellValue = cell ? cell.v : "x"; // Use .v to get the raw value
              
              if (typeof cellValue === 'number') {cellValue=cellValue.toString()}
             switch(i){

            case 1:
              pName.push(cellValue);  
            break;

            case 2:
              rName.push(cellValue);   
           
            break;

            case 3:
                hNo.push(cellValue);
            break;

            case 4:
              hName.push(cellValue);
            break;

            case 5:
              mNo.push(cellValue);
            break;

                    }//switch end
               
                             } //xxxxxxxxxxxx loop for totalrow  End here
                
                                 } // End   4 times loop  ---- End
     
                                              } // On load function end here
    reader.readAsArrayBuffer(file);  }// if file end
                                                      


}// check file end

 
        function toMalayalam() {
          const textToChange = document.getElementById('nameautocomplete-list');
          
            if (lang=="Eng") {lang="Mal";myButton.innerHTML = "Eng";
               
               if(textToChange){ textToChange.style.fontFamily = 'karthika';
                                  textToChange.style.fontSize="22px"}
                inputBox.style.fontFamily='karthika';
               
                inputBox.placeholder="-t]cv :";
                inputBox.style.fontSize=" 16px";
            } else {lang="Eng";myButton.innerHTML = "Mal";
                // Reset the font when the checkbox is unchecked
                if(textToChange){ textToChange.style.fontFamily = 'Arial, sans-serif';
                                  textToChange.style.fontSize="20px"}
                inputBox.style.fontFamily='Arial, sans-serif';
                inputBox.placeholder="Name:";
                inputBox.style.fontSize=" 12px" }
              }

   function getSelectedArray(){
    var selectedRadioButton = document.querySelector('input[name="option"]:checked');

      switch (selectedRadioButton.value) {
        case 'pName':
          return pName;
        case 'hName':
          return hName;
        case 'hNo':
          return hNo;
        }

      
    } 

 

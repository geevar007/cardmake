document.body.style.fontFamily = 'Arial, sans-serif';
const fileInput = document.getElementById("excel-file");

    const pName=[];
    const hName=[];
    const hNo=[];
    const mNo=[];
    const rName=[];
    var lang="Eng"
    const inputBox=document.getElementById("name");
    const counter=document.getElementById("counter");
  autocomplete(document.getElementById("name"));
  const checkbox = document.getElementById('changeFontCheckbox');
  const textToChange = document.getElementById('nameautocomplete-list');
  var myButton = document.getElementById("myButton");
  const fileLabel = document.getElementById('file-label');
  const mainDiv=document.getElementById('container');
  
function autocomplete(inp) {
  inputBox.style.display = 'none';
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        const file = fileInput.files[0]; 
        if(!file){return false }
        if (!val) {return false }
        var arr= getSelectedArray();
        
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
       
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        a.style.display="none";
        if(lang=="Mal") { a.style.fontFamily = 'karthika'};
       /*append the DIV element as a child of the autocomplete container:*/
       //mainDiv.parentNode.appendChild(a);
       mainDiv.appendChild(a);
       var totalFoud=0;
        
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
           
            b = document.createElement("p");
            
            b.innerHTML = (1+i)+' '+pName[i]+" - ( "+ rName[i] +" ) "+"_ "+
                            hNo[i]+" _ "+hName[i]+' _'+
                            "Mob:"+mNo[i];
       
            
           
            a.style.display="block";
            a.appendChild(b);
            totalFoud++;
          }
        }
        counter.innerHTML= "Total Found: "+totalFoud

    });//event listner end*/}})
   
    function closeAllLists(elmnt) {

      counter.innerHTML= ""
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
 } //autocomplete End here

  function checkFile(){

    hName.length = 0;
    hNo.length = 0;
    mNo.length = 0;
    pName.length = 0;
    rName.length=0;
    const file = fileInput.files[0]; 
  if (file) {
    inputBox.style.display = 'block';
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
                inputBox.style.fontSize=" 12px";
              
            }}

   function getSelectedArray(){
    var selectedRadioButton = document.querySelector('input[name="option"]:checked');

    // Check if any radio button is selected
    if (selectedRadioButton) {
    

      switch (selectedRadioButton.value) {
        case 'pName':
          return pName;
        case 'hName':
          return hName;
        case 'hNo':
          return hNo;
       
      }

      
    } else {
      return pName;
    }}

 

document.body.style.fontFamily = 'Arial, sans-serif';
const fileInput = document.getElementById("excel-file");
const pName=[];
    const hName=[];
    const hNo=[];
    const mNo=[];
var arr= pName;
  var lang="Eng"
const inputBox=document.getElementById("name");
autocomplete(document.getElementById("name"));
 
  const checkbox = document.getElementById('changeFontCheckbox');
  const textToChange = document.getElementById('nameautocomplete-list');
  var myButton = document.getElementById("myButton");
  const fileLabel = document.getElementById('file-label');
const mainDiv=document.getElementById('container');
function autocomplete(inp) {
 
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
      
        if (!val) { return false }
     
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        if(lang=="Mal"){ a.style.fontFamily = 'karthika'}
       /*append the DIV element as a child of the autocomplete container:*/
       //mainDiv.parentNode.appendChild(a);
       mainDiv.appendChild(a);
        
        
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("p");
            /*make the matching letters bold:*/
            b.innerHTML = 1+i+'<br>'+pName[i]+'<br>'+hNo[i]+","+hName[i]+'<br>'+"Mob: "+mNo[i];
       
            /*insert a input field that will hold the current array item's value:*/
           
         
            a.appendChild(b);
          }
        }
    });//event listner end
   
    function closeAllLists(elmnt) {

      
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

const file = fileInput.files[0]; 
  
  
  if (file) {
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
    
              
          for (let i=1; i <=4;  i++) {
         
              
             
            for (let rNo=1; rNo<=totalRo; rNo++ ) {
              const cell = worksheet[XLSX.utils.encode_cell({ r: rNo, c: i })];
              var cellValue = cell ? cell.v : "x"; // Use .v to get the raw value
              
             switch(i){

            case 1:
              pName.push(cellValue);  
            break;

            case 2:
               hName.push(cellValue);
            break;

            case 3:
                hNo.push(cellValue);
            break;

            case 4:
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
                // Change the font when the checkbox is checked
               if(textToChange){ textToChange.style.fontFamily = 'karthika'}
                inputBox.style.fontFamily='karthika';
                textToChange.style.fontSize="18px";
                inputBox.placeholder="-t]cv :";
                inputBox.style.fontSize=" 16px";
            } else {lang="Eng";myButton.innerHTML = "Mal";
                // Reset the font when the checkbox is unchecked
                if(textToChange){  textToChange.style.fontFamily = 'Arial, sans-serif'}
                inputBox.style.fontFamily='Arial, sans-serif';
                inputBox.placeholder="Name:";
                inputBox.style.fontSize=" 12px";
                textToChange.style.fontSize="16px";
            }};

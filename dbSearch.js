
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




function autocomplete(inp) {
 
  var currentFocus;
   
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
       
  
  
 
        if (!val) { return false }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        if(lang=="Mal"){ a.style.fontFamily = 'karthika'}
       /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("p");
            /*make the matching letters bold:*/
            b.innerHTML = 1+i+'<br>'+pName[i]+'<br>'+hNo[i]+","+hName[i]+'<br>'+"Mob: "+mNo[i];
       
            /*insert a input field that will hold the current array item's value:*/
           
           
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
               // inp.value = this.getElementsByTagName("input")[0].value;
               
               console.log(" this function woring 51")
  
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                //closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });//event listner end
   
   
   
    /*execute a function presses a key on the keyboard:*/
   
   
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) { 
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
          console.log("dwon key pressed-"+x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    
    
    
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
//////////////////////////////////////////////////////////////////////////////////////


    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }

///////////////////////////////////////////////////

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




    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
       console.log("function woring 141")
      //closeAllLists(e.target);
    });
  } //autocomplete End here

  
  
  
  function checkFile(){

    console.log("checkFile working")
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
     console.log("malbuton is woiding")
            if (lang=="Eng") {lang="Mal";myButton.innerHTML = "Eng";
                // Change the font when the checkbox is checked
               if(textToChange){ textToChange.style.fontFamily = 'karthika'}
                inputBox.style.fontFamily='karthika';
            } else {lang="Eng";myButton.innerHTML = "Mal";
                // Reset the font when the checkbox is unchecked
                if(textToChange){  textToChange.style.fontFamily = 'Arial, sans-serif'}
                inputBox.style.fontFamily='Arial, sans-serif';
            }};
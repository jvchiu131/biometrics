document.getElementById("file").addEventListener('change', function(){

    var file_scanner = new FileReader();

    file_scanner.onload = function(){
        document.getElementById("filescreen").textContent=file_scanner.result;
    }

    file_scanner.readAsText(this.files[0]);


})


function deletetxt(){
    var btnDelete = document.getElementById("btnDelete");

    
        if(document.getElementById("filescreen").length != 0){

           document.getElementById("filescreen").innerHTML = "";
           document.getElementById("file").value = "";
          return;
        }
  
}
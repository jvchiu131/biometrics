document.getElementById("file").addEventListener('change', function(){

    var file_scanner = new FileReader();

    var file_screen = document.getElementById("filescreen");

    var file = this.files[0];

    file_scanner.onload = function(){

        var file_array = file_scanner.result.split(' ');

       for(var line = 0; line < file_array.length - 1; line++){
           //console.log(file_array[line])
           file_screen.innerHTML = file_array;
          
       }
    };
    file_scanner.readAsText(file);

})


function deletetxt(){
    var btnDelete = document.getElementById("btnDelete");

    
        if(document.getElementById("filescreen").length != 0){

           document.getElementById("filescreen").innerHTML = "";
           document.getElementById("file").value = "";
          return;
        }
  
}
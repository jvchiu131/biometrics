document.getElementById("file").addEventListener('change', function(){

    var file_scanner = new FileReader();

    var file_screen = document.getElementById("filescreen");

    var file_data = [];

    var file = this.files[0];


    file_scanner.onload = function(){

        //var file_array = file_scanner.result.split(" ");

        var str = file_scanner.result;
        var regex = new RegExp(/\s+/);
        var file_array = str.split(regex);


       for(var line = 0; line < file_array.length -1; line++){
           //file_screen.innerHTML = file_array;
           //file_data = [file_array];
           //file_data = [line];
           console.log(line);
           file_data = [file_array]; 
       }
       //file_data = [file_array];
       console.log(file_data);

       $(document).ready(function () {
        $('#dt').DataTable({
            data: file_data,
            columns: [
                { title: 'ID' },
                { title: 'Date' },
                { title: 'Time' },
                { title: 'Ignore' },
                { title: 'Ignore' },
                { title: 'Ignore' },
                { title: 'Ignore' },
            ],
        });
    });
    };

    //file_scanner.readAsText(file)
    file_data = [file_scanner.readAsText(file)];

   

})


function deletetxt(){
    var btnDelete = document.getElementById("btnDelete");

    
        if(document.getElementById("filescreen").length != 0){

           document.getElementById("filescreen").innerHTML = "";
           document.getElementById("file").value = "";
          return;
        }
  
}



//<pre>
        //<div id="filescreen">

        //</div>
   // </pre>
$(document).ready(function(){
    var cpuNumber=0;

    for(var i=0;i<36;i++){
        $('.container').append( "<div id=" + i + " class=cell></div>");
    }

    $(document).on('click', '.cell', function(){
        var thisCell=$(this);
        $.ajax({
            url: "https://www.boolean.careers/api/random/int",
            method: "GET",
            success: function(data){
                cpuNumber=parseInt(data.response);

                if((cpuNumber!=0)&&(cpuNumber<=5)){
                    console.log("il numero del pc è", + cpuNumber );
                    thisCell.css('background', 'yellow');
                    thisCell.text(cpuNumber);
                }
                else if((cpuNumber!=0)&&(cpuNumber>5)){
                    console.log("il numero del pc è", + cpuNumber );
                    thisCell.css('background', 'green');
                    thisCell.text(cpuNumber)
                }
              },
              error:function(){
                  console.log("errore");
            }


        });




    });



});

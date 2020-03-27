$(function(){

    $(".devour").on("click", function(e){
        e.preventDefault();
        const id = $(this).data("id");

        $.ajax("/api/devour/" + id, {
            type: "GET"
        }).then( function(){
            console.log("sent a request");
            location.reload();
        });
    });

    $(".add-burger").on("click", function(e){
        e.preventDefault();
        const b ={
            burg: $("#bu").val().trim()
        };
        $.ajax("/api/devour", {
            type: "POST",
            data: b
        }).then(()=> {
            console.log("added a burger");
            location.reload();
        });
    })
});
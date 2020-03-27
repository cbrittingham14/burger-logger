$(function(){

    $(".devour").on("click", function(e){
        e.preventDefault();
        const id = $(this).data("id");
        console.log("you clicked id: ", id);

        $.ajax("/api/devour/" + id, {
            type: "GET"
        }).then( function(){
            console.log("sent a request");
        });
    });

    $(".add-burger").on("click", function(e){
        e.preventDefault();
        const b ={
            burg: $("#bu").val().trim()
        };
        console.log(b);

        $.ajax("/api/devour", {
            type: "POST",
            data: b
        }).then(()=> console.log("added a burger"));
    })
});
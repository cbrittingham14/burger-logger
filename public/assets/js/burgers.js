$(function(){
    $(".devour").on("click", function(e){
        e.preventDefault();
        const id = $(this).data("id");
        console.log("you clicked id: ", id);

        $.ajax("/api/devour/" + id, {
            type: "GET"
        }).then( function(){
            console.log("sent a request");
        })
    })
})
//wait for the view to load before executing any logic
$(function(){

    //send a request to change devour state when 
    // a user clicks the devour button
    $(".devour").on("click", function(e){
        e.preventDefault();
        const id = $(this).data("id");
        $.ajax("/api/devour/" + id, {
            type: "GET"
        }).then( function(){
            location.reload();
        });
    });

    //send a request to add the text from the textbox
    //to the database as a new burger
    $(".add-burger").on("click", function(e){
        e.preventDefault();
        const b ={
            burg: $("#bu").val().trim()
        };
        $.ajax("/api/devour", {
            type: "POST",
            data: b
        }).then(()=> {
            location.reload();
        });
    })
});
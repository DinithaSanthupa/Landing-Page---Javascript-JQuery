$("submit").click(function(){
    let email;
    let subject;
    let message;

    email = $("#email").val();
    subject = $("#Subject").val();
    message = $("#message").val();

    console.log(email);
})

$.ajax({
    url:'fdsfdsfg',
    method:'POST',
    data:{
        'email':email,
        'subject':subject,
        'message':message
    },
    success :function(response){
        console.log(response);
    },
    error:function(error){
        $("#status").append(<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>)
    }
})


$(document).ready(function () {
    $("#from1").validate(
        {
            rules:
            {
                fnm:
                {
                    required:true ,
                },
               lnm:
               {
                  required:true,
               },
               nom:
               {
                required:true,
                maxlength:10,
                minlength:10,
               },
               email:
               {
                required:true,
                email:true,
               },
            },
            messages:
            {
                fnm:
                {
                    required: ' Enter The First Name',
                },
                lnm:
                {
                    required: ' Enter The Last Name',
                },
                nom:
                {
                    required: ' Enter The Number ',
                },
                email:
                {
                    required:'Enter the Email id',
                    email:'valid email'  
                },
                
        },
     });
});


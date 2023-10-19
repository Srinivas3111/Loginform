
         function myFunction() 
         {
            alert("right side of webpage")
         } 
        
        function validform()
        {
            var email=document.form1.email.value;
            var password=document.form1.password.value;
            
            
            if(password.length<6)
            {  
                alert("Password must be at least 6 characters long.");  
                return false;
            }
            else
            {
              return True;
            }

            var regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            if(regx.text(email))
            {
                return true;
            }
            else
            {
                alert("incorrect !email")
                return false;
            }
          }

     

document.addEventListener("DOMContentLoaded", function() 
    {
      const textContainer = document.querySelector(".text-container");
      const nameElement = document.querySelector(".name");

      // Function to stop the animation after a delay (2000 milliseconds)
      function stopAnimation()
      {
        nameElement.style.animation = "none";
      }

      // Call the stopAnimation function after a delay (2000 milliseconds)
      setTimeout(stopAnimation, 2000);
    });


    
  
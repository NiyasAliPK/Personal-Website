
const scriptURL = 'https://script.google.com/macros/s/AKfycbyx9c0hjYVaMskbzLOQa8nIO7MAnKmZR0NaelgxYlLyA26gJgSk2Jjv8W-xxA3QScOJ0g/exec'
        const forms = document.forms['googleSheet']
      
        forms.addEventListener('submit', e => {
            console.log('hai');
            let a=document.forms.googleSheet.name.value;
            if(a=="")
            {
                alert("Enter name");
                return false
               
            }
            else if(a.length<3)
            {
                alert("Name should be more than 2 letters.");
                return false
               
            }
            let b=document.forms.googleSheet.email.value;
            if(b=="")
            {
                alert("Email field cannnot be empty");
                return false
                
            }
            var atPos=b.indexOf("@");
            var dotPos=b.lastIndexOf(".");
            if(atPos<1 || dotPos<atPos+2 || dotPos+2>=b.length)
            {
                alert("Enter a Valid Email")
                return false
               
            }

            let c=document.forms.googleSheet.subject.value;
            if(c==""){
                alert('Please enter a subject');
                return false
            }
            if(c<=3){
                alert('Please enter a valid subject')
                return false
            }
            let d=document.forms.googleSheet.message.value
            if(d==""){
                alert('Please enter a message')
                return false
            }
            if(d<=3){
                alert('Please enter a valid message')
                return false
            }
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(forms)})
            .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
            .catch(error => console.error('Error!', error.message))
            
        
        })
function Validation(){

const form = document.querySelector('google-sheet')
const n = document.querySelector('#name')
const e = document.querySelector('#email')
const s = document.querySelector('#subject')
const me = document.querySelector('#message')
const suc=0

    // e.preventDefault()
    var count=0;
    const atposition=m.value.indexOf("@");
    const dotposition=m.value.lastIndexOf(".");

    if(n.value==''){
        alert('please enter your name')
        count++
        return false
    }
    if(n.value<3){
        alert('please enter a valid name')
        count++
        return false
    }
    if(count.value==0){
        suc=1;
        
    }
}


// const scriptURL = 'https://script.google.com/macros/s/AKfycbyx9c0hjYVaMskbzLOQa8nIO7MAnKmZR0NaelgxYlLyA26gJgSk2Jjv8W-xxA3QScOJ0g/exec'
//         const form2 = document.forms['google-sheet']
      
//         form2.addEventListener('submit', e => {
//           e.preventDefault()
//           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//             .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//             .catch(error => console.error('Error!', error.message))
//         })
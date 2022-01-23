var form=document.querySelector('.form')

console.log(form)

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    
    localStorage.setItem("userName",e.target.name.value);
    localStorage.setItem("userEmail",e.target.email.value);
    localStorage.setItem("userPhoneNo",JSON.stringify(e.target.phoneno.value.toString));
    localStorage.setItem("userDateTime",e.target.datetime.value);

    
  
});



// function onsignup(event) {

//     event.preventDefault();

//     console.log(event.target.name.value)
//     console.log(event.target.email.value)
//     console.log(event.target.phoneno.value)
//     console.log(event.target.datetime.value)

    

// }

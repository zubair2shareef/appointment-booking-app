var form=document.querySelector('.form')

console.log(form)

form.addEventListener('submit', (e)=>{
    e.preventDefault();


    let userDetails={
        userName:e.target.name.value,
        userEmail:e.target.email.value,
        userPhoneno:e.target.phoneno.value,
        userDateTime:e.target.datetime.value

    };
    console.log(userDetails);
    localStorage.setItem('userData',JSON.stringify(userDetails));

    
    // localStorage.setItem("userName",e.target.name.value);
    // localStorage.setItem("userEmail",e.target.email.value);
    // localStorage.setItem("userPhoneNo",JSON.stringify(e.target.phoneno.value.toString));
    // localStorage.setItem("userDateTime",e.target.datetime.value);

    
  
});



// function onsignup(event) {

//     event.preventDefault();

//     console.log(event.target.name.value)
//     console.log(event.target.email.value)
//     console.log(event.target.phoneno.value)
//     console.log(event.target.datetime.value)

    

// }

let show=document.querySelector('.showdetails')

show.classList.contains("Name").innerHTML="fsdf"
let saaa=show.getElementsByTagName("li");


//showing data on frontend


var getData=JSON.parse(localStorage.getItem('userData'))

saaa.Name.innerHTML=getData.userName
saaa.Email.innerHTML=getData.userEmail
saaa.Phoneno.innerHTML=getData.userPhoneno
saaa.Date.innerHTML=getData.userDateTime

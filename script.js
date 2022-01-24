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
    localStorage.setItem(`userData${e.target.email.value}`,JSON.stringify(userDetails));

    showUserOnScreen(userDetails);

    
  
});



function showUserOnScreen(obj){
    let parent=document.querySelector('.showdetails')
    const li=`${obj.userName} ,${obj.userEmail},${obj.userPhone} `
    parent.innerHTML=parent.innerHTML+li
}


document.addEventListener('DOMContentLoaded', function () {
    let data=localStorage
    
    Object.keys(localStorage).forEach((key) => {
        
        var user=JSON.parse(localStorage.getItem(key));
        console.log(user)
        showUserOnScreen(user)
        
    });
   
});




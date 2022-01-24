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
    localStorage.setItem(e.target.email.value,JSON.stringify(userDetails));

    showUserOnScreen(userDetails);

    
  
});



function showUserOnScreen(obj){
    let parent=document.querySelector('.showdetails')

    const dell='<button class="delete">delete</button>'
    const edit='<button class="edit">edit</button>'
    const li=`<li value="${obj.userEmail}">${obj.userName} ,${obj.userEmail},${obj.userPhone}${dell} ${edit}</li> `
  
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


const odelete=document.querySelector('.showdetails');
if(odelete){
    
    odelete.addEventListener('click',ondeleteAndEdit)
}


function ondeleteAndEdit(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        id=e.target.parentElement.getAttribute("value")
        localStorage.removeItem(id)
        var prnt=e.target.parentElement;
        odelete.removeChild(prnt)

        ////stuck here
     }


     //for edit 
     else if(e.target.classList.contains('edit')){
        id=e.target.parentElement.getAttribute("value")
        const data=JSON.parse(localStorage.getItem(id));
        
        form.children[1].value=data.userName
        form.children[3].value=data.userEmail
        form.children[5].value=data.userPhoneno
        form.children[7].value=data.userDateTime

      
        var prnt=e.target.parentElement;
        odelete.removeChild(prnt)

     }
}


//for edit 


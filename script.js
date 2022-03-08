var form=document.querySelector('.form')


url="https://crudcrud.com/api/81090975ce674072b2e0f070b8fd85a5"

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
    axios.post(`${url}/appoitment`,userDetails)
    .then(res=>{
        console.log(res)
        showUserOnScreen(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
    // localStorage.setItem(e.target.email.value,JSON.stringify(userDetails));

    // showUserOnScreen(userDetails);

    
  
});



function showUserOnScreen(obj){
    let parent=document.querySelector('.showdetails')

    const dell='<button class="delete">delete</button>'
    const edit='<button class="edit">edit</button>'
    const li=`<li value="${obj._id}">${obj.userName} ,${obj.userEmail},${obj.userPhone}${dell} ${edit}</li> `
  
    parent.innerHTML=parent.innerHTML+li
}
l=['dsfsd','fsdf','sfsd']
l.forEach((ee)=>{
    console.log(ee);
})

document.addEventListener('DOMContentLoaded', function () {

    axios.get(`${url}/appoitment`)
    .then(res=>{
        console.log(res.data)
        for(var i=0;i<res.data.length;i++){
            showUserOnScreen(res.data[i]);
            console.log(res.data)
        }
    })




    // let data=localStorage
    
    // Object.keys(localStorage).forEach((key) => {
        
    //     var user=JSON.parse(localStorage.getItem(key));
    //     console.log(user)
    //     showUserOnScreen(user)
        
    // });
   
});


const odelete=document.querySelector('.showdetails');
if(odelete){
    
    odelete.addEventListener('click',ondeleteAndEdit)
}


function ondeleteAndEdit(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        id=e.target.parentElement.getAttribute("value")
        axios.delete(`${url}/appoitment/${id}`)
        console.log(e.target.parentElement)
      //  localStorage.removeItem(id)
        var prnt=e.target.parentElement;
       odelete.removeChild(prnt)

        ////stuck here
     }


     //for edit 
     else if(e.target.classList.contains('edit')){
        id=e.target.parentElement.getAttribute("value")
        axios.get(`${url}/appoitment/${id}`).then(res=>{
            data=res.data
            
            form.children[1].value=data.userName
            form.children[3].value=data.userEmail
            form.children[5].value=data.userPhoneno
            form.children[7].value=data.userDateTime
            axios.delete(`${url}/appoitment/${id}`)
        })
        

        var prnt=e.target.parentElement;
        odelete.removeChild(prnt)

     }
}


//for edit 


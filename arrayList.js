    
    var isFormShown=false;
    var isCloseForm=false;
    var formContainer=document.getElementById("friend-form");
    var friendList = document.getElementById("friendList");
    var friends=["Pooja","Poonam","monika","Manisha","soni","shital"];
    const formbtn = document.getElementById('addBtn');
    var Fname=document.getElementById("name");
    var friendForm=document.getElementById("friend-form");
   
    friendForm.addEventListener("submit",(e)=>{
     e.preventDefault();
      console.log("form submitted");
      var li=document.createElement('li');
        li.innerHTML=Fname.value;
        li.classList.add('list');
        friendList.appendChild(li);

      console.log(Fname.value);
   });

    formbtn.addEventListener('click',showForm);

       var colseform=document.getElementById("closeForm");
       colseform.addEventListener('click',colseForm);
       
    for (i = 0; i <= friends.length-1; i++) {
        var li = document.createElement('li');    
        li.innerHTML = friends[i];      
        li.classList.add('list');
        friendList.appendChild(li);
    }
   
    function showForm(){
     isFormShown=!isFormShown;
     if(!isFormShown){
         document.getElementById('friend-form').style.display="none";
     }else{
         document.getElementById('friend-form').style.display="block";
     }
    }
    function colseForm(){
        isCloseForm=!isCloseForm;
        if(!isCloseForm){
            formContainer.style.setProperty('display','none');
        }else{
            formContainer.style.setProperty('display','block');
       
        }

        
    }

    
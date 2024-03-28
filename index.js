

function myfunc(){
    fname=document.getElementById('inputName').value ;
    age=document.getElementById('inputAge').value ;
    area=document.getElementById('inputArea').value ;
    gender=document.getElementById('inputGender').value ;
    
    document.querySelector('.outputcont').classList.toggle("open");
   
   
 
    if(age>=18){
        document.getElementById('output').innerHTML="QUALIFIED✅"
        document.getElementById('output').style.color="white"
        document.getElementById('output').style.background="green"
        document.getElementById('p1').innerHTML=`Hello ${fname} you are ${age} years,you are eligible to vote`;
        document.querySelector('.close').style.position="absolute"
        document.getElementById('output').style.marginTop="30px"
        document.getElementById('output').style.position="relative"
        document.querySelector('.close').style.marginTop="-180px"
         
        
        



    } else{
        document.getElementById('output').innerHTML="UNQUALIFIED"
        document.getElementById('output').style.color="white"
        document.getElementById('output').style.background="red"
        document.getElementById('output').style.marginTop="60px"
        document.getElementById('output').style.position="relative"
        document.querySelector('.close').style.marginTop='-145px'

}





if(!age,!area,!gender.trim()){
    alert("please in the blank space")
    document.querySelector('.outputcont').style.display="none"
    event.preventDefault();
}else{
    document.querySelector('.outputcont').style.display="block"

}

if(fname==""){
    alert("please enter your name")
}

}




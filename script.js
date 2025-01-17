let box=document.querySelector('.myinput')
const btn=document.querySelector('.btns')



// JS FOR CLEAR BUTTON
let clear=document.querySelector('.clr')

clear.addEventListener('click',()=>{
        box.value=" "
})



// JS FOR EQUAL TO BUTTON 
let equal=document.querySelector('.btnequal')
 
  equal.addEventListener('click',()=>{

    box.value=eval(box.value)
    
  })




// JS FOR ALL BUTTONS BY EVENT DELEGATION
btn.addEventListener('click',(e)=>{
      
   
    if(e.target.tagName==='BUTTON'){
        box.value+=e.target.textContent
        
    }
    

 
})



// JS FOR BACKSPACE BUTTON
let back=document.querySelector('.bck')

back.addEventListener('click',()=>{
    box.value=box.value.slice(0,-1)
})


// JS FOR TOGGLE 

const showbtn=document.querySelector('.calcbtn')
const box1=document.querySelector('.container')
// let check=0;
// showbtn.addEventListener('click',()=>{
   
//   box1.classList.toggle('show')
   
  
//   if(check==0){
//     showbtn.innerHTML='Hide'
//     check=1
//   } else{
//     showbtn.innerHTML='Display'
//     check=0
//   }

// })


//creat to array...
const Quiz=[{Q:"Which of the following shapes is a horse?"},
{Q:"Which of the following shapes is a bird?"},
{Q:"What is the largest animal on land and sea?"},
{Q:"What is the smartest animal?"},
{Q:"What is the dumb animal that does not hear a sound?"}]

//querySelector("body") 
const body=document.querySelector("body")
//creat (div)for Qustion 
const Qustion=document.createElement("div")
body.append(Qustion)
//creat (div)for Answer 
const Answer=document.createElement("div")
body.append(Answer)
//creat (div)for choise
const Choise=document.createElement("div")
body.append(Choise)
const reuslt=document.createElement("div")
body.append(reuslt)
//useing function 
let index=0;

const Quiz_1=()=>{
   
    if(index>4){
        return reuslt.innerText="reuslt"
        }
  
   // Qustion.innerText=""  

    // Quiz.forEach((elem,i)=>{
   
       const p_1=document.createElement("p")
       Qustion.append(p_1)
      
       p_1.innerText=Quiz[index].Q
    //  p_1.innerText=elem.Q
    
    // })
    
}
// const Quiz_2=()=>{
//     Quiz.forEach((elem,i)=>{
        
//         p_1.innerText=Object.values(elem.Q2).join("")
//     })
// }
console.log(Quiz_1());
 const next=document.createElement("button")
body.append(next)
 next.innerText="next"



next.addEventListener("click",()=>{
    
    const p_1=document.querySelector("p")
    p_1.innerText=""
       //Qustion.append(p_1)
       index++;
      
      
    Quiz_1()
    
})

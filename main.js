//creat to array...
const Quiz=[{Q:"Which of the following shapes is a horse?",
answer:["a","b","c"]},
{Q:"Which of the following shapes is a bird?",
answer:["c","b","a"]},
{Q:"What is the largest animal on land and sea?",
answer:["1","2","3"]},
{Q:"What is the smartest animal?",
answer:["a","b","c"]},
{Q:"What is the dumb animal that does not hear a sound?",
answer:["a","b","c"]}]

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
//creat div for reuslt
const reuslt=document.createElement("div")
body.append(reuslt)
 const p_Q=document.createElement("p")
 Qustion.append(p_Q)
//  
 
let index=0;
 //index =0 global value
//useing function 
const Quiz_1=()=>{
   
      if(index>4){ //fun index>4  return reuslt 
          return reuslt.innerText="reuslt"
         }

        const p_Q=document.querySelector("p")
      
       p_Q.innerText=Quiz[index].Q  

       Quiz[index].answer.forEach((elem,i)=>{
        const ans=document.createElement("button")
        Answer.append(ans)

        ans.innerText=elem

    })
        
}
console.log(Quiz_1());
//creat button next 
const next=document.createElement("button")
body.append(next)
 next.innerText="next"
 //use addEventListener function
next.addEventListener("click",()=>{
    const p_Q=document.querySelector("p")
    const ans=document.querySelector("button")
    p_Q.innerText=""
    ans.innerText=""

       //Qustion.append(p_1)
       
       index++;


       Quiz_1()
});

//useing function answer
// const answer_1=()=>{
//     //use forech 
  

//   })
   
    
// }
//console.log(answer_1());


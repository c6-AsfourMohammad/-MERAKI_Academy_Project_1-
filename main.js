//creat to array...
const Quiz=[{Q:"Which of the following shapes is a horse?",
answer:["https://img.freepik.com/premium-vector/illustration-cute-giraffe-avatar_79416-108.jpg",
"https://img.freepik.com/premium-vector/illustration-cute-cow-avatar_79416-102.jpg",
"https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-horse-avatar-with-a-yellow-background-png-image_1770352.jpg"],
Cor:"https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-horse-avatar-with-a-yellow-background-png-image_1770352.jpg"},
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
const Coreact=document.createElement("div")
body.append(Coreact)
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
//useing function answer

       Quiz[index].answer.forEach((elem,i)=>{
        const ans=document.createElement("button")
        Answer.append(ans)
        const img=document.createElement("img")
        ans.append(img)
        img.src=elem

        img.innerText=elem
        img.addEventListener("click",()=>{
            if(Quiz[index].answer[i]===Quiz[index].Cor){
               ans.style.backgroundColor="green";
            }else{
                ans.style.backgroundColor="red";
            }
            
           
        })

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
    Answer.innerText=""

       //Qustion.append(p_1)
       
       index++;


       Quiz_1()
});

// const answer_1=()=>{
//     //use forech 
  

//   })
   
    
// }
//console.log(answer_1());

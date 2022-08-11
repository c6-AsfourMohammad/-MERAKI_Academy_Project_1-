//creat to array...
const Quiz=[{Q1:"Which of the following shapes is a horse?"}]
const Quiz2=[{Q2:"Which of the following shapes is a bird?"}]

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
//useing function 
const Quiz_1=()=>{
    Qustion.innerText=""  

    Quiz.forEach((elem,i)=>{
   
      const p_1=document.createElement("p")
      Qustion.append(p_1)
     p_1.innerText=elem.Q1

    })
   
}
console.log(Quiz_1());
 const next=document.createElement("button")
body.append(next)
 next.innerText="next"

 const Quiz_2=()=>{
     Quiz2.forEach((elem,i)=>{ 
    
        const p_1=document.createElement("p")
      Qustion.append(p_1)
     p_1.innerText=elem.Q2
      
     })
 }

next.addEventListener("click",Quiz_2)

const Quiz=[{Q1:"Which of the following shapes is a horse?"},
{Q2:"Which of the following shapes is a bird?"},
{Q3:"What is the largest animal on land and sea?"},
{Q4:"What is the smartest animal?"},
{Q5:"What is the dumb animal that does not hear a sound?"}]
const body=document.querySelector("body")
const Qustion=document.createElement("div")
body.append(Qustion)

const Answer=document.createElement("div")
body.append(Answer)
const Choise=document.createElement("div")
body.append(Choise)
const Quiz_1=()=>{
    Quiz.map((elem,i)=>{
    //  const p_1=document.createElement("p")
    //  Qustion.append(p_1)
     Qustion.innerText=elem.i
    })
   
}
console.log(Quiz_1());



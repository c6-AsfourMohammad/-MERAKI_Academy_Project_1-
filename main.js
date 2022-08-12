//creat to array...
const Quiz=[{Q:"Which of the following shapes is a horse?",
answer:["https://img.freepik.com/premium-vector/illustration-cute-giraffe-avatar_79416-108.jpg",
"https://img.freepik.com/premium-vector/illustration-cute-cow-avatar_79416-102.jpg",
"https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-horse-avatar-with-a-yellow-background-png-image_1770352.jpg"],
Cor:"https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-horse-avatar-with-a-yellow-background-png-image_1770352.jpg"},
{Q:"Which of the following shapes is a bird?",
answer:["https://image.shutterstock.com/image-vector/bird-flying-cartoon-character-parrot-260nw-1953196465.jpg",
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b4593d73-f662-4862-a3d3-b7a0a40924cd/d35tms1-7a85d1ae-44b5-45b3-b356-7708064407bb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I0NTkzZDczLWY2NjItNDg2Mi1hM2QzLWI3YTBhNDA5MjRjZFwvZDM1dG1zMS03YTg1ZDFhZS00NGI1LTQ1YjMtYjM1Ni03NzA4MDY0NDA3YmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bWquywAxgtt25JJ-3bVg1MpbfKMQB9S1kfKAXsOYnjI",
"https://thumbs.dreamstime.com/b/cute-bat-funny-face-membranous-wings-isolated-white-background-halloween-cartoon-happy-animal-character-emotion-comic-231292957.jpg"],
Cor:"https://image.shutterstock.com/image-vector/bird-flying-cartoon-character-parrot-260nw-1953196465.jpg"},
{Q:"What is the largest animal on land and sea?",
answer:["https://static.vecteezy.com/system/resources/previews/005/294/056/original/cute-puffer-fish-cartoon-illustration-sea-animal-concept-free-vector.jpg",
"https://occ-0-114-769.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUM_SHnqybnOntDKkQvT5WVL7MHA7-HGzKD8Lryk1nbhzbNgagg4UaI8kgY2HFpoBcbUBcNyFj9dEKXKvKuaMcDf8ZSSAih3FKvG.jpg?r=b83",
"https://illustoon.com/photo/thum/3413.png"],
Cor:"https://illustoon.com/photo/thum/3413.png"},
{Q:"What is the smartest animal?",
answer:["https://i.pinimg.com/originals/cd/e0/ce/cde0ce35f67a99c3657a02b722101454.jpg",
"https://i.pinimg.com/736x/41/29/4f/41294fb252e999c663af420be665af54.jpg",
"https://img.freepik.com/premium-vector/cute-cat-cartoon-sitting_194935-99.jpg?w=2000"],
Cor:"https://i.pinimg.com/736x/41/29/4f/41294fb252e999c663af420be665af54.jpg"},
{Q:"What is the dumb animal that does not hear a sound?",
answer:["https://img.freepik.com/premium-vector/illustration-cute-giraffe-avatar_79416-108.jpg",
"https://img.freepik.com/premium-vector/happy-ant-cartoon_49499-28.jpg?w=2000",
"https://freedesignfile.com/upload/2017/08/lion-cartoon-vector.jpg"],
Cor:"https://img.freepik.com/premium-vector/illustration-cute-giraffe-avatar_79416-108.jpg"}]
const result_1=[]
//querySelector("body") 
const body=document.querySelector("body")
//creat (div)for Qustion 
const Qustion=document.createElement("div")
body.append(Qustion)
Qustion.className="Qustion"
//creat (div)for Answer 
const Answer=document.createElement("div")
body.append(Answer)
Answer.className="Answer"
//creat (div)for choise
const Coreact=document.createElement("div")
body.append(Coreact)
Coreact.className="Coreact"

//creat div for reuslt
const reuslt=document.createElement("div")
body.append(reuslt)
reuslt.className="reuslt"

const res=document.createElement("p")
reuslt.append(res)

const p_Q=document.createElement("p")
Qustion.append(p_Q)

let index=0;
 //index =0 global value
//useing function 
const Quiz_1=()=>{
if(index>4){ //fun index>4  return reuslt 
return reuslt.innerText=result_1.length , res.innerText="result" ;
}

const p_Q=document.querySelector("p")
      
p_Q.innerText=Quiz[index].Q  
//useing function answer
 Quiz[index].answer.forEach((elem,i)=>{ //foreach img 
//creat button in div
 const ans=document.createElement("button")
 Answer.append(ans)
//creat img in button 
const img=document.createElement("img")
ans.append(img)
//to link the picture use src
img.src=elem
img.innerText=elem
//to make a photo button
img.addEventListener("click",()=>{
    //to make a photo use fuction 
if(Quiz[index].answer[i]===Quiz[index].Cor){
ans.style.backgroundColor="green"; //use background color green if correct
//.push in array Empty For every correct answer
result_1.push(Quiz[index].Cor) 
}else{
ans.style.backgroundColor="red"; //use background color green if worng
}    
})
})
}
console.log(Quiz_1());
//creat button next 
const next=document.createElement("button")
body.append(next)
 next.innerText="Next"
 next.style.boxShadow= "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
 next.className="next"
 //use addEventListener function next button
next.addEventListener("click",()=>{
    const p_Q=document.querySelector("p")
    const ans=document.querySelector("button")
    p_Q.innerText=""
    Answer.innerText=""
       index++;
       Quiz_1()
});
 //creat button back

const back=document.createElement("button")
 body.append(back)
 back.innerText="Back"
 back.style.boxShadow= "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
 //use addEventListener function back button

 back.addEventListener("click",()=>{
    
    const p_Q=document.querySelector("p")
    const ans=document.querySelector("button")
    p_Q.innerText=""
    Answer.innerText=""
       index--;
       Quiz_1()
    
 })

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

//const new type Qustion more 
const Quiz_flag=[{Q:"Which of them is the flag of Tunisia?",
answer:["https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png",
"https://assets.wam.ae/uploads/2017/08/47380434082500.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/2000px-Flag_of_Algeria.svg.png"],
Cor:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png"},
{Q:"Which of them is the flag of Lebanon?",
answer:["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/800px-Flag_of_the_Comoros.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/2000px-Flag_of_Lebanon.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/640px-Flag_of_Syria.svg.png"],
Cor:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/2000px-Flag_of_Lebanon.svg.png"},
{Q:"Which of them is the flag of Yemen?",
answer:["https://www.almrsal.com/wp-content/uploads/2019/03/%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-%D8%AD%D8%A7%D9%84%D9%8A%D8%A7.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2000px-Flag_of_Egypt.svg.png",
"https://alamphoto.com/wp-content/uploads/2018/01/Flag-of-Yemen-6-623x415.jpg"],
Cor:"https://alamphoto.com/wp-content/uploads/2018/01/Flag-of-Yemen-6-623x415.jpg"},
{Q:"Which of them is the flag of Libya?",
answer:["https://cdn.sotor.com/thumbs/fit630x300/52042/1596976259/%D8%B9%D9%84%D9%85_%D9%84%D9%8A%D8%A8%D9%8A%D8%A7:_%D8%A3%D9%84%D9%88%D8%A7%D9%86%D9%87_%D9%88%D9%85%D8%B9%D8%A7%D9%86%D9%8A%D9%87%D8%A7%D8%8C_%D9%88%D8%B3%D8%A8%D8%A8_%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1_%D9%87%D8%B0%D8%A7_%D8%A7%D9%84%D8%B4%D9%83%D9%84_%D9%84%D9%87.jpeg",
"https://e3arabi.com/wp-content/uploads/2019/12/flag-of-turkey-3036191_1920.jpg",
"https://e3arabi.com/wp-content/uploads/2019/12/flag-1488005_1920.jpg"],
Cor:"https://cdn.sotor.com/thumbs/fit630x300/52042/1596976259/%D8%B9%D9%84%D9%85_%D9%84%D9%8A%D8%A8%D9%8A%D8%A7:_%D8%A3%D9%84%D9%88%D8%A7%D9%86%D9%87_%D9%88%D9%85%D8%B9%D8%A7%D9%86%D9%8A%D9%87%D8%A7%D8%8C_%D9%88%D8%B3%D8%A8%D8%A8_%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1_%D9%87%D8%B0%D8%A7_%D8%A7%D9%84%D8%B4%D9%83%D9%84_%D9%84%D9%87.jpeg"},
{Q:"Which of them is the flag of Oman?",
answer:["https://www.saaih.com/files/styles/gallery/public/gallery/%D8%A7%D9%84%D8%A7%D8%B1%D8%AF%D9%86/Flag_of_Jordan.svg_.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/280px-Flag_of_the_People%27s_Republic_of_China.svg.png",
"https://cdn.sotor.com/thumbs/fit630x300/52014/1596976210/%D8%B9%D9%84%D9%85_%D8%B9%D9%8F%D9%85%D8%A7%D9%86:_%D8%A3%D9%84%D9%88%D8%A7%D9%86%D9%87_%D9%88%D9%85%D8%B9%D8%A7%D9%86%D9%8A%D9%87%D8%A7%D8%8C_%D9%88%D8%B3%D8%A8%D8%A8_%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1_%D9%87%D8%B0%D8%A7_%D8%A7%D9%84%D8%B4%D9%83%D9%84_%D9%84%D9%87.jpeg"],
Cor:"https://cdn.sotor.com/thumbs/fit630x300/52014/1596976210/%D8%B9%D9%84%D9%85_%D8%B9%D9%8F%D9%85%D8%A7%D9%86:_%D8%A3%D9%84%D9%88%D8%A7%D9%86%D9%87_%D9%88%D9%85%D8%B9%D8%A7%D9%86%D9%8A%D9%87%D8%A7%D8%8C_%D9%88%D8%B3%D8%A8%D8%A8_%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1_%D9%87%D8%B0%D8%A7_%D8%A7%D9%84%D8%B4%D9%83%D9%84_%D9%84%D9%87.jpeg"}]
const result_1=[]
//querySelector("body") 
const body=document.querySelector("body")
//creat (div)for header
const header=document.createElement("div")
 body.append(header)
 
 //creat div end
 const end=document.createElement("div")
 body.append(end)
 //creat dit timer
 const timer=document.createElement("div")
 body.append(timer)
//creat (div)for Qustion 
const Qustion=document.createElement("div")
// body.append(Qustion)
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
//creat res_butt  header name
 const res_butt=document.createElement("p")
 reuslt.append(res_butt)
//creat res
const res=document.createElement("h2")
reuslt.append(res)
//creat p_Q
const p_Q=document.createElement("p")
Qustion.append(p_Q)
let index=0;//index =0 global value
//creat name header web
const nameQuiz=document.createElement("h1") 
 header.append(nameQuiz)
 nameQuiz.innerHTML=`<span style="color:red ">K</span><span style="color:rgb(89, 224, 241)">i</span><span style="color:rgb(255, 145, 0)">d</span><span style="color:rgb(128, 29, 173)">s</span>
 <span style="color:rgb(236, 117, 211) ">Q</span> <span style="color:rgb(255, 145, 0) ">u</span> <span style="color:rgb(89, 224, 241) ">i</span> <span style="color:red ">z</span>`
nameQuiz.className="nameQuiz"

//creat button for header
const headerButton=document.createElement("button")
header.append(headerButton)
headerButton.innerText="Start "
headerButton.className="Start"

const  Home=headerButton.addEventListener("click",()=>{
   
//creat more choise in the Qustion (animal / flag)
//creat button animal 
const Animal=document.createElement("button")
header.append(Animal)
Animal.innerText="Animal"
Animal.className="Animal"
//creat button flag
const Flag=document.createElement("button")
header.append(Flag)
Flag.innerText="Flag"
Flag.className="Flag"
Animal.addEventListener("click",()=>{
    body.innerText=""
    
    body.append(Qustion)
    body.append(Answer)
    body.append(end)
    

    const Quiz_1=()=>{
        // Name=document.createElement("h1")
        // body.append(Name)
        // Name.innerText="Hi_Mohammad"
        // Name.className="Name"
        if(index>4){ //fun index>4  return reuslt 
            res.innerText=  "Result:"+result_1.length 
          Qustion.append(res)
        }
        
        const p_Q=document.querySelector("p")
              
        p_Q.innerText=Quiz[index].Q  
        //useing function answer
         Quiz[index].answer.forEach((elem,i)=>{ //foreach img 
        //creat button in div
         const ans=document.createElement("button")
         Answer.append(ans)
         ans.className="ans"
        //creat img in button 
        const img=document.createElement("img")
        ans.append(img)
        ans.className="imgbutton"
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
        const playAgain=document.createElement("button")
end.append(playAgain)
playAgain.innerText="Play Again"
playAgain.className="again"  
playAgain.addEventListener("click",()=>{
    body.innerText=""
    
    body.append(header)
      })     
         
        //console.log(Quiz_1());
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
        
        
   console.log(Quiz_1());
   
  
  
 })


 
//useing button for play again rest game
//============================================================================================================================//
//============================================================================================================================//
//============================================================================================================================//


Flag.addEventListener("click",()=>{
    body.innerText=""
    body.append(Qustion)
    body.append(Answer)
    body.append(end)
    
    const Quiz_2=()=>{
        // Name.innerText=""
        // Name=document.createElement("h1")
        // body.append(Name)
        // Name.innerText="Hi_Mohammad"
        // Name.className="Name"

        if(index>4){ //fun index>4  return reuslt 
            res.innerText=  "Result:"+result_1.length 
          Qustion.append(res)
        }
        
        const p_Q=document.querySelector("p")
              
        p_Q.innerText=Quiz_flag[index].Q  
        //useing function answer
        Quiz_flag[index].answer.forEach((elem1,ii)=>{ //foreach img 
        //creat button in div
         const ans=document.createElement("button")
         Answer.append(ans)
         ans.className="ans"
        //creat img in button 
        const img=document.createElement("img")
        ans.append(img)
        ans.className="imgbutton"
        //to link the picture use src
        img.src=elem1
        img.innerText=elem1
        //to make a photo button
        img.addEventListener("click",()=>{
            //to make a photo use fuction 
        if(Quiz_flag[index].answer[ii]===Quiz_flag[index].Cor){
        ans.style.backgroundColor="green"; //use background color green if correct
       
        //.push in array Empty For every correct answer
        result_1.push(Quiz_flag[index].Cor) 
        }else{
        ans.style.backgroundColor="red"; //use background color green if worng
        }    
        })
        })
        } 
        const playAgain=document.createElement("button")
        end.append(playAgain)
        playAgain.innerText="Play Again"
        playAgain.className="again"  
        playAgain.addEventListener("click",()=>{
            body.innerText=""
            
            body.append(header)
              })     
        //console.log(Quiz_1());
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
               Quiz_2()
        });
        
        
   console.log(Quiz_2());
   
  
  
 })



})











































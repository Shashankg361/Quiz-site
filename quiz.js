const answers = ['B','A','B','B'];
const form = document.querySelector('.quiz-form');
const Dscore = document.querySelector('.score')

form.addEventListener('submit', e =>{
    e.preventDefault();

    const Qanswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    let score=0;

    answers.forEach((ans,index)=>{
        if(ans===Qanswer[index])
        {
            score+=25;
        }

    });

    window.scrollTo(0,0);
    Dscore.classList.remove('d-none');
    

    let output= 0;
    const timer = setInterval(()=>
    {
        Dscore.querySelector('.precent').textContent = ` ${output}%`;
        if(output === score)
        {
            clearInterval(timer);
        }
        else{
            output++;
        }
    },10);

    
});
/*setTimeout(()=>{
    alert('done');
},5000);*/
/*
let i=0;

const timer = setInterval(()=>{
    console.log('hello');
    i++;
    if(i===4){
        clearInterval(timer);
    }
},1000);*/



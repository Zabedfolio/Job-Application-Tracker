 let rejectedList = [];
 let interviewList = [];
 
 let total = document.getElementById('total-count');
 let interviewCount = document.getElementById('interview-count');
 let rejectedCount = document.getElementById('rejected-count');
 let countJobs = document.getElementById('count-jobs');

 const allFilterBtn = document.getElementById('all-filter-btn');
 const interviewFilterBtn = document.getElementById('interview-filter-btn');
 const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

 const allCardSection = document.getElementById('all-cards');
//  console.log(allCardSection.children.length)

const mainContainer = document.querySelector('main');

 function calculateCount(){
    total.innerText = allCardSection.children.length;
    // countJobs.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
 }

calculateCount();

function toggleStyle(id){
    // console.log("click",id);

    // all btn color same
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')


    allFilterBtn.classList.add('bg-white', 'text-[#64748B]')
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]')
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]')

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-[#64748B]')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

}

mainContainer.addEventListener('click', function(event){
    // console.log(event.target.parentNode.parentNode)
    const parentNode = event.target.parentNode.parentNode;
    const cardH = parentNode.querySelector('.card-h').innerText;
    const cardP = parentNode.querySelector('.card-p').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;
    // console.log(cardH, cardP, jobType, status, notes)
    const cardInfo ={
        cardH,
        cardP,
        jobType,
        status,
        notes
    }

    // console.log(cardInfo);
    
})
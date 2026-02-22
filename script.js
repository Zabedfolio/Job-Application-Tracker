let rejectedList = [];
let interviewList = [];

let total = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let countJobs = document.getElementById('count-jobs');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const filteredSection = document.getElementById('filtered-section');

const allCardSection = document.getElementById('all-cards');
//  console.log(allCardSection.children.length)

const mainContainer = document.querySelector('main');

function calculateCount() {
    total.innerText = allCardSection.children.length;
    // countJobs.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
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

mainContainer.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('interview-btn'));
    if (event.target.classList.contains('interview-btn')) {
        // console.log(event.target.parentNode.parentNode)
        const parentNode = event.target.parentNode.parentNode;
        const cardH = parentNode.querySelector('.card-h').innerText;
        const cardP = parentNode.querySelector('.card-p').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        // console.log(cardH, cardP, jobType, status, notes)
        const cardInfo = {
            cardH,
            cardP,
            jobType,
            status,
            notes
        }

        // console.log(cardInfo);

        const interviewExist = interviewList.find(item => item.cardH === cardInfo.cardH);
        if (!interviewExist) {
            interviewList.push(cardInfo);
        }

        renderInterview();
        // console.log(interviewList)
    }
})





function renderInterview() {
    filteredSection.innerHTML = '';
    for (let interview of interviewList) {
        console.log(interview)
        let div = document.createElement('div');
        div.className = 'full-card p-6 bg-white border border-[#F1F2F4] rounded-lg'
        div.innerHTML = `
        <div>
                <div class="flex justify-between">
                    <div>
                        <h2 class="text-[#002C5C] font-semibold text-[18px] pb-1 card-h">Mobile First Corp</h2>
                        <p class="text-[#64748B] card-p">React Native Developer</p>
                    </div>
                    <button id="delete-btn" class="w-10 h-10 flex items-center justify-center border rounded-full border-[#F1F2F4]"><i class="fa-regular fa-trash-can text-[#64748B]"></i></button>
                </div>
                <div class="py-5 text-[#64748B]">
                    <p class="job-type">Remote  • Full-time  • $130,000 - $175,000</p>
                </div>
                <div class="mb-5">
                    <p class="status py-2 px-3 rounded-sm bg-[#EEF4FF] w-[130px] font-medium mb-2">NOT APPLIED</p>
                    <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                </div>
                <div class="flex gap-2">
                    <button class="border border-[#10B981] text-[#10B981] font-semibold rounded-sm px-3 py-2" id="interview-btn">Interview</button>
                    <button class="border border-[#EF4444] text-[#EF4444] font-semibold rounded-sm px-3 py-2" id="rejected-btn">Rejected</button>
                </div>
            </div>
        `
    }
}
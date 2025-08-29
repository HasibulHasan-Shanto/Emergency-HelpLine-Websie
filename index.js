console.log("Hello, World!");
// document.querySelectorAll("#iconBtn").addEventListener("click", function() {
//     const icon = document.getElementById("icon");
//     let count = parseInt(icon.innerText);
//     count += 1;
//     icon.innerText = count;
// });

const iconBtn = document.querySelectorAll('#iconBtn')
const icon = document.getElementById('icon')
let count = 0
for (const item of iconBtn) {
    item.addEventListener('click', function(){
        count += 1
        icon.innerText = count
    })
}

const callBtns = document.querySelectorAll('#callBtn');
const callCharge = document.getElementById('callCharge');
const historyList = document.getElementById('historyList');
let charge = 100;

callBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if(charge <= 0){
            alert("No balance to make a call");
            return;
        }

        // Reduce charge
        charge -= 20;
        callCharge.innerText = charge;

        // Find clicked card
        const card = btn.closest('.card') || btn.parentElement.parentElement; 
        const title = card.querySelector('#title, #policeTitle, #fireTitle, #ambulanceTitle, #womenTitle, #antiTitle, #electricityTitle, #bracTitle, #railwayTitle')?.innerText || '';
        const number = card.querySelector('#number, #policeNumber, #fireNumber, #ambulanceNumber, #womenNumber, #antiNumber, #ElectricityNumber, #bracNumber, #railwayNumber')?.innerText || '';
        const time = new Date().toLocaleTimeString();
        const historyItem = document.createElement('div');
        historyItem.classList = "p-3 border rounded-lg flex justify-between items-center";

        historyItem.innerHTML = `
            <div>
                <h3 class="font-bold text-[15px]">${title}</h3>
                <p class="text-gray-600">Number: ${number}</p>
            </div>
            <span class="text-sm text-gray-500">${time}</span>
        `;

        historyList.prepend(historyItem);
        alert(`📞 Calling ${title} ${number}...`);
    });
});

// Clear History button
document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    historyList.innerHTML = '';
});


const copyBtn = document.querySelectorAll('#copyBtn')
const copy = document.getElementById('copy')
let copyCount = 0
for (const copyItem of copyBtn){
    copyItem.addEventListener('click', function(){
        copyCount += 1
        copy.innerText = copyCount
        navigator.clipboard.writeText("999");
        alert(`Number copied!`);
        
    })
}

// history clear buttone click korle history clear hoye jabe
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
clearHistoryBtn.addEventListener('click', function(){
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
});


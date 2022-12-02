// get DOM element variables
const dashboard = document.getElementById('dashboard');
const timeData = [];
let currentTimeFrame = 'daily';

// execution
await getJSON();
renderDashboard();
dashboard.addEventListener('click', changeTimeFrame);

// functions
async function getJSON() {
    return fetch('./data.json')
        .then(response => response.json())
        .then(data => timeData.push(...data))
        .catch(error => console.log(error));
}

function renderDashboard() {
    dashboard.innerHTML = '';
    dashboard.innerHTML += generateUserInfo();
    timeData.forEach(data => {
        dashboard.innerHTML += generateTimeDashboard(data, currentTimeFrame);
    });
    setActiveTimeFrame();
}

function changeTimeFrame(e) {
    if (!e.target.dataset.range) return;

    if (e.target.dataset.range === 'daily') {
        currentTimeFrame = 'daily';
        renderDashboard();
    } else if (e.target.dataset.range === 'weekly') {
        currentTimeFrame = 'weekly';
        renderDashboard();
    } else if (e.target.dataset.range === 'monthly') {
        currentTimeFrame = 'monthly';
        renderDashboard();
    }
}

function setActiveTimeFrame() {
    const timeFrames = document.querySelectorAll('[data-range]');
    timeFrames.forEach(timeFrame => {
        if (timeFrame.dataset.range === currentTimeFrame) {
            timeFrame.classList.add('range--selected');
        } else {
            timeFrame.classList.remove('range--selected');
        }
    });
}

function generateUserInfo() {
    return `
    <div class="user">
        <div class="user__info">
        <img src="images/image-jeremy.png" alt="" class="user__img">
        <div>
            <p>Report for</p>
            <h2 class="user__name">Jeremy Robson</h2>
        </div>
        </div>
        <div class="user__time-range">
        <p class="" data-range="daily">Daily</p>
        <p class="" data-range="weekly">Weekly</p>
        <p class="" data-range="monthly">Monthly</p>
        </div>
    </div>
    `;
};

function generateTimeDashboard(data, timeFrame) {
    let range;
    let before;

    if (currentTimeFrame === 'daily') {
        range = data.timeframes.daily;
        before = 'Yesterday';
    } else if (currentTimeFrame === 'weekly') {
        range = data.timeframes.weekly;
        before = 'Last week';
    } else if (currentTimeFrame === 'monthly') {
        range = data.timeframes.monthly;
        before = 'Last month';
    }

    return `
    <div class="dashboard-item ${data.title.toLowerCase()}">
        <img src="./images/icon-${data.title.toLowerCase()}.svg" aria-hidden="true" alt="" class="bg-icon">
        <div class="dashboard-item__content">
            <div class="d-flex">
                <h3 class="dashboard-item__title">${data.title}</h3>
                <a href="#" class="item__link"><img src="./images/icon-ellipsis.svg" alt=""></a>
            </div>
            <div class="d-flex item__time">
                <h2 class="dashboard-item__time">${range.current}hrs</h2>
                <span class="dashboard-item__lastweek">${before} - ${range.previous}hrs</span>
            </div>
        </div>
    </div> 
    `;
}
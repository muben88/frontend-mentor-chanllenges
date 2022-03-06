const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

// work section text
const workCurr = document.querySelector('#work-curr');
const workPrev = document.querySelector('#work-prev');

// play section text
const playCurr = document.querySelector('#play-curr');
const playPrev = document.querySelector('#play-prev');

// study section text
const studyCurr = document.querySelector('#study-curr');
const studyPrev = document.querySelector('#study-prev');

// exercise section text
const exerciseCurr = document.querySelector('#exercise-curr');
const exercisePrev = document.querySelector('#exercise-prev');

// social section text
const socialCurr = document.querySelector('#social-curr');
const socialPrev = document.querySelector('#social-prev');

// self care section text
const selfCareCurr = document.querySelector('#self-care-curr');
const selfCarePrev = document.querySelector('#self-care-prev');

// daily info
daily.addEventListener('click', () => {
    fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            const workObj = data[0].timeframes.daily;
            const playObj = data[1].timeframes.daily;
            const studyObj = data[2].timeframes.daily;
            const exerciseObj = data[3].timeframes.daily;
            const socialObj = data[4].timeframes.daily;
            const selfCareObj = data[5].timeframes.daily;

            
            workCurr.textContent = `${workObj.current}hrs`;
            workPrev.textContent = `Previous - ${workObj.previous}hrs`;

            playCurr.textContent = `${playObj.current}hrs`;
            playPrev.textContent = `Previous - ${playObj.previous}hrs`;

            studyCurr.textContent = `${studyObj.current}hrs`;
            studyPrev.textContent = `Previous - ${studyObj.previous}hrs`;

            exerciseCurr.textContent = `${exerciseObj.current}hrs`;
            exercisePrev.textContent = `Previous - ${exerciseObj.previous}hrs`;

            socialCurr.textContent = `${socialObj.current}hrs`;
            socialPrev.textContent = `Previous - ${socialObj.previous}hrs`;

            selfCareCurr.textContent = `${selfCareObj.current}hrs`;
            selfCarePrev.textContent = `Previous - ${selfCareObj.previous}hrs`;
            
        })
})

// weekly info
weekly.addEventListener('click', () => {
    fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            const workObj = data[0].timeframes.weekly;
            const playObj = data[1].timeframes.weekly;
            const studyObj = data[2].timeframes.weekly;
            const exerciseObj = data[3].timeframes.weekly;
            const socialObj = data[4].timeframes.weekly;
            const selfCareObj = data[5].timeframes.weekly;


            workCurr.textContent = `${workObj.current}hrs`;
            workPrev.textContent = `Previous - ${workObj.previous}hrs`;

            playCurr.textContent = `${playObj.current}hrs`;
            playPrev.textContent = `Previous - ${playObj.previous}hrs`;

            studyCurr.textContent = `${studyObj.current}hrs`;
            studyPrev.textContent = `Previous - ${studyObj.previous}hrs`;

            exerciseCurr.textContent = `${exerciseObj.current}hrs`;
            exercisePrev.textContent = `Previous - ${exerciseObj.previous}hrs`;

            socialCurr.textContent = `${socialObj.current}hrs`;
            socialPrev.textContent = `Previous - ${socialObj.previous}hrs`;

            selfCareCurr.textContent = `${selfCareObj.current}hrs`;
            selfCarePrev.textContent = `Previous - ${selfCareObj.previous}hrs`;
            
        })
})

// monthly info
monthly.addEventListener('click', () => {
    fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            const workObj = data[0].timeframes.monthly;
            const playObj = data[1].timeframes.monthly;
            const studyObj = data[2].timeframes.monthly;
            const exerciseObj = data[3].timeframes.monthly;
            const socialObj = data[4].timeframes.monthly;
            const selfCareObj = data[5].timeframes.monthly;


            workCurr.textContent = `${workObj.current}hrs`;
            workPrev.textContent = `Previous - ${workObj.previous}hrs`;

            playCurr.textContent = `${playObj.current}hrs`;
            playPrev.textContent = `Previous - ${playObj.previous}hrs`;

            studyCurr.textContent = `${studyObj.current}hrs`;
            studyPrev.textContent = `Previous - ${studyObj.previous}hrs`;

            exerciseCurr.textContent = `${exerciseObj.current}hrs`;
            exercisePrev.textContent = `Previous - ${exerciseObj.previous}hrs`;

            socialCurr.textContent = `${socialObj.current}hrs`;
            socialPrev.textContent = `Previous - ${socialObj.previous}hrs`;

            selfCareCurr.textContent = `${selfCareObj.current}hrs`;
            selfCarePrev.textContent = `Previous - ${selfCareObj.previous}hrs`;
            
        })
})
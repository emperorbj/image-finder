// 'use strict'

// const formEl = document.querySelector('form')
// const inputEl = document.getElementById('search')
// const resultContainer = document.querySelector('.container-results')
// const showMore = document.querySelector('.show-more-button')

// let inputData = '';
// let page = 1;

// async function searchImage() {
//     inputData = inputEl.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=0Q0Q5qvefNeLLYncXCRhMGqq47F1lPDML5-We090cf8`;
//     const response = await fetch(url);
//     const data = await response.json();

//     const results = data.results
//     if(page === 1){
//         resultContainer.innerHTML = ''
//     }

//     results.map((result) => {
//         const imageWrapper = document.createElement('div')
//         imageWrapper.classList.add('result')
//         const image = document.createElement('img')
//         image.src = result.urls.small
//         image.alt = result.alt_description
//         const imageLink = document.createElement('a')
//         imageLink.href = result.links.html
//         imageLink.target = '_blank'
//         imageLink.textContent = result.alt_description

//         imageWrapper.appendChild(image)
//         imageWrapper.appendChild(imageLink)
//         resultContainer.appendChild(imageWrapper)
//     })

//         if (results.length > 0) {
//             page++;
//             showMore.style.display = 'block';
//         } else {
//             showMore.style.display = 'none';
//         }
// }

// formEl.addEventListener('submit', (e) =>{
//     e.preventDefault()
//     page = 1;
//     searchImage()
// })


// showMore.addEventListener('click', () =>{
//     searchImage()
// })








// const cash = [100,200,-300,-400];

// const check = cash.map((items)=> items > 1 ? console.log('withdrawal') : console.log('deposit'))



const formEl = document.querySelector('form');
const inputEl = document.querySelector('#search');
const resultContainer = document.querySelector('.container-results');
const showMore = document.querySelector('.show-more-button');

let inputData = '';
let page = 1;

async function searchImage() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=0Q0Q5qvefNeLLYncXCRhMGqq47F1lPDML5-We090cf8`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const results = data.results

        if (page === 1) {
            clearResults();
        }

        results.map(result => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('result-box');

            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description;

            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = '_blank';
            imageLink.textContent = result.alt_description;

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            resultContainer.appendChild(imageWrapper);
        });

        if (data.results.length > 0) {
            page++;
            showMore.style.display = 'block';
        } else {
            showMore.style.display = 'none';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function clearResults() {
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

showMore.addEventListener('click', () => {
    searchImage();
});

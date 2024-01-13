const formEl = document.querySelector('form')
const inputEl = document.getElementById('search')
const resultContainer = document.querySelector('.container-results')
const showMore = document.querySelector('.show-more-button')


let inputData = '';
let page = 1;

function searchImage() {
inputData = inputEl.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=0Q0Q5qvefNeLLYncXCRhMGqq47F1lPDML5-We090cf8`;

fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    const results = data.results;

    if (page === 1) {
        resultContainer.innerHTML = '';
    }

    results.map(result => {
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add('result-box')
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = '_blank'
        imageLink.textContent = result.alt_description
        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        resultContainer.appendChild(imageWrapper);
    });

    if (results.length > 0) {
        page++;
        showMore.style.display = 'block';
    } else {
        showMore.style.display = 'none';
    }
    })
    .catch(err => {
        alert(`Error:${err.message}`)
    })
}

formEl.addEventListener('submit', (e) =>{
    e.preventDefault()
    page = 1;
    searchImage()
})

showMore.addEventListener('click', () => {
searchImage();
});

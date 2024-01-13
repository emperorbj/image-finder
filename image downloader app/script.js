const formEl = document.querySelector('form')
const inputEl = document.querySelector('#search-input')
const resultContainer = document.querySelector('.container-results')
const showMore = document.querySelector('.show-more-button')

const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=0Q0Q5qvefNeLLYncXCRhMGqq47F1lPDML5-We090cf8`
let inputData = 'school boy';
let page = 1;

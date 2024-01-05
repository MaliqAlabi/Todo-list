const buttonEl = document.getElementById('submitButton')
const inputEl = document.getElementById('text')
const ulEl = document.getElementById('ul')


buttonEl.addEventListener('click', () => {
    if(inputEl.value === ''){
        alert('You must write something')
    }else{
        let li = document.createElement('li')
        li.innerHTML = inputEl.value
        ulEl.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        inputEl.value = ''
    }
    saveLocalStorage()
})

ulEl.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveLocalStorage()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveLocalStorage()
    }
})

function saveLocalStorage(){
    localStorage.setItem('data', ulEl.innerHTML)
}

function getLocalStorage(){
    ulEl.innerHTML = localStorage.getItem('data')
}

getLocalStorage()
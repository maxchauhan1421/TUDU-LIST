var input = document.querySelector('input');
var listContainer = document.querySelector('.list-container');
var submit = document.querySelector('button');

submit.addEventListener('click',()=>{
    if( input.value === '' ){
        alert('Enter the Task')
    }
    else{
        var li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        var span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
})

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('decoration');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();
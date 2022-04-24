// define elements 
let inputField = document.getElementById('input-field');
let submitBtn  = document.getElementById('submit');
let clearBtn = document.getElementById('clear');
let container = document.getElementById('p-container');

// submit button functionality, event listener
submitBtn.addEventListener('click',function(){
    let p = document.createElement('p');
// append paragraph to container
p-container.appendChild(p);
//specify value of p
p.innerText = inputField.value;
// clear input field
inputField.value = '';
//cross out completed task
p.addEventListener('click',function(){
    p.style.textDecoration = 'line-through';
    });
// remove task on double click
p.addEventListener('dblclick', function(){
    container.removeChild(p);
    });

// clear button functionality
clearBtn.addEventListener('click', function () {
    container.innerText ="";
    });

});
function clicked() {
    clearBtn.classList.remove('non-active'); // add clear button on submit click
}

function cleared() {
    clearBtn.classList.add('non-active'); // remove clear button on clear button click
}
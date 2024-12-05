document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const btn = document.getElementById('btn');
    const list = document.getElementById('list');

    btn.addEventListener('click', function() {
        const taskText = input.value.trim();
        if(taskText != "") {
            const li = document.createElement('li');
            li.innerHTML = `
            <input type = "checkbox" class="box"><br><br>
            <span class="text"> ${taskText}</span><br><br>
            <button class="delete">Delete</button>`;

            list.appendChild(li);

            const deletebtn = li.querySelector('.delete');
            const box = li.querySelector('.box');

            deletebtn.addEventListener('click', function() {
                li.remove();
            });

            box.addEventListener('change', function() {
                li.classList.toggle('completed');
            });

            input.value ='';
        }
    });
});
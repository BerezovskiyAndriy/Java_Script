const openPopUp = document.getElementById('open');
const closePopUp = document.getElementById('close');
const popUp = document.getElementById('pop-up');
const popUpBody = document.getElementById('pop-up__body');

openPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.style.top = 0 + 'px';
    openPopUp.style.display = 'none';
})
closePopUp.addEventListener('click', () => {
    popUp.style.top = -1000 + 'px';
    openPopUp.style.display = 'initial';
})

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const tegDiv = document.createElement('div');
        tegDiv.classList.add('block');

        for (const element of users) {
            const user = document.createElement('div');
            const btn = document.createElement('button');
            const tegA = document.createElement('a');

            user.innerHTML = `${element.id}. ${element.name}<br>`;
            btn.classList.add('btn-more')
            btn.innerHTML = `More info`;
            tegA.href = '../mini_project/user-details.html';

            user.style.textAlign = 'start';
            user.style.width = 45 + '%';

            tegA.appendChild(btn);
            user.appendChild(tegA);
            tegDiv.appendChild(user);
            popUpBody.appendChild(tegDiv);

            btn.onclick = () => {
                localStorage.setItem('more_info', JSON.stringify(element));
            }
        }
    })



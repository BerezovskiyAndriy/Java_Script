const box = document.getElementById('box');
const btnOpen = document.getElementById('btn');
const btnClose = document.getElementById('close');
const block = document.getElementById('block');

const user = JSON.parse(localStorage.getItem('more_info'));

let userFunction = (user) => {
    for (const elementKey in user)
        if (typeof user[elementKey] !== "object") {
            const tegDiv = document.createElement('div');
            tegDiv.innerHTML = `${elementKey}: ${user[elementKey]}`;
            box.appendChild(tegDiv);
        } else {
            const h2 = document.createElement('h2');
            h2.innerText = `${elementKey.toUpperCase()}:`;
            h2.style.paddingTop = 10 + 'px';
            box.appendChild(h2);
            userFunction(user[elementKey]);
        }
    }

userFunction(user);

    btnOpen.addEventListener("click", function() {
        block.style.bottom = 0 + 'px';
    });
    btnClose.addEventListener("click",function () {
        block.style.bottom = -1000 + 'px';
    })

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                if (post.userId === user.id) {
                    const tegDiv = document.createElement('div');
                    const btnMore = document.createElement('button');
                    const tegA = document.createElement('a');

                    tegDiv.innerHTML = `${post.title}<br>`;
                    btnMore.innerHTML = 'More info';
                    btnMore.classList.add('btnMore');
                    tegDiv.classList.add('postInfo');
                    tegA.href = '../mini_project/post-details.html';
                    tegA.style.display = 'contents';

                    tegA.appendChild(btnMore);
                    tegDiv.appendChild(tegA);
                    block.appendChild(tegDiv);

                    btnMore.addEventListener("click",function () {
                        localStorage.setItem('post',JSON.stringify(post));
                        block.style.bottom = -1000 + 'px';
                    })
                }
            }
        })


// 1. Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//    кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//    Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//    https://jsonplaceholder.typicode.com/users

const wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const userElement of users) {
            const userDiv =document.createElement('div');
            userDiv.classList.add('user');
            wrap.appendChild(userDiv);

            for (const userKey in userElement) {
                    function getLevel(item) {
                        for(const itemKey in item) {
                            if(typeof(item[itemKey]) === 'object') {
                                getLevel(item[itemKey]);
                            } else {
                                const user = document.createElement('div');
                                user.innerHTML = `<b>${itemKey}:</b> ${item[itemKey]}`;
                                user.style.margin = 5 + 'px';
                                userDiv.appendChild(user);
                            }
                        }
                    }
                }
            getObject(userElement);
            function getObject(object) {
                getLevel(userElement);
            }

            const page1 = document.createElement('div');
            const btn1 = document.createElement('img');
            btn1.classList.add('btn1');
            btn1.src = "img/arrow-right.png";

            page1.classList.add('page1');
            page1.innerHTML = 'Posts';
            userDiv.append(page1);
            page1.appendChild(btn1);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('postDiv');
                userDiv.appendChild(postDiv);
                for (const postElement of posts) {
                    for (const postKey in postElement) {
                        if (userElement.id === postElement.id) {
                            const post = document.createElement('div');
                            post.classList.add('post');
                            post.innerHTML = `${postKey}: ${postElement[postKey]}`;
                            post.style.margin = 5 + 'px';
                            postDiv.appendChild(post);

                            btn1.onclick = function () {
                                postDiv.style.left = 0 + 'px';
                                postDiv.style.display = 'block';
                            }
                       }
                    }
                }
                const page2 = document.createElement('div');
                const btn2 = document.createElement('img');
                const btn3 = document.createElement('img');

                btn2.classList.add('btn2');
                btn3.classList.add('btn3');
                btn2.src = "img/arrow-right.png";
                btn3.src = "img/close-button.png";

                page2.classList.add('page2');
                page2.innerHTML = 'Comments';
                postDiv.append(page2,btn3);
                page2.append(btn2);

                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments => {
                        const commentDiv = document.createElement('div');
                        commentDiv.classList.add('commentDiv');
                        userDiv.appendChild(commentDiv);
                        for (const commentElement of comments) {
                            for (const commentKey in commentElement) {
                                if (userElement.id === commentElement.id) {

                                    const comment = document.createElement('div');
                                    comment.classList.add('comment');
                                    comment.innerHTML = `${commentKey}: ${commentElement[commentKey]}`;
                                    comment.style.margin = 5 + 'px';
                                    commentDiv.appendChild(comment);

                                    btn2.onclick = function () {
                                        commentDiv.style.left = 13 + 'px';
                                        commentDiv.style.display = 'block';
                                    }

                                    btn3.onclick = function () {
                                       postDiv.style.display = 'none';
                                    }

                                    const page3 = document.createElement('div');
                                    page3.classList.add('page3');
                                    page2.innerHTML = 'Comments';
                                    postDiv.append(page2);
                                    page2.append(btn3,btn2)

                                    const btn4 = document.createElement('img');
                                    btn4.classList.add('btn4');
                                    btn4.src = "img/close-button.png";
                                    commentDiv.append(btn4);

                                    btn4.onclick = function () {
                                        commentDiv.style.display = 'none';
                                    }
                                }
                            }
                        }
                    })
            })

        }
    })
























// if (typeof userElement[userKey] === "object") {
//     for (const userKey1 in userElement[userKey]) {
//         const item1 = document.createElement('div');
//         item1.innerHTML = `${userKey1} ${userElement[userKey][userKey1]}`
//         userDiv.appendChild(item1);
//     }
// }
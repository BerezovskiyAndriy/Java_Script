// 1. Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//    Зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточногсо поста
//    https://jsonplaceholder.typicode.com/posts
//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const wrap = document.createElement('div');
        wrap.classList.add('wrap');
        document.body.appendChild(wrap);
        for (const element of posts) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            wrap.appendChild(postDiv);
            for (const key in element) {
                const keyPost = document.createElement('div');
                keyPost.innerHTML = `<b>${key}:</b> ${element[key]}<hr>`;
                postDiv.appendChild(keyPost);
            }
            const button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = 'Comments';

            const info = document.createElement('div');
            info.classList.add('info');
            postDiv.append(button,info);

            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(comments => {
                    for (const item of comments) {
                        for (const itemKey in item) {
                            if (element.id === item.id) {
                                const infoItem = document.createElement('div');
                                infoItem.innerHTML = `<b>${itemKey}:</b> ${item[itemKey]}<hr>`;
                                info.appendChild(infoItem);

                                button.onclick = (e) =>{
                                    e.preventDefault();
                                    info.style.display = 'block';
                                    info.classList.add('infoPopup');
                                }
                                info.onclick = (e) => {
                                    e.preventDefault();
                                    info.style.display = 'none';
                                }
                            }
                        }
                    }
             })
        }
    })





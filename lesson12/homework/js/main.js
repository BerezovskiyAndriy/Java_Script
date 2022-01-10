// 1. Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
//    Для кожного елементу свій блок div.post
//    Всі характеристики повинні мати свої блоки всередені div.post
//    https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         const wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         document.body.appendChild(wrap);
//         for (const post of posts) {
//             const postDiv = document.createElement('div');
//             postDiv.classList.add('post');
//             wrap.appendChild(postDiv);
//             for (const key in post) {
//                 const keyDiv = document.createElement('div');
//                 keyDiv.innerHTML = `<b>${key}:</b> ${post[key]}`
//                 postDiv.appendChild(keyDiv);
//             }
//         }
//     });

// 2. Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//    Для кожного елементу свій блок div.comment
//    Всі характеристики повинні мати свої блоки всередені div.comment
//    https://jsonplaceholder.typicode.com/comments
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         const wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         document.body.appendChild(wrap);
//         for (const element of comments) {
//             const commentDiv = document.createElement('div');
//             commentDiv.classList.add('comment');
//             wrap.appendChild(commentDiv);
//             for (const key in element) {
//                 const keyDiv = document.createElement('div');
//                 keyDiv.innerHTML = `<b>${key}:</b> ${element[key]}`
//                 commentDiv.appendChild(keyDiv);
//             }
//         }
//     })

const box = document.getElementById('box');
const btnOpen = document.getElementById('btn');
const btnClose = document.getElementById('close');
const block = document.getElementById('block');

const post = JSON.parse(localStorage.getItem('post'));

for (const keyPost in post) {
    const tegDiv = document.createElement('div');
    tegDiv.innerHTML = `${keyPost}: ${post[keyPost]}`;
    tegDiv.style.marginBottom = 25 + 'px';
    box.appendChild(tegDiv);
}

btnOpen.addEventListener("click", function() {
    block.style.bottom = 0 + 'px';
});
btnClose.addEventListener("click",function () {
    block.style.bottom = -1000 + 'px';
})

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        for (const commentElement of comments) {
            if (commentElement.postId === post.userId) {
                const tegDiv2 = document.createElement('div');
                tegDiv2.classList.add('commentInfo');
                for (const commentKey in commentElement) {
                    const tegDiv3 = document.createElement('div');
                    tegDiv3.innerHTML = `<b>${commentKey}:</b> ${commentElement[commentKey]}<br>`;

                    tegDiv2.appendChild(tegDiv3);
                    block.appendChild(tegDiv2);
                }
            }
        }
    })


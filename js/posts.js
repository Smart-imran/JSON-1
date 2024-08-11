function loadPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(datas => display(datas))
}

//loadPosts();


/* 
    1. get the element where you add the new elements
    2. Create Child Element
    3. Set innerText or innerHtml
    4. appendChild
*/

function display(datas) {

    const postContainer = document.getElementById("posts-container");


    for (const data of datas) {

        const postDiv = document.createElement("div");

        postDiv.innerHTML = `
        <h4>User -${data.id} </h4>
        <h5>Post: title - ${data.title} </h5>
        <p>Post description</p>
        ;



        `
        postContainer.appendChild(postDiv);

       

        console.log(data);
    }
}


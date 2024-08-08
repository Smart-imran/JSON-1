function loadUsers2() {
    const url = ('https://jsonplaceholder.typicode.com/users')
    fetch(url)
        .then(res => res.json())
        .then(loadUserData => displayUser(loadUserData))
}

function displayUser(loadUserData) {
    //console.log(loadData2)

    /* for (const userData of loadUserData) {
        console.log(userData.
            phone); }*/

    const ul = document.getElementById("users-list");

    for (const userData of loadUserData) {
        console.log(userData.name);
        const li =  document.createElement("li");
        li.innerText =  userData.name;
        ul.appendChild(li);

    }
}
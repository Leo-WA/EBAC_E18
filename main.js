document.addEventListener("DOMContentLoaded", function(){
    const perfil = "ogiansouza"; 
    const url = `https://api.github.com/users/${perfil}`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.querySelector(".profile-avatar").src = data.avatar_url;
        document.querySelector(".profile-name").textContent = data.name;
        document.querySelector(".profile-username").textContent = "@" + data.login;

       
        const numbersItems = document.querySelectorAll(".numbers-item");
        numbersItems[0].innerHTML = `<h4>Repositórios</h4>${data.public_repos}`;
        numbersItems[1].innerHTML = `<h4>Seguidores</h4>${data.followers}`;
        numbersItems[2].innerHTML = `<h4>Seguindo</h4>${data.following}`;

        document.querySelector(".profile-link").href = data.html_url;
    })
    .catch(error => {
        console.error('Fetch Error:', error);
    });
});
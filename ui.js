class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {

        this.profile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="User Avatar" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Ver Perfil</a>
            </div>
            <div class="col-md-9">
            <span class="badge badge-primary mb-2">Repositorios Públicos: ${user.public_repos}</span>
            <span class="badge badge-secondary mb-2">Gists Públicos: ${user.public_gists}</span>
            <span class="badge badge-success mb-2">Seguidores: ${user.followers}</span>
            <span class="badge badge-info mb-2">Siguiendo: ${user.following}</span>
            <br>
            <br>
            <ul class="list-group">
                <li class="list-group-item">Compañía: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Dirección: ${user.location}</li>
                <li class="list-group-item">Miembro desde: ${user.created_at}</li>
            </ul>
        </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Últimos Repos</h3>
        <div id="repos"></div>`
    }

    //MOSTRAR REPOS
    showRepos(repos) {
        let output = "";

        repos.forEach(function(repo) {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a> 
                </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary mb-2">Estrellas: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success mb-2">Forks: ${repo.forms_count}</span>

                    </div>
                </div>
            </div>`
        });

        //MOSTRAR LOS REPOS
        document.getElementById('repos').innerHTML = output;
    }

    //MOSTRAR MENSAJE DE ALERTA

    showAlert(msg, className) {
        //LIMPIAR CUALQUIER ALERTA PENDIENTE
        this.clearAlert();
        //CREAR EL DIV QUE CONTENDRÁ LA ALERTA
        const div = document.createElement('div');
        //PASARLE LAS CLASES QUE SE PASAN EN EL ARCHIVO "app.js"
        div.className = className;
        //CREARLE UN TEXTO QUE VA A SER EL MENSAJE QUE SE PASA EN EL ARCHIVO "app.js"
        div.appendChild(document.createTextNode(msg));
        //LLAMAR AL ELEMENTO PADRE
        const container = document.querySelector('.searchContainer');
        //LLAMAR AL HIJO DEL ELEMENTO PADRE SOBRE EL CUAL SE VA A INSERTAR EL NUEVO ELEMENTO
        const search = document.querySelector('.search');
        //INSERTAR EL NUEVO ELEMENTO ANTES DEL HIJO "search" DENTRO DEL ELEMENTO PADRE "container"
        container.insertBefore(div, search);

        //TIMEOUT LUEGO DE 3 SEGUNDOS
        setTimeout(() => this.clearAlert(), 3000);
    }

    //LIMPIAR MENSAJE DE ALERTA
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    //LIMPIAR PROFILE CUANDO NO HAY NADA EN LA BARRA DE BÚSQUEDA
    clearProfile() {
        this.profile.innerHTML = "";
    }
}
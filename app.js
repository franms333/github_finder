//INSTANCIALIZAR GITHUB.js
const github = new GitHub();
const ui = new UI();
//BUSCAR USUARIOS
const searchUser = document.getElementById('button');

//CREAR EVEN LISTENER
searchUser.addEventListener('click', (e) =>{
    //OBTENER TEXTO DEL INPUT
    const userText = document.getElementById('searchUser').value;

    if(userText !== ''){
        //HACER LLAMADA AL HTTP
        github.getUser(userText)
        .then((data) => {
            if(data.profile.message === 'Not Found'){
                //MOSTRAR ALERTA
                ui.showAlert('Usuario no encontrado', 'alert alert-danger');

            }else{
                //MOSTRAR PERFIL
                console.log(data.profile);
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        }).catch((err) => {
            
        });
    } else {
        //LIMPIAR EL PERFIL
        ui.clearProfile()
    }
})
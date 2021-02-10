class GitHub{
    constructor(){
        // this.client_id = '63833a476b8b5fb906a4';
        // this.client_secret = 'b8c4a3303c944eda5f2df3a06e537b17222c7ac0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    //METODO GET
     async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}
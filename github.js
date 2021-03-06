//c158466478270401f7cb
//clientsecret
//e6012fb81a97c5c3f0a04d7781d9d59db14f4160
class Github{
    constructor() {
        this.clientId="d81b3e0becf7f974d4aa";
        this.clientSecret="3d78025f6a87289584715326b1ca27c5739811c3";
        this.repoCount=2;
        this.repoSort='created:asc';
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const response = await profileResponse.json();
        const reposResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repoCount}&sort=${this.repoSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repos = await reposResponse.json();
        return {
            response,
            repos
        };
    }
}
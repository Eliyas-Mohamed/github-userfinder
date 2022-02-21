class UI{
    constructor(){
        this.userCover=document.querySelector('.userdetails-cover');
        this.userDetails=document.getElementById('user-details');
        this.userRepos=document.getElementById('user-repodetails');
    }
    showProfile(user){
        this.userDetails.innerHTML=`<section class="user-details p-3">
        <div class="row">
            <div class=" img-cover col-md-3 text-center">
                <img src="${user.avatar_url}" class="rounded-circle mb-custom-sm" alt="user-image" srcset="">
            </div>  
            <div class="col-md-9 mb-custom-sm">
                <h3 class="text-white">${user.login}</h3>
                <Section class="statistics-cover bg-primarycolor d-flex justify-content-around p-2 rounded mt-4">
                    <div>
                        <h6 class="text-grey">Repos</h6>
                        <span class="text-white">${user.public_repos}</span>
                    </div>
                    <div>
                        <h6 class="text-grey">Followers</h6>
                        <span class="text-white">${user.followers}</span>
                    </div>
                    <div>
                        <h6 class="text-grey">Following</h6>
                        <span class="text-white">${user.following}</span>
                    </div>
                </Section>
            </div>                      
         </div>
        
        
    </section>`
    }
   showRepos(repos){
       let output='<h5 class="text-grey">Latest Repos</h5>';
       repos.forEach((repo)=>{
           console.log(repo);
           output+=`<a class="text-white d-block" href=${repo.html_url} target="_blank">${repo.name}</a>`
       })
       this.userRepos.innerHTML=output;
   }
    enterRequest(){
        this.userCover.innerHTML=`<h4 class='text-white text-center'>Please enter a Username to search</h4>`;
    }
   undefinedAlert(){
    this.userCover.innerHTML=`<div class="alert alert-danger">Sorry, No user Found</div>`;
   }
}

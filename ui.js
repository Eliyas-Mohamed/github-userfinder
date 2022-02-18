class UI{
    constructor(){
        this.userCover=document.querySelector('.userdetails-cover')
    }
    showProfile(user){
        this.userCover.innerHTML=` <section class="img-cover float-start">
        <img src="${user.avatar_url}" class="rounded-circle" alt="user-image" srcset="">
    </section>
    <section class="user-details">
        <h3 class="text-white">${user.login}</h3>
        <Section class="statistics-cover bg-primarycolor d-flex justify-content-around p-2 rounded mt-4 mb-4">
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
        <section class="latest-repos">
            <h5 class="text-grey">Latest 2 Repos</h5>
            <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vitae consequuntur nihil minus saepe possimus provident omnis earum.</p>
            <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime et fuga pariatur nesciunt necessitatibus veritatis est quasi saepe</p>
        </section>
    </section>`
    }
    enterRequest(){
        this.userCover.innerHTML=`<h4 class='text-white text-center'>Please enter a Username to search</h4>`;
    }
   undefinedAlert(){
    this.userCover.innerHTML=`<div class="alert alert-danger">NO user Found</div>`;
   }
}
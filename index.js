const github = new Github;
const ui = new UI;
// github.getUser(searchValue)
//    .then(data=>data)
//     .then(res=>{
//         const img_cover=document.querySelector('.img-cover');
//         img_cover.innerHTML=`<img src="${res.response.avatar_url}" class="rounded-circle" alt="user-image" srcset="">`;
//                                         })
//listen for user input

// if(document.getElementById('username').value===''){
//     ui.enterRequest();
// }
document.getElementById('username').addEventListener('keyup',startSearch);

//starting search

function startSearch(){
    console.log(this.value)
    if(document.getElementById('username').value!==''){
        console.log('havalue');
        const searchValue=document.getElementById('username').value;
        github.getUser(searchValue)
        .then(res=>{
            if(res.response.message==="Not Found"){
                ui.undefinedAlert();
            }
            else{ 
                console.log('uicalled');
                console.log(res.response);
                console.log(res.repos);
                ui.showProfile(res.response);
                if(res.repos.length!==0){
                    ui.showRepos(res.repos);
                }
                
            }
 })
    .catch((err)=>console.log("this",err));  
    }
   
        
}
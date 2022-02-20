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
       .then(data=>data)
        .then(res=>{
            if(res.response.message==="Not Found"){
                ui.undefinedAlert();
            }
            else if(res.response.message.startsWith("API rate")) {
                ui.limitAlert();
            }
            else{
                
                ui.showProfile(res.response);
                console.log(res.repos);
                ui.showRepos(res.repos);
            }
 })
 .catch((err)=>console.log("this",err));
   
        
    }
    else{
        console.log('novalue');
        ui.enterRequest();
         }
        
}
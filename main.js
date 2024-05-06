


axios.get('https://tarmeezacademy.com/api/v1/posts?limit=10'

)
  .then(function (response) {
let post=response.data.data

document.getElementById('posts_cont').innerHTML =``
post.forEach(post => {
 

 
 


  document.getElementById('posts_cont').innerHTML +=`
  <div id="posts" class="mt-4">


  <div class="card" style="width:70%;">
    <div class="card-header d-flex" style="justify-content: space-between;align-items: center;">
      <div class="">
    <img src="${post.author.profile_image}" class="rounded-circle shadow" style="width: 40px;"> ${post.author.name}</div>
    <i class="fi fi-ts-user-check" style="font-size: larger;font-weight: bold;"></i>
    </div>
    <div class="card-body">
      <img src="${post.image}" alt="image" class="w-100 rounded">
      <span style=" color: gray;">${post.created_at}</span>
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">${post.body}</p>
      <hr>
      <a href="#" class="btn" style="color: crimson;"><i class="fi fi-ts-comment-dots"></i> Comments<span>(${post.comments_count})</span></a>
      <span></span>
    </div> 
  </div>
  </div>
  `
});    

  })
  .catch(
    error=>{alert(error.response.data.error)}
  )



















function login(){
    let username=document.getElementById('username').value
let password =document.getElementById('password').value
console.log(username,password)
params={
   "username":username,
    "password":password
}
 

      axios.post('https://tarmeezacademy.com/api/v1/login',params

      )
        .then(function (response) {
        localStorage.setItem('tokens',response.data.token)
        localStorage.setItem('user',JSON.stringify(response.data.user))
        Swal.fire({
    icon: "success",
    title: "تم تسجيل الدخول بنجاح",
  })
       if_loged()  })
        .catch(
          error=>{   alert(error.response.data.error)}
  )
  document.getElementById('username').value=''
  document.getElementById('password').value=''
const modal=document.getElementById('exampleModal')
let mymodal= bootstrap.Modal.getInstance(modal);
  mymodal.hide()
  

}

 

   if_loged()
function if_loged(){
 
if(localStorage.getItem('tokens')){
  
 
document.getElementById('login_btn').style.display='none'
document.getElementById('register_btn').style.display='none'
document.getElementById('logout_btn').style.display='block'}
else{document.getElementById('login_btn').style.display='block'
document.getElementById('register_btn').style.display='block'
document.getElementById('logout_btn').style.display='none'}}



function logout(){
localStorage.removeItem('tokens')
localStorage.removeItem('user')
swal_alert2()
if_loged()

}  
function swal_alert2(){
  Swal.fire({
    icon: "success",
    title: "تم تسجيل الخروج",
  });
}





function create_post(){
  let title=document.getElementById('title').value
let posts_body =document.getElementById('posts_body').value
console.log(title,posts_body)
params={
 "title":title,
  "body":posts_body
}
let token=localStorage.getItem('tokens');

 Header={
        "authorization":`Bearer ${token}`
      }
    axios.post('https://tarmeezacademy.com/api/v1/posts',params,{headers:Header}
     
  
    )
      .then(function (response) {
      
      Swal.fire({
  icon: "success",
  title: "تم النشر بنجاح",})
      })}










// var req = new XMLHttpRequest(); 
// req.open("GET", `https://jsonplaceholder.typicode.com/users`);
// req.send();  req.responseType="json"
// req.onload= function() 
                             
                                    
// console.log(req.response) 
//     if ( this.status == 200) {
        
// let resp = req.response; 
// for(x of resp){  
//     document.getElementById('demo').innerHTML += `
//     <button style="width:100px; display:block;"onclick="get_posts(${x.id})"> ${x.name}</button>
//     `
//     }
//     }
   
    
// };

// function get_posts(userId){
//     var req = new XMLHttpRequest(); 

// req.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//  req.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+userId);
// req.send();  req.responseType="json"
// req.onload= function() {
   

//     if ( this.status == 200) {
        
// let resp = req.response; 
// document.getElementById('posts').innerHTML=''
// for(x of resp){
//     document.getElementById('posts').innerHTML += `
//     <h5 style="width:100px; display:block;"> ${x.title}</h5>
//     `
//     }
//     }
   
    
// };
// }

// new Promise((resolve)=>{
//     setTimeout( ()=>{ document.getElementById('title1').style.visibility='visible' 
//      resolve() }
//        ,1000)
// }).then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout( ()=>{ document.getElementById('title2').style.visibility='visible' 
//      resolve() }
//        ,3000)
//     })
// }).then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout( ()=>{ document.getElementById('title3').style.visibility='visible' 
//      resolve() }
//        ,1000)
//     })
// })
// =============================fetch ===================
// fetch( 'https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(resp =>{for(x of resp){  
//     document.getElementById('demo').innerHTML += `
//     <button style="width:100px; display:block;"onclick="get_posts(${x.id})"> ${x.name}</button>
//     `
//     }
//     }

//       )

//       function get_posts(userId){
//         fetch(  `https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(response => response.json())
//       .then( resp=>{ 
// document.getElementById('posts').innerHTML=''
// for(x of resp){
//     document.getElementById('posts').innerHTML += `
//     <h5 style="width:100px; display:block;"> ${x.title}</h5>
//     `}
//        } )}
// =================================axios========================
// function using_axios(){
 
// axios.get('http://api.aladhan.com/v1/timingsByCity?city=cairo&country=EG')
//   .then(function (response) {
    // handle success
//     console.log(response.data.data.timings.Fajr);
//   })




// }

//  using_axios()



// =============async=================await==

// async function display_titles(){

// await new Promise((resolve,reject)=>{setTimeout(
//   ()=>{document.getElementById('title1').style.visibility='visible'
// resolve() } ,1000
// )})

// await new Promise(
//   (resolve,reject)=>{
//     setTimeout(()=>{document.getElementById('title2').style.visibility='visible'
//      resolve()},1000)
//   }
// )



// }
// display_titles()





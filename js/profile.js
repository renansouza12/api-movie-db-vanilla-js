const profileImage = document.querySelector('.image_user');
const inputFile = document.querySelector('#file');
const btnEdit = document.querySelector('.edit_profile');
const profile = document.querySelector('.user_profile');
const imageUser = document.querySelector('.image_profile');
const profileContainer = document.querySelector('.profile_setting');
const btnCloseProfile = document.querySelector('.icon_close');


btnEdit.addEventListener('click', changeOption);
inputFile.addEventListener('change',changeImage);
profile.addEventListener('click',()=>{profileContainer.style.display = "block"});
btnCloseProfile.addEventListener('click',reverseOption);
window.addEventListener('click', closeProfile);

function closeProfile(e){
    if(!btnCloseProfile.contains(e.target) && !profile.contains(e.target) && !profileContainer.contains(e.target)){
        reverseOption();
    }
}

function changeImage(){
    const url = URL.createObjectURL(inputFile.files[0]);
    profileImage.src = url;
    imageUser.src  = url ;
}

function changeOption(){
    btnEdit.style.display = "none"; 
    inputFile.style.display = "block"; 
}

function reverseOption(){
    profileContainer.style.display = "none";
    btnEdit.style.display = "block"; 
    inputFile.style.display = "none"; 
}
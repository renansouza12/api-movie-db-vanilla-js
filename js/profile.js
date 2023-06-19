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
    localStorage.setItem('imageSrc',url);
    rendeImage();
}
function rendeImage(){
    const imageDefault = 'https://media.discordapp.net/attachments/1008571178560000040/1117886622827032656/JuanArk_1000_shades_of_blue_57f8cbd1-b119-4783-8880-67cbb737d61d.png?width=606&height=606';

    const imageUrl = localStorage.getItem('imageSrc');
    profileImage.src = imageUrl ?? imageDefault;
    imageUser.src = imageUrl ?? imageDefault;
}
rendeImage();

function changeOption(){
    btnEdit.style.display = "none"; 
    inputFile.style.display = "block"; 
}

function reverseOption(){
    profileContainer.style.display = "none";
    btnEdit.style.display = "block"; 
    inputFile.style.display = "none"; 
}
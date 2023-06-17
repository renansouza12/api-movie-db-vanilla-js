const profileImage = document.querySelector('.image_user');
const inputFile = document.querySelector('#file');
const btnEdit = document.querySelector('.edit_profile');


btnEdit.addEventListener('click', changeButton);
inputFile.addEventListener('change',changeImage);


function changeImage(){
    profileImage.src = URL.createObjectURL(inputFile.files[0]);
}

function changeButton(){
    btnEdit.style.display = "none"; 
    inputFile.style.display = "block"; 
}


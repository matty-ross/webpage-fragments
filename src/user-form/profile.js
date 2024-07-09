const profileFile = document.querySelector('#profile-file');
const profilePreview = document.querySelector('#profile-preview');

profilePreview.hidden = true;
profileFile.onchange = () => {
    profilePreview.src = URL.createObjectURL(profileFile.files[0]);
    profilePreview.onload = () => {
        profilePreview.hidden = false;
        URL.revokeObjectURL(profilePreview.src);
    };
};

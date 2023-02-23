document.getElementById("edu").addEventListener('click', function () {
    //div
    document.getElementById('education').style.display='flex';
    document.getElementById('name').style.display='none';
    document.getElementById('personalInformation').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('workExperience').style.display='none';
    document.getElementById('pdf').style.display='none';
    //botones
    document.getElementById('home').style.display='inline';
    document.getElementById('personal').style.display='inline';
    document.getElementById('skill').style.display='inline';
    document.getElementById('experience').style.display='inline';
    document.getElementById('edu').style.display='none';
    document.getElementById('pdfdoc').style.display='inline';
});

document.getElementById('home').addEventListener('click', function () {
    //div
    document.getElementById('name').style.display='flex';
    document.getElementById('education').style.display='none';
    document.getElementById('personalInformation').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('workExperience').style.display='none';
    document.getElementById('pdf').style.display='none';
    //botones
    document.getElementById('home').style.display='none';
    document.getElementById('personal').style.display='inline';
    document.getElementById('skill').style.display='inline';
    document.getElementById('experience').style.display='inline';
    document.getElementById('edu').style.display='inline';
    document.getElementById('pdfdoc').style.display='inline';
});

document.getElementById('personal').addEventListener('click', function () {
    //div
    document.getElementById('name').style.display='none';
    document.getElementById('education').style.display='none';
    document.getElementById('personalInformation').style.display='flex';
    document.getElementById('skills').style.display='none';
    document.getElementById('workExperience').style.display='none';
    document.getElementById('pdf').style.display='none';
    //botones
    document.getElementById('home').style.display='inline';
    document.getElementById('personal').style.display='none';
    document.getElementById('skill').style.display='inline';
    document.getElementById('experience').style.display='inline';
    document.getElementById('edu').style.display='inline';
    document.getElementById('pdfdoc').style.display='inline';
});

document.getElementById('skill').addEventListener('click', function () {
    //div
    document.getElementById('name').style.display='none';
    document.getElementById('education').style.display='none';
    document.getElementById('personalInformation').style.display='none';
    document.getElementById('skills').style.display='flex';
    document.getElementById('workExperience').style.display='none';
    document.getElementById('pdf').style.display='none';
    //botones
    document.getElementById('home').style.display='inline';
    document.getElementById('personal').style.display='inline';
    document.getElementById('skill').style.display='none';
    document.getElementById('experience').style.display='inline';
    document.getElementById('edu').style.display='inline';
    document.getElementById('pdfdoc').style.display='inline';
});

document.getElementById('experience').addEventListener('click', function () {
    //div
    document.getElementById('name').style.display='none';
    document.getElementById('education').style.display='none';
    document.getElementById('personalInformation').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('workExperience').style.display='flex';
    document.getElementById('pdf').style.display='none';
    //botones
    document.getElementById('home').style.display='inline';
    document.getElementById('personal').style.display='inline';
    document.getElementById('skill').style.display='inline';
    document.getElementById('experience').style.display='none';
    document.getElementById('edu').style.display='inline';
    document.getElementById('pdfdoc').style.display='inline';
});

document.getElementById('pdfdoc').addEventListener('click', function (){
    //div
    document.getElementById('name').style.display='none';
    document.getElementById('education').style.display='none';
    document.getElementById('personalInformation').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('workExperience').style.display='none';
    document.getElementById('pdf').style.display='flex';
    //botones
    document.getElementById('home').style.display='inline';
    document.getElementById('personal').style.display='inline';
    document.getElementById('skill').style.display='inline';
    document.getElementById('experience').style.display='inline';
    document.getElementById('edu').style.display='inline';
    document.getElementById('pdfdoc').style.display='none';
})


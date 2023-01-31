
// let links = document.querySelectorAll('.links');

// links.forEach(function (link) {
//         link.addEventListner('click', () => {
//             links.forEach(item => item.classList.remove('active'));
//             link.classList.add('active');
//         });
//     })


    const toggleBtn = document.querySelector('.toggle-btn');
    const ul = document.querySelector('.nav-links-container');

    toggleBtn.addEventListener('click',() =>{
        toggleBtn.classList.toggle('active');
        ul.classList.toggle('active');
    })

// document.querySelectorAll('.image-container2 img').forEach(image =>{
//     image.onclick =() =>{
//         document.querySelector('.popup-image').style.display = 'block';
//         document.querySelector('.popup-image img').src = image.getAttribute('src');
//     }
   
// });

// document.querySelector('.popup-image span').onclick =() =>{
//     document.querySelector('.popup-image').style.display = 'none';
// }
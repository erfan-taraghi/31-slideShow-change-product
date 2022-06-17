function changeImage(e){
    const box = document.querySelector('.thumb-img').children;
 
    for(let i = 0; i < box.length; i++){
        box[i].classList.remove('active')
    }
    e.classList.add('active');

    document.querySelector('.img').src = e.children[0].src;
    
}




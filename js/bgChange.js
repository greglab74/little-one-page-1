function bgChange() {
    let header = document.querySelector('header');
    let images = ['patate.jpg', 'carottes.jpg', 'poireau.jpg'];
    let i = 0;

    function changer() {


        if(i < images.length) {
            header.style.backgroundImage = `url('../img/${images[i]}')`;
            i++
        } else {
            console.log('le else');
            i = 0;
        }
    }

    setInterval(changer, 3000);

    changer();
}




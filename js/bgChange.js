function bgChange() {
    let header = document.querySelector('header');
    let images = ['patate.jpg', 'carottes.jpg', 'poireau.jpg'];
    let i = 0;

    function changer() {
        if(i < images.length) {
            //fondu(false, header);
            header.style.backgroundImage = `url('../img/${images[i]}')`;
            //fondu(true, header);
            i++
        } else {
            i = 0;
        }
    }

    setInterval(changer, 3000);

    function fondu(in_out, cible) {
        //à tester avec des console log car je n'ai pas de résultat
        if(in_out) {
            for(let j = 0 ; t <= 100 ; t++)
                cible.style.opacity = t + '%';
        } else {
            for(let k = 0 ; t <= 100 ; t++)
                cible.style.opacity = -t + '%';
        }
    }
}




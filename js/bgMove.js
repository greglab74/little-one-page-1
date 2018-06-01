function bgMove() {

    let header = document.querySelector('header');
    header.onmousemove = (e) => {
        console.log(e);
        header.style.backgroundPosition = e.clientX / 100 + 'px ' + e.clientY / 100 + 'px';
    }

}

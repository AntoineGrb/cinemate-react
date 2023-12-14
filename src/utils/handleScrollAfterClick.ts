export const handleScrollAfterClick = () => {

    let topDistance = 0;
    if (window.innerWidth < 681) {
        topDistance = 860;
    } 
    else if (window.innerWidth < 1000) {
        topDistance = 640;
    }
    else {
        topDistance = 690
    }

    window.scrollTo({
        top: topDistance,
        left: 0,
        behavior: 'smooth'
    });
}
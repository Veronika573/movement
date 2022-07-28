const rectangle = document.querySelector(".small-rectangle");
const map = document.querySelector(".big-rectangle");
const btnTop = document.querySelector(".btn-top");
const btnLeft = document.querySelector(".btn-left");
const btnDown = document.querySelector(".btn-down");
const btnRight = document.querySelector(".btn-right");
const mapProps = map.getBoundingClientRect();

const coords = {
    x: mapProps.x = 0,
    y: mapProps.y = 0,
}

function movement (x, y) {

    console.log(coords.x + x);
    if ((mapProps.x <= coords.x + x) && 
        (mapProps.y <= coords.y + y) &&
        (mapProps.right >= coords.x + x + rectangle.offsetWidth) &&
        (mapProps.bottom >= coords.y + y + rectangle.offsetWidth) 
    ) {
        rectangle.style.transform = `translate(${coords.x + x}px, ${coords.y + y}px)`;
        coords.x = coords.x + x;
        coords.y = coords.y + y;
    }
}

btnTop.addEventListener('click', () => {
    movement(0, -100);
})

btnLeft.addEventListener('click', () => {
    movement(-100, 0);
})

btnDown.addEventListener('click', () => {
    movement(0, 100);
})

btnRight.addEventListener('click', () => {
    movement(100, 0);
})



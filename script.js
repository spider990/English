const button = document.querySelector('.GG');

const mouseHoverAnimation = function() {
    anime({
        targets: '.GG',
        width: '50%',
        scale: {
            delay: 500,
            value: 1.5,
        },
        duration: 1500
    })
}

const mouseOutAnimation = function() {
    anime({
        targets: '.GG',
        width: '80px',
        scale: {
            delay: 800,
            value: 1,
        },
        duration: 1500
    })
}

button.addEventListener('mouseover', mouseHoverAnimation)
button.addEventListener('mouseout', mouseOutAnimation)



anime({
    targets: '.box .block',
    trnsalteY: 270,
    scale:[
        {value: .1, easing:'easeOutSine', duration: 1200},
        {value: 1, easing: 'easeInOutQuad', duration: 1200},
    ],
    delay: anime.stagger(200, {grid: [40, 6], from:'center'}),
    loop: true
});

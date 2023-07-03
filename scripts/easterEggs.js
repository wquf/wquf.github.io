let title = $('#title');
title.on(
    'click', () => {
        title.attr('class', 'animate__animated animate__rubberBand');
        return title.on(
            'animationend', () => {
                return title.attr('class', null);
            },
        );
    },
);

let timer = $('#timer');
timer.on(
    'click', () => {
        timer.attr('class', 'animate__animated animate__jello');
        return timer.on(
            'animationend', () => {
                return title.attr('class', null);
            },
        );
    },
);

var models = [
    {
        name: 'car1',
        image: 'img/car1.jpg'
    },
    {
        name: 'car2',
        image: 'img/car2.jpg'
    },
    {
        name: 'car3',
        image: 'img/car3.jpg'
    },
    {
        name: 'car4',
        image: 'img/car4.jpg'
    },
    {
        name: 'car5',
        image: 'img/car5.jpg'
    },
]
var index = 0;
var slideCount = models.length;
var settings = {
    duration: '1000',
    random: false
}
var interval;

initial(settings);
const left = document.querySelector('.left');
left.addEventListener('click', function () {
    index--;
    console.log(index);
    showSlide(index);
});
const right = document.querySelector('.right');
right.addEventListener('click', function () {
    index++;
    console.log(index);
    showSlide(index);

});

const btnArrow = document.querySelectorAll('.arrow');
btnArrow.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
})
btnArrow.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        initial(settings);
    })
})

function initial(settings) {
    var previous;
    interval = setInterval(() => {


        if (settings.random) {//true
            //random index
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == previous) {
                previous = index;
            }

        } else {//false
            // increasing index
            if (slideCount == index + 1) {
                index = -1;
            } console.log(index);
            showSlide(index);
            index++;
        } showSlide(index);

    }, settings.duration);
}

function showSlide(i) {
    index = i;
    if (i < 0) {
        index = slideCount - 1;
    } if (i >= slideCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);

}

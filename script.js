//Используем событие window.onload, чтобы запустить скрипт после загрузки страницы.
window.onload = function () {
    //Создаем переменные для круга и его родительского блока
    const container = document.querySelector(".container");
    const circle = document.querySelector(".circle");
    //продолжение кода ниже
    //Каждый раз, когда сдвигается курсор, используем его координаты для расчета координат круга и определения background-Position фона
    container.addEventListener("mousemove", function (event) {
        // Сдвинем координаты блока circle относительно координат курсора на 100 и 110 пикселей, чтобы визуально мышка была в центре круга.
        let xAxis = event.pageX - 100;
        let yAxis = event.pageY - 110;
        let s = "translate(" + xAxis + "px, " + yAxis + "px)";
        let s1 = "left " + (event.pageX / -1) + "px top " + (event.pageY / -1) + "px";
        circle.style.transform = s;
        circle.style.backgroundPosition = s1;
    });
}
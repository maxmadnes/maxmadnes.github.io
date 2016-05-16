
    var show = document.querySelector(".toggle-button");
    var popup = document.querySelector(".appointment-form");
    show.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("show-content");
    });

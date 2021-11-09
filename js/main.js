document.addEventListener("DOMContentLoaded", function (event) {
    main();
})
function main() {
    initBtnShowHide();
    initPlaceHolderPortfolio();
};
function initBtnShowHide() {
    let btn = document.querySelector("#btnShowHide");
    let arrayImage = document.querySelectorAll('.portfolio-image');

    let active = false;
    let timeout = true;
    let btnAction = function () {
        if (!timeout) return;
        timeout = false;
        setTimeout(() => {
            timeout = true;
        }, 500);
        if (active) {
            Array.from(arrayImage).map((elem) => { if (!elem.hasAttribute("data-hide")) elem.style.display = "none" });
            active = false;
            let box = document.querySelector(".block-portfolio");
            box.classList.remove("active-more");
            
        } else {
            Array.from(arrayImage).map(elem => elem.style.display = "block");
            active = true;
            let box = document.querySelector(".block-portfolio");
            box.classList.add("active-more");
            let test = document.querySelector(".greetings-text")
      
            test.scrollTo({top: 175, behavior: 'smooth'});
        }
    }
    btn.addEventListener("click", btnAction);
}
function initPlaceHolderPortfolio() {
    let arrayBtnInfoIcon = document.querySelectorAll(".icon-info");
    let timeout = true;
    for (let obj of Array.from(arrayBtnInfoIcon)) {
        let onClickInfo = function () {
            if (!timeout) return;
            timeout = false;
            setTimeout(() => {
                timeout = true;
            }, 500);
            let textAbout = obj.parentNode.querySelector("h2");
            let textAboutHeader = obj.parentNode.querySelector("h3");
            let textAboutMain = obj.parentNode.querySelector("p");
            let iconExit = obj.parentNode.querySelector(".icon-info-exit");
            let icon = obj.parentNode.querySelector(".icon-info");
            fadeOut(300, icon, textAbout)
            fadeIn(300, textAboutHeader, textAboutMain, iconExit)
        }
        obj.addEventListener('click', onClickInfo);
        let objExit = obj.parentNode.querySelector(".icon-info-exit");
        let exitInfo = function () {
            if (!timeout) return;
            timeout = false;
            setTimeout(() => {
                timeout = true;
            }, 500);
            let textAbout = obj.parentNode.querySelector("h2");
            let textAboutHeader = obj.parentNode.querySelector("h3");
            let textAboutMain = obj.parentNode.querySelector("p");
            let iconExit = obj.parentNode.querySelector(".icon-info-exit");
            let icon = obj.parentNode.querySelector(".icon-info");
            fadeIn(300, icon, textAbout)
            fadeOut(300, textAboutHeader, textAboutMain, iconExit)

        }
        objExit.addEventListener('click', exitInfo);
    }
}
function fadeOut(time, ...elem) {
    for (let obg of elem) {
        obg.style.opacity = 0;
        setTimeout(() => {
            obg.style.display = "none";
        }, time);
    }
}
function fadeIn(time, ...elem) {
    for (let obj of elem) {
        obj.style.opacity = 0;
        obj.style.display = "block";
        op = 0;
        time = time / 10
        let timer = setInterval(() => {
            op += 0.1;
            obj.style.opacity = op;
            if (op >= 1) {
                clearInterval(timer);
                obj.style.opacity = 1;
            };
        }, time);
    }
}
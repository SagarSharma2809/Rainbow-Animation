//we will make an automatic rainbow animation using Settimeout Function and callbacks

let start = document.querySelector("button");
let heading = document.querySelector("h1");

start.addEventListener("click", () => {


    document.querySelector("#disc").classList.add("animate");
    changeColor("indigo", 2000, () => {
        changeColor("blue", 2000, () => {
            changeColor("green", 2000, () => {
                changeColor("yellow", 2000, () => {
                    changeColor("orange", 2000, () => {
                        changeColor("red", 2000, () => {
                            heading.innerText = "Do it again please :)";
                            document.querySelector("#disc").classList.remove("animate");

                        });
                    })
                })
            })
        })
    })

    heading.innerText = "1...2...Django!";
    document.body.style.backgroundColor = "purple";


})


function changeColor(color, delay, doNext) {
    setTimeout(() => {
        document.body.style.backgroundColor = color;

        doNext && doNext();
    }, delay);
}
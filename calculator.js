const display = document.querySelector("#display");
console.log(display);

const button = document.querySelectorAll("button");
console.log(button);

button.forEach(function(button) {
    button.addEventListener("click", function(event) {
        console.log(button);

        if (event.target.textContent === "=") {

            try {
                const result = eval(display.value);

                if (!isFinite(result)) {
                    display.value = "Math Error";
                } else {
                    display.value = result;
                }

            } catch (error) {
                display.value = "Math Error";
            }

        } else if (event.target.textContent === "AC") {

            display.value = "";
         } else if (event.target.textContent === "DEL") {

            display.value = display.value.slice(0, -1); 
        } else {

            display.value = display.value + event.target.textContent;

        }
    });
});




function knowFactAboutTheNumber() {
    let userInputEl = document.getElementById("userInput");
    let spinnerEl = document.getElementById("spinner");
    let factEl = document.getElementById("fact");

    function display(jsonData) {
        spinnerEl.classList.toggle("d-none");
        factEl.textContent = jsonData.fact;
    }

    function SearchFun(event) {
        if (event.key === "Enter") {
            factEl.textContent = "";
            spinnerEl.classList.toggle("d-none");
            let value = userInputEl.value;
            if (value === "") {
                factEl.textContent = "";
                spinnerEl.classList.toggle("d-none");
                alert("Please Enter a Number");
            } else {
                let url = "https://apis.ccbp.in/numbers-fact?number=" + value;
                let options = {
                    method: "GET"
                };
                fetch(url, options)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(jsonData) {
                        display(jsonData);
                    });
            }
        }
    }
    userInputEl.addEventListener("keydown", SearchFun)
}
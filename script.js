 let string = "";
        let buttons = document.querySelectorAll(".button");

        Array.from(buttons).forEach((button) => {
            button.addEventListener("click", (e) => {

                try {
                    if (e.target.innerHTML == "=") {
                        string = eval(string);
                        document.querySelector("input").value = string;
                    }
                    else if (e.target.innerHTML == "AC") {
                        string = "";
                        document.querySelector("input").value = string;
                    }
                    else if (document.querySelector("input").value == "Error!"){
                        string = "";
                        document.querySelector("input").value = string;
                    }
                    else {
                        string = string + e.target.innerHTML;
                        document.querySelector("input").value = string;
                    }
                }
                catch (error) {
                    console.log(error);
                    document.querySelector("input").value = "Error!";
                }

            })
        })

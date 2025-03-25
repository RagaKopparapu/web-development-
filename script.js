document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("adoption-form").addEventListener("submit", function (event) {
                event.preventDefault(); 

                let fullName = document.getElementById("fullName").value;
                let email = document.getElementById("email").value;
                let selectedChild = document.getElementById("childSelect").value;

                if (fullName === "" || email === "") {
                    alert("Please fill out all fields.");
                    return;
                }

                alert(`Thank you, ${fullName}! Your adoption request for ${selectedChild} has been received.`);
                
                document.getElementById("adoption-form").reset();
            });

            document.querySelectorAll(".adopt-btn").forEach(button => {
                button.addEventListener("click", function () {
                    alert("Please fill out the adoption form to inquire about this child.");
                });
            });
        });

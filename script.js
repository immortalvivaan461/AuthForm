function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

$("#contact").on("input", function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});


function isStrongPassword(password) {
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/;
    return strongRegex.test(password);
        }


        let successmsg = "Successfully registered";
        let errormsg = "";
        $("#submitbtn").click(function (e) {

            e.preventDefault();

            errormsg = "";
            if (isEmail($("#email").val()) != true) {
                errormsg += "<p>Invalid Email</p>";
            }


            if ($.isNumeric($("#contact").val()) != true || $("#contact").val().length != 10) {
                errormsg += "<p>Invalid Contact</p>";
            }

            const password = $("#password").val();
            const confirmPassword = $("#re-password").val();

            if (password === "") {
                errormsg += "<p>Please enter password</p>";
            } else {
                if (!isStrongPassword(password)) {
                    errormsg += "<p>Password must include uppercase, lowercase, number, special character, and 8<=length<=15</p>";
                }
                if (password !== confirmPassword) {
                    errormsg += "<p>Passwords do not match</p>";
                }
            }

            if (errormsg != "") {
                $("#msg").html(errormsg).css({
                    "color": "white",
                    "background-color": "#e90a0a",
                    "margin-top": `2px`,
                    "margin-buttom": `2px`,
                    "width": `50%`,
                });
            } else {
                $("#msg").html(successmsg).css({
                    "color": "white",
                    "background-color": "green",
                    "margin-top": `2px`,
                    "margin-buttom": `2px`,
                    "width": `40%`,
                });
            }

        })

        $("#togglePassword").click(function (e) {
            e.preventDefault();
            let input = $("#password");
            let type = input.attr("type");
            if (type === "password") {
                input.attr("type", "text");
                $(this).text("Hide");
            } else {
                input.attr("type", "password");
                $(this).text("Show");
            }
        });

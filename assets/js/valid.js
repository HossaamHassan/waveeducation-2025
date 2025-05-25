document.addEventListener("DOMContentLoaded", () => {
    const inputsForm = document.querySelectorAll("input");
    const selectForm = document.querySelectorAll("select");
    const contactButton = document.querySelector("#contactButton");
    const isValid = true;

    inputsForm.forEach((input) => {
        const validationInput = input.parentElement.parentElement.querySelector(".validation");    
        function showErrorInputs(message) {
            validationInput.textContent = message;
            validationInput.classList.add("d-block");
            validationInput.classList.remove("d-none");
        }
        function hideErrorInputs() {
            validationInput.classList.remove("d-block");
            validationInput.classList.add("d-none");
        }
        // On Blur 
        input.addEventListener("blur", () => {
            // username
            if (input.id === "username") {
                if (input.value === "") {
                    showErrorInputs("من فضلك ادخل اسمك بالكامل");
                }
            }
            // phone number
            if(input.id === "student-phone" || input.id === "parent-phone" ) {
                const regex = /^[0-9]+$/;
                if (input.value.trim() === "") {
                    showErrorInputs("من فضلك ادخل رقم الهاتف");
                } else if (!regex.test(input.value)) {
                    showErrorInputs(" من فضلك ادخل رقم الهاتف باللغة الانجليزية");
                }
            }
            // password
            if(input.id === "password" ) {
                const regex = /^[A-Za-z0-9]+$/;
                if (input.value.trim() === "") {
                    showErrorInputs("من فضلك ادخل كلمة المرور");
                } else if (!regex.test(input.value)) {
                    showErrorInputs(" يجب ان تحتوى كلمة المرور على حروف وارقام انجليزية فقط");
                } else if (input.value.length <= 8) {
                    showErrorInputs(" من فضلك ادخل كلمة المرور اكثر من 8 ارقام");
                }
            }
            // school name 
            if (input.id === "school-name") {
                if (input.value.trim() === "") {
                    showErrorInputs("من فضلك ادخل اسم مدرستك");
                }
            }
        });
        // On Focus
        input.addEventListener("focus", () => {
            hideErrorInputs();
        });
    });

    selectForm.forEach((select) => {
        const validationSelect = select.parentElement.parentElement.querySelector(".validation");
        function showErrorSelect(message) {
            validationSelect.textContent = message;
            validationSelect.classList.add("d-block");
            validationSelect.classList.remove("d-none");
        }
        function hideErrorSelect() {
            validationSelect.classList.remove("d-block");
            validationSelect.classList.add("d-none");
        }
        // On Blur 
        select.addEventListener("blur", () => {
            // Governorate name
            if (select.id === "Governorate-name") {
                if (select.value === "اختر المحافظة") {
                    showErrorSelect("من فضلك اختر المحافظة");
                }
            }
            // Academic year
            if (select.id === "academic-year") {
                if (select.value === "اختر السنة الدراسية") {
                    showErrorSelect("من فضلك اختر السنة الدراسية");
                }
            }
            // Student Type
            if (select.id === "student-type") {
                if (select.value === "نوع الطالب") {
                    showErrorSelect("من فضلك اختر نوع الطالب ");
                }
            }
        });
        select.addEventListener("focus", () => {
            hideErrorSelect();
        });
    });
});
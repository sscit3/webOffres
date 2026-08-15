// تغيير لون التصنيف عند الضغط

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("click", () => {

        categories.forEach(c => c.classList.remove("active"));

        category.classList.add("active");

    });

});


// رسالة عند الضغط على زر موقعي الحالي

const locationBtn = document.querySelector(".primary");

locationBtn.addEventListener("click", () => {

    alert("تم تحديد موقعك الحالي بنجاح 📍");

});


// رسالة عند الضغط على عرض التفاصيل

const offerButtons = document.querySelectorAll(".offer-content button");

offerButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("سيتم فتح تفاصيل العرض.");

    });

});

const favs = document.querySelectorAll(".fav");

favs.forEach(fav => {

    fav.addEventListener("click", () => {

        fav.classList.toggle("fa-solid");
        fav.classList.toggle("fa-regular");
        fav.style.color = "#ef4444";

    });

});
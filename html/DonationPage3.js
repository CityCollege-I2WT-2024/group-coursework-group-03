var onetimeEls = document.getElementById("onetime");
var monthlyEls = document.getElementById("monthly");
var textonetimeEls = document.getElementById("onetime-text");
var textmonthlyEls = document.getElementById("monthly-text");

onetimeEls.addEventListener("click", function(){
    textonetimeEls.style.display = "block";
    textmonthlyEls.style.display = "none";
});

monthlyEls.addEventListener("click", function(){
    textmonthlyEls.style.display = "block";
    textonetimeEls.style.display = "none";
});
window.addEventListener("load", init);
function init(e){
$(document).ready(function(){
    $("#learn").click(function(){
        $("#dropdown").toggle();
    });
});

var faqs = document.querySelectorAll(".categories li");
	var ans = document.querySelectorAll(".answers");

	for (var i = 0; i < faqs.length; i++) {
		faqs[i].addEventListener("click", showAnswer, false);
		faqs[i].setAttribute("id", "q"+(i+1));
	}
	for (var i = 0; i < ans.length; i++) {
		ans[i].setAttribute("id", "a"+(i+1));
	}

	function showAnswer(e) {
		document.querySelector("#other").classList.remove("hidden");
		for (var i = 0; i < ans.length; i++) {
			if (e.target.id.substr(1, 1) == ans[i].id.substr(1, 1)) {
				ans[i].classList.remove("hidden");
				ans[i].classList.add("fadeIn", "items");
				faqs[i].classList.add("selected");
			} else {
				ans[i].classList.add("hidden");
				faqs[i].classList.remove("selected");
			}
		}
	}

}
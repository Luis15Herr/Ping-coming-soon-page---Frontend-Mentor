let form = document.querySelector(".form");
let input = document.querySelector(".form__input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    document.querySelector(".form").classList.remove("error");
    toast.className = "show";
    setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 3000);
    return true;
  }
  document.querySelector(".form").classList.add("error");
  return false;
});

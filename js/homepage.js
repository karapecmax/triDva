function myFunction(x) {
  x.classList.toggle("change");
  let menucontent = document.getElementById("menucontent");

  if (menucontent.style.display === "block") {
    menucontent.style.display = "none";
  } else {
    menucontent.style.display = "block";
  }
}

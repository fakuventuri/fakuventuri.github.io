function scrollToSection(e) {
  var targetSection = document.getElementById(e);
  targetSection.scrollIntoView({ behavior: "smooth" });
}

export { scrollToSection };

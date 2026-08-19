(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  document.querySelectorAll("[data-quote-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (name) {
        var el = form.elements.namedItem(name);
        return el && el.value ? el.value.trim() : "";
      };
      var lines = [
        "Name: " + get("name"),
        "Email: " + get("email"),
        "Phone: " + get("phone"),
        "Project: " + get("project"),
        "City: " + get("city"),
        "",
        get("message")
      ];
      var subject = encodeURIComponent("Project inquiry — Des Limited");
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href = "mailto:Deslimitedllc@gmail.com?subject=" + subject + "&body=" + body;
    });
  });
})();

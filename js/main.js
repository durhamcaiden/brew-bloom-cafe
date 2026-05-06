/* =============================================
   Brew & Bloom Café - Main JavaScript
   Author: ITEC 236 Final Project
   Date Created: 2025-04-01
   Date Tested:  2025-04-10
   Description:  jQuery + SlickNav responsive navigation
   ============================================= */

$(document).ready(function () {

  /* ---- SlickNav Responsive Navigation ---- */
  $("nav.main-nav ul").slicknav({
    prependTo: "nav.main-nav",
    label: "☰ Menu",
    closeOnClick: true,
    allowParentLinks: true,
  });

  /* ---- Active Nav Link Highlight ---- */
  var currentPage = window.location.pathname.split("/").pop();
  $("nav.main-nav ul li a").each(function () {
    if ($(this).attr("href") === currentPage) {
      $(this).addClass("active");
    }
  });

  /* ---- Form: simple front-end validation feedback ---- */
  if ($("#contactForm").length) {
    $("#contactForm").on("submit", function (e) {
      var valid = true;
      $(this).find("input[required], textarea[required]").each(function () {
        if ($(this).val().trim() === "") {
          $(this).css("border-color", "#c0392b");
          valid = false;
        } else {
          $(this).css("border-color", "#C8972B");
        }
      });
      if (!valid) {
        e.preventDefault();
        alert("Please fill in all required fields.");
      }
    });
  }

});

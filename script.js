$(function () {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const items = document.querySelectorAll("#sortable li img");
  const volgorde = Array.from(items).map(img => img.alt);
  console.log("Ingediende volgorde:", volgorde);

  document.getElementById("feedback").innerText =
    "Je hebt de volgende volgorde ingediend: " + volgorde.join(", ");
});

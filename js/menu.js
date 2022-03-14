const icnMenu = document.querySelector('.menu-icon');
icnMenu.addEventListener('click', () => {
    if (document.querySelector('input[type=checkbox]').checked) {
        $(".navigation").css("height", "100%");
}
else {
    $(".navigation").css("height", "0");
}
});
window.addEventListener("pagehide", () => {
            $('input:checkbox').prop('checked', false);
  });

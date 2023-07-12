$(document).ready(function () {
  $("area, span[data-title]").each(function () {
    $(this).tooltipster({
      theme: "tooltipster-light",
      animation: "grow",
      position: "bottom",
      functionPosition: function (instance, helper, position) {
        position.coord.left = 250;
        position.coord.top = 200;
        return position;
      },
      functionReady: function (instance, helper) {
        instance.content($(this).data("title"));
      }
    });
  });
});

const toggleShare = () => {
  document
    .querySelector(".card__footer")
    .classList.toggle("card__footer--share");
  document.querySelector(".share").classList.toggle("share--open");
  document.querySelector("#shareBtn").classList.toggle("btn--alt");
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#shareBtn").addEventListener("click", toggleShare);

  document.querySelector("#shareBtn").addEventListener("blur", (e) => {
    var nextTarget = e.relatedTarget;
    var actions = document.querySelectorAll(".share__actions > a");
    var nextTargetIsAction = false;
    actions.forEach(function (action) {
      nextTargetIsAction ||= nextTarget === action;
    });

    if (nextTargetIsAction) return;

    toggleShare();
  });
});

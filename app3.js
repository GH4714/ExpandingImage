// 여러개를 선택시 ~All 사용
const panels = document.querySelectorAll(".panel");

// 3. foreach
panels.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    removeAllActive();
    panel.classList.add("active");
  });
});

function removeAllActive() {
  panels.forEach(function (item) {
    item.classList.remove("active");
  });
}

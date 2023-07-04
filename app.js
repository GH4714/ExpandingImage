// 여러개를 선택시 ~All 사용
const panels = document.querySelectorAll(".panel");

// 1. 전통 반복문 (js = const, let)
for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener("mouseenter", function () {
    removeAllActive();
    panels[i].classList.add("active"); // 클래스 active 추가
  });
}

// 다른 클래스 active 삭제 (5개 모두 삭제)
function removeAllActive() {
  for (let i = 0; i < panels.length; i++) {
    panels[i].classList.remove("active"); // 클래스 active 삭제
  }
}

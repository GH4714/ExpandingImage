// 여러개를 선택시 ~All 사용
const panels = document.querySelectorAll(".panel");

// 2. for of 문
for (let panel of panels) {
  panel.addEventListener("mouseenter", function () {
    removeAllActive();
    panels[i].classList.add("active"); // 클래스 active 추가
  });
}

function removeAllActive() {
  for (let panel of panels) {
    panels[i].classList.remove("active"); // 클래스 active 삭제
  }
}

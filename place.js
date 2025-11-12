// Thông báo chào mừng
window.addEventListener("load", () => {
  alert("Chào mừng bạn đến với trang Khám phá Việt Nam!");
});

// Đổi màu navbar khi cuộn trang và hiển thị nút lên đầu
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const topBtn = document.getElementById("topBtn");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// Cuộn lên đầu trang
document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

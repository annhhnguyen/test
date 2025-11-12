// Hiệu ứng đổi màu navbar khi cuộn
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Nút "Lên đầu trang"
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Cuộn mượt khi nhấn navbar
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    // Chỉ áp dụng cuộn mượt cho các liên kết nội bộ (hash links)
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Đối với các liên kết khác (ví dụ: "midproject.html"), hãy để trình duyệt xử lý mặc định.
  });
});

let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;
  pages[currentPage].classList.add("active");
}

function restart() {
  pages[currentPage].classList.remove("active");
  currentPage = 0;
  pages[currentPage].classList.add("active");
}

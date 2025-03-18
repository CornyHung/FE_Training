// Normal fn
// function changeLanguage() {
//     console.log('abc');

// }

// Arrow fn
// en = english
// vi = VietNam
// Làm thế nào đẻ đổi được ngôn ngữ thay đổi url trên trang web
// Ví dụ: vi = http://127.0.0.1:5500/index.html?=vi
const changeLanguage = () => {
  const currentImage = document.querySelector(".change_language > img");
  const checkCurrentLang = currentImage.src.includes("vi");
  // Lấy ra node hiện tại
  currentImage.src = checkCurrentLang
    ? "./assets/eng_logo.svg"
    : "./assets/vi.png";
  if ("undefined" !== typeof history.pushState) {
    history.pushState(
      { page: "index.html" },
      "",
      checkCurrentLang ? "index.html" : "index.html?=vi"
    );
  } else {
    window.location.assign(url);
  }
};

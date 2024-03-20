console.log("welocome to the the website");
var viewMore = document.querySelectorAll(".viewed>p");
viewMore.forEach((item) => {
  item.onclick = () => {
    window.open("https://hianime.to/", "_blank");
  };
});

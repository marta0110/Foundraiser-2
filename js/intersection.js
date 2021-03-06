const section1 = document.querySelector(".section1");
const anchor1 = document.querySelector(
  ".sidenav_scroll .observer .dot-obs:nth-child(1)"
);
const section2 = document.querySelector(".section2");
const anchor2 = document.querySelector(
  ".sidenav_scroll .observer .dot-obs:nth-child(2)"
);
const section3 = document.querySelector(".section3_login");
const anchor3 = document.querySelector(
  ".sidenav_scroll .observer .dot-obs:nth-child(3)"
);
const section4 = document.querySelector(".section4_loggedin");
const anchor4 = document.querySelector(
  ".sidenav_scroll .observer .dot-obs:nth-child(4)"
);
let observerDailyTasks = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      anchor1.classList.add("activeAnchor");
    } else {
      anchor1.classList.remove("activeAnchor");
    }
  });
});
observerDailyTasks.observe(section1);
console.log("observe");
let section2observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      anchor2.classList.add("activeAnchor");
    } else {
      anchor2.classList.remove("activeAnchor");
    }
  });
});
section2observer.observe(section2);
let section3observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      anchor3.classList.add("activeAnchor");
    } else {
      anchor3.classList.remove("activeAnchor");
    }
  });
});
section3observer.observe(section3);
let section4observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      anchor4.classList.add("activeAnchor");
    } else {
      anchor4.classList.remove("activeAnchor");
    }
  });
});
section4observer.observe(section4);

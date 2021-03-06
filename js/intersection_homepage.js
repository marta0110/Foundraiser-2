let wrapperMenu = document.querySelector(".wrapper-menu");
let timesClicked = 0;
wrapperMenu.onclick = function() {
  timesClicked++;
  if (timesClicked % 2 == 0) {
    document.getElementById("mySidenav").style.width = "0";
    wrapperMenu.classList.toggle("open");
    console.log("close");
  } else {
    wrapperMenu.classList.toggle("open");
    document.getElementById("mySidenav").style.width = "50%";
    console.log("open");
  }
};
const section1 = document.querySelector(".swan");
const anchor1 = document.querySelector(
  ".sidenav_scroll .observer .dot-obs:nth-child(1)"
);
const section2 = document.querySelector(".donation");
const anchor2 = document.querySelector(
  ".sidenav_scroll .observer .dot-obs:nth-child(2)"
);
const section3 = document.querySelector(".events");
const anchor3 = document.querySelector(
  ".sidenav_scroll .observer .dot-obs:nth-child(3)"
);
const section4 = document.querySelector(".section4_loggedin");
const anchor4 = document.querySelector(
  ".sidenav_scroll .observer .dot-obs:nth-child(4)"
);
const section5 = document.querySelector(".volunteer_section");
const anchor5 = document.querySelector(
  ".sidenav_scroll .observer .dot-obs:nth-child(5)"
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
let section5observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      anchor5.classList.add("activeAnchor");
    } else {
      anchor5.classList.remove("activeAnchor");
    }
  });
});
section5observer.observe(section5);

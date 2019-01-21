let myChart = document.querySelector(".myChart").getContext("2d");
let myChart2 = document.querySelector(".myChart2").getContext("2d");
let myChart3 = document.querySelector(".myChart3").getContext("2d");

//FETCHING DATA FOR CHART NR 1 AND 2
const endpoint = "https://5bfd717f827c3800139ae958.mockapi.io/donationdatabase";
fetch("https://5bfd717f827c3800139ae958.mockapi.io/donationdatabase")
  .then(res => res.json())
  .then(database => {
    console.log(database);
    const myData = [];
    for (let i = 0; i < database.length; i++) {
      myData.push(database[i].amount);
      //const myData = database.map(databaseItem => databaseItem.amount)
    }
    console.log(myData);

    function getSum(total, num) {
      return total + Math.round(num);
    }

    const totalAmount = myData.reduce(getSum, 0);
    console.log(totalAmount);

    // DEFINING HOW MUCH IS LEFT OF TARGET AMOUNT TO REACH -CHART NR 1
    const AmountLeft = 16000 - totalAmount;
    console.log(AmountLeft);

    // COUNT UP EFFECT - TOTAL DONATION RAISED

    let options = {
      useEasing: true,
      useGrouping: true,
      separator: ",",
      decimal: "."
    };
    const totalDonations = new CountUp(
      "donation_amount",
      0,
      totalAmount,
      0,
      2.5,
      options
    );
    if (!totalDonations.error) {
      totalDonations.start();
    } else {
      console.error(totalDonations.error);
    }
    // GLOBAL SETTINGS FOR CHARTS

    Chart.defaults.global.defaultFontFamily = "Raleway";
    Chart.defaults.global.defaultFontWeight = "100";
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = "#262626";
    Chart.defaults.global.hover.mode = "nearest";
    Chart.defaults.global.animation.duration = 2500;
    Chart.defaults.global.animation.easing = "easeInOutCubic";
    Chart.defaults.global.tooltips.enabled = "true";
    Chart.defaults.global.tooltips.mode = "nearest";

    // CHART'S WIDTH CHANGED BY PARENT NODE

    myChart.canvas.parentNode.style.height = "auto";
    myChart.canvas.parentNode.style.width = "35vw";
    myChart2.canvas.parentNode.style.width = "75vw";
    myChart2.canvas.parentNode.style.height = "auto";
    myChart3.canvas.parentNode.style.height = "auto";
    myChart3.canvas.parentNode.style.width = "35vw";

    //APPLE CHART NR 1

    let DonationChart = new Chart(myChart, {
      type: "doughnut",
      data: {
        labels: ["Expected amount", "Donations"],
        datasets: [
          {
            label: "Total donations:" + totalAmount,
            data: [AmountLeft, totalAmount],
            backgroundColor: ["#CE9596", "#B1797A"]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Total donations",
          fontSize: 20
        },
        legend: {
          position: "right"
        },

        tooltips: {
          mode: "nearest",
          intersect: true
        },
        hover: {
          mode: "nearest",
          intersect: true
        }
      }
    });

    // CHART NR 2

    let Month = [];
    for (let i = 0; i < database.length; i++) {
      Month.push(database[i].date);
    }
    console.log(Month);

    // UNIFING THE DATES TO THE SAME VALUE

    Month = Month.map(v => {
      if (!isNaN(v)) {
        v *= 1000;
      }
      return new Date(v);
    });

    const Months = Month.map(v => v.toString());

    console.log(Months);

    let newMonths = Months.map(function(date) {
      return new Date(date).toLocaleDateString("nl-NL");
    });

    let DonationChart2 = new Chart(myChart2, {
      type: "line",
      data: {
        labels: newMonths,
        datasets: [
          {
            label: "Amount",
            data: myData,
            backgroundColor: "rgba(206,149,150, 0.8)",
            borderWidth: 2,
            borderColor: "#7B4C4D",
            hoverbackgroundColor: "#262626",
            pointBackgroundColor: "#7B4C4D",
            lineTension: 0.1
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Daily Amount of donations",
          fontSize: 20
        },

        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
                color: "#262626"
              },
              scaleLabel: {
                display: true
              },
              ticks: {
                beginAtZero: "true"
              }
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: true,
                color: "#262626"
              },
              ticks: {
                beginAtZero: "true"
              }
            }
          ]
        }
      }
    });
  });

// CHART NR 3

//fetching data
const endpoint_volunteer =
  "https://5c34c658ae60ba0014da4268.mockapi.io/volunteers";
fetch("https://5c34c658ae60ba0014da4268.mockapi.io/volunteers")
  .then(res => res.json())
  .then(database => {
    console.log(database);
    const myData = [];
    for (let i = 0; i < database.length; i++) {
      myData.push(database[i].volunteer);
    }
    console.log(myData);

    //filter data due to volunteer type

    const cleaningLakes = myData.filter(function(value) {
      return value === "cleaning lakes";
    }).length;

    console.log(cleaningLakes);

    const flyers = myData.filter(function(value) {
      return value === "flyers";
    }).length;

    console.log(flyers);

    const events = myData.filter(function(value) {
      return value === "helping in events";
    }).length;

    console.log(events);

    //APPLE CHART NR 3

    let VolunteerChart = new Chart(myChart3, {
      type: "bar",
      data: {
        labels: ["flyers", "cleaning lakes", "events"],
        datasets: [
          {
            label: "Volunteer Help",
            data: [flyers, cleaningLakes, events, 0],
            backgroundColor: "#CE9596"
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Volunteer help in each sector",
          fontSize: 20
        },
        legend: {
          display: false
        },

        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
                color: "#262626"
              },
              scaleLabel: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: true,
                color: "#262626"
              }
            }
          ]
        }
      }
    });
  });

//SET TIME OUT - TO REFRESH THE DATA IN THE DASHBOARDS
setTimeout(function() {
  location.reload();
}, 60000);

const endpoint = "https://5bfd717f827c3800139ae958.mockapi.io/donationdatabase";

fetch("https://5bfd717f827c3800139ae958.mockapi.io/donationdatabase")
    .then(res => res.json())
    .then(data => {
            console.log("data: ", data);

            const myData = [];

            for (let i = 0; i < data.length; i++) {
                const obj = data[i];
                myData.push(Number(obj.amount));

            }
            console.log(myData);
            const graph = document.querySelector("#myChart");

            const myChart = new Chart(graph, {
                    type: 'bar',
                    options: {
                        legend: false,
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                suggestedMin: 0,
                                suggestedMax: 2500,
                                beginAtZero: true,
                                min: 0,
                                max: 1000,
                                stepSize: 100
                              }
                            }
                          ]
                        }
                      },
                    data: {
                        labels: myData,
                    
                        datasets: [{
                            label: "mon",
                            data: myData,
                            backgroundColor: ["#262626"]

                        }]

                    }

                

            });

    })
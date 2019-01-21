const endpoint="https://5bfd717f827c3800139ae958.mockapi.io/donationdatabase";
fetch("https://5bfd717f827c3800139ae958.mockapi.io/donationdatabase").then(res=>res.json()).then(database=> {
    console.log(database);
    const dataLenght=10;
    const myData=[];
    let lastData=0;
    for(let i=0;
    i<database.length;
    i++) {
        const obj=database[i];
        myData.push(database[i].amount);
        console.log("show me the amount", myData[i])
    }
    const ctx=document.querySelector(".myChart");
    var chart=new Chart(ctx, {
        type:'bar', data: {
            labels:["Donated amount"], datasets:[ {
                data: [myData[0]], backgroundColor: '#CE9596'
            }
            , {
                data: [myData[1]], backgroundColor: '#E2AAAD'
            }
            , {
                data: [myData[2]], backgroundColor: '#7F5456'
            }
            , {
                data: [myData[3]], backgroundColor: '#5E3B3C'
            }
            ]
        }
        , options: {
            layout: {
                padding: {
                    left: 150, right: 0, top: 50, bottom: 0
                }
            }
            , labels: {
                defaultFontFamily: 'Raleway', fontColor: 'black'
            }
            , responsive:!1, legend:!1, scales: {
                xAxes:[ {
                    stacked: !0
                }
                ], yAxes:[ {
                    stacked: !0
                }
                ]
            }
        }
    }
    );
    for(let i=0;
    i<database.length;
    i++) {
        chart.data.datasets[i].data=myData[i];
        console.log(chart.data.datasets[i].data)
    }
}

)
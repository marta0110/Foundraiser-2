const endpoint = "https://5bfd717f827c3800139ae958.mockapi.io/donationdatabase";

fetch("https://5bfd717f827c3800139ae958.mockapi.io/donationdatabase")
   .then(res => res.json())
   .then(database => {
      console.log(database);

      const dataLenght = 10;
      const myData = [];
      let lastData = 0;

      for (let i = 0; i < database.length; i++) {
         const obj = database[i];

         myData.push(database[i].amount);
         console.log("show me the amount", myData[i]);

         // lastData = Number(obj.amount);

         //myData.push(lastData);
         // console.log(myData, lastData);

         //chart.data.datasets[i].data =[lastData];
         // console.log(chart.data.datasets[i]);

      }


      const ctx = document.querySelector("#myChart");
      var chart = new Chart(ctx, {
         type: 'bar',
         data: {
            labels: ["Donated amount"],
            datasets: [{

               data: [myData[0]],
               backgroundColor: '#22aa99'
            }, {

               data: [myData[1]],
               backgroundColor: '#994499'
            }, {

               data: [myData[2]],
               backgroundColor: '#316395'
            }, {

               data: [myData[3]],
               backgroundColor: '#262626'
            }]
         },
         options: {
            responsive: false,
            legend: false,
            scales: {
               xAxes: [{
                  stacked: true
               }],
               yAxes: [{
                  stacked: true
               }]
            }
         }
      });

      //for this version, only the manually put dataset works, it accesses the database,
      // fetches the correct amount and it shows in the console, but doesn't build it.

      for (let i = 0; i < database.length; i++) {
         // const obj = database[i];
         // chart.data.datasets[i].data ="[myData["+i+"] ";
         //  myData.push(database[i].amount);

         chart.data.datasets[i].data = myData[i];
         console.log(chart.data.datasets[i].data);



      }


   });
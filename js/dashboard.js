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
    const ctx = document.querySelector("#myChart");
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
         labels: ['Donations'],
         datasets: [{
          label: 'Donated',
          data: myData,
          backgroundColor: '#22aa99'
       }, {
          label: 'Donated',
          data: myData,
          backgroundColor: '#994499'
       }, {
          label: 'Donated',
          data: myData,
          backgroundColor: '#316395'
       }]
    },
      options: {
         responsive: false,
        legend:false,
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
    
  });
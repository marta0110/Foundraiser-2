<<<<<<< HEAD
let wrapperMenu=document.querySelector('.wrapper-menu');let timesClicked=0;wrapperMenu.onclick=function(){timesClicked++;if(timesClicked%2==0){document.getElementById("mySidenav").style.width="0";wrapperMenu.classList.toggle('open');console.log("close")}else{wrapperMenu.classList.toggle('open');document.getElementById("mySidenav").style.width="50%";console.log("open")}}
const section1=document.querySelector(".swan");const anchor1=document.querySelector(".sidenav_scroll .observer .dot-obs:nth-child(1)");const section2=document.querySelector(".donation");const anchor2=document.querySelector(".sidenav_scroll .observer .dot-obs:nth-child(2)");const section3=document.querySelector(".events");const anchor3=document.querySelector(".sidenav_scroll .observer .dot-obs:nth-child(3)");const section4=document.querySelector(".section4_loggedin");const anchor4=document.querySelector(".sidenav_scroll .observer .dot-obs:nth-child(4)");const section5=document.querySelector(".volunteer_section");const anchor5=document.querySelector(".sidenav_scroll .observer .dot-obs:nth-child(5)");let observerDailyTasks=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.intersectionRatio>0){anchor1.classList.add("activeAnchor")}else{anchor1.classList.remove("activeAnchor")}})});observerDailyTasks.observe(section1);console.log("observe")
let section2observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.intersectionRatio>0){anchor2.classList.add("activeAnchor")}else{anchor2.classList.remove("activeAnchor")}})});section2observer.observe(section2);let section3observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.intersectionRatio>0){anchor3.classList.add("activeAnchor")}else{anchor3.classList.remove("activeAnchor")}})});section3observer.observe(section3);let section4observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.intersectionRatio>0){anchor4.classList.add("activeAnchor")}else{anchor4.classList.remove("activeAnchor")}})});section4observer.observe(section4);let section5observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.intersectionRatio>0){anchor5.classList.add("activeAnchor")}else{anchor5.classList.remove("activeAnchor")}})});section5observer.observe(section5)
=======
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


      const ctx = document.querySelector(".myChart");
      var chart = new Chart(ctx, {
         type: 'bar',
         data: {
            labels: ["Donated amount"],
            datasets: [{

               data: [myData[0]],
               backgroundColor: '#CE9596'
            }, {

               data: [myData[1]],
               backgroundColor: '#E2AAAD'
               
            }, {

               data: [myData[2]],
               backgroundColor: '#7F5456'
            }, {

               data: [myData[3]],
               backgroundColor: '#5E3B3C'
            }]
         },
         options: {
            layout: {
               padding: {
                   left: 150,
                   right: 0,
                   top: 50,
                   bottom: 0
               }
           },
           
            labels: {
      
            defaultFontFamily: 'Raleway',
            fontColor: 'black'
            },
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
>>>>>>> 7939c9cd78bdad0398037ab8f715494ce768280e

var ctx = document.getElementById("myChart").getContext("2d");

// doughnut
var myChart = new Chart(ctx,{
    type:"bar",
    data:{
        labels:["python","javaScript","PHP","Java","C#","C++"],
        datasets:[
            {
                data: [13,12,7,15,9,11],
                label:"Programming Languages",
                 // Background Color
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
        
                // Border Color
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
        
                // Border Width
                borderWidth: 1,
            },
        ]
    },
    options:{
        responsive: true,
        layout:{
        //    padding:{
        //     left: 50,
        //     right: 0,
        //     top: 50,
        //     bottom: 0,
        //    }
        },
        tooltips:{
            enabled:true,
            backgroundColor:"black",
            titleFontFamily:"Comic Sans MS",
            titleFontSize: 30,
            titleFontStyle: "bold italic",
            titleFontColor: "White",
            titleAlign: "center",
            titleSpacing: 3,
            titleMarginBottom: 50,
            bodyFontFamily: "Comic Sans MS",
            bodyFontSize: 20,
            bodyFontSize: 20,
            bodyFontStyle:"italic",
            bodyFontColor:"white",
            bodyAlign:"center",
            bodySpacing: 3,
            text: "white"
        },
        title:{
            display: true,
            text : "Custom Chart Learning ",
            fontSize: 25,
            position:"bottom",
            fontStyle:"Comic Sans MS",
            fontStyle: "bold italic",
        },
        Animation:{
            duration : 5000
        }
    }
})
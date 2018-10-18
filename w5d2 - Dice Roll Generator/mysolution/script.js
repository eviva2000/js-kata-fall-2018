let valueCul = document.querySelector("#value");
let timeCul = document.querySelector("#time");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let total = document.querySelector("#total");

const diceValues = {
  totalRolls: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};
let totalrolls = diceValues.totalRolls;
// let valuesArray = Object.values(diceValues);

for (i = 0; i < 100; i++) {
  let rnd = Math.floor(Math.random() * 6) + 1;
  console.log(rnd);
  diceValues[rnd]++;
  totalrolls++;
  one.innerHTML = diceValues[1];
  two.innerHTML = diceValues[2];
  three.innerHTML = diceValues[3];
  four.innerHTML = diceValues[4];
  five.innerHTML = diceValues[5];
  six.innerHTML = diceValues[6];
}

createChart();
// CHART
function createChart() {
  let chart = document.querySelector("#random-chart");
  let myChart = new Chart(chart, {
    type: "bar",
    data: {
      labels: ["One", "Two", "Three", "Four", "Five", "Six"],
      datasets: [
        {
          label: "# of returned Value",
          data: [
            diceValues[1],
            diceValues[2],
            diceValues[3],
            diceValues[4],
            diceValues[5],
            diceValues[6]
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.3)",
            "rgba(54, 162, 235, 0.3)",
            "rgba(255, 206, 86, 0.3)",
            "rgba(75, 192, 192, 0.3)",
            "rgba(153, 102, 255, 0.3)",
            "rgba(255, 159, 64, 0.3)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}

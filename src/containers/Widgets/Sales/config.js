const data = {
  labels: ["Admissions", "Registrar", "Coaches", "Business", "Financial Aid"],
  datasets: [
    {
      data: [300, 100, 50, 75, 90],
      borderWidth: 1,
      borderColor: ["#ffffff", "#ffffff", "#ffffff"],
      backgroundColor: [
        "rgb(153, 102, 255)",
        "rgb(150, 162, 23)",
        "rgb(150, 102, 65)",
        "rgb(54, 16, 235)",
        "rgb(255, 99, 132)"
      ],
      hoverBackgroundColor: [
        "rgb(153, 102, 255)",
        "rgb(150, 162, 23)",
        "rgb(150, 102, 65)",
        "rgb(54, 16, 235)",
        "rgb(255, 99, 132)"
      ],
      hoverBorderColor: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]
    }
  ]
};

const settings = {
  cutoutPercentage: 70,
  legend: {
    position: "bottom",
    labels: {
      boxWidth: 15,
      fontFamily: "'Roboto', sans-serif",
      fontColor: "#424242",
      fontSize: 13,
      fontStyle: "bold",
      padding: 20
    }
  }
};

export { data, settings };

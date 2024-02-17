(function () {
    const Main = {
        init() {
            const that = this;
            const mainList = document.getElementById('main-list');
            console.log(mainList);
            const ctxOne = document.getElementById('myChartOne').getContext('2d');
            const ctxTwo = document.getElementById('myChartTwo').getContext('2d');
            Chart.Legend.prototype.afterFit = function() {
                this.height = this.height + 20;
            };
            const myChartOne = new Chart(ctxOne, {
                type: 'pie',
                data: {
                    labels: ['Green', 'Blue', 'Yellow', 'Orange', 'Red'],
                    datasets: [{
                        data: [12, 8, 12, 44, 24],
                        backgroundColor: ['#00e676', '#1e88e5', '#ffd600', '#ff5722', '#e91e63'],
                        borderWidth: 0.5,
                        borderColor: '#ddd'
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Доходы',
                        position: 'top',
                        fontSize: 28,
                        fontColor: '#290661',
                        padding: 20
                    },
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            boxWidth: 20,
                            fontColor: '#111',
                            padding: 20
                        }
                    },
                    tooltips: {
                        enabled: false
                    },
                    plugins: {
                        datalabels: {
                            color: '#111',
                            textAlign: 'center',
                            font: {
                                lineHeight: 1.6
                            },
                            formatter: function (value, ctxOne) {
                                return ctxOne.chart.data.labels[ctxOne.dataIndex] + '\n' + value + '%';
                            }
                        }
                    }
                },
            });

            const myChartTwo = new Chart(ctxTwo, {
                type: 'pie',
                data: {
                    labels: ['Green', 'Orange', 'Blue', 'Red', 'Yellow'],
                    datasets: [{
                        data: [28, 10, 22, 6, 34],
                        backgroundColor: ['#00e676', '#ff5722', '#1e88e5', '#e91e63', '#ffd600'],
                        borderWidth: 0.5,
                        borderColor: '#ddd'
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Расходы',
                        position: 'top',
                        fontSize: 28,
                        fontColor: '#290661',
                        padding: 20
                    },
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            boxWidth: 20,
                            fontColor: '#111',
                            padding: 20
                        }
                    },
                    tooltips: {
                        enabled: false
                    },
                    plugins: {
                        datalabels: {
                            color: '#111',
                            textAlign: 'center',
                            font: {
                                lineHeight: 1.6
                            },
                            formatter: function (value, ctxTwo) {
                                return ctxTwo.chart.data.labels[ctxTwo.dataIndex] + '\n' + value + '%';
                            }
                        }
                    }
                },
            });
        }

    };
    Main.init();
})();
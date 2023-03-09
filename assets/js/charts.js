var cTC, cTP, cDP, cCP, cJP, cWD, pCD, pTJ, pFJ;
fetch("https://opensheet.elk.sh/1JCY1OJkJhyJ9NF5QJVESdD4U5mVqxqXpxi--vDf3Yek/Data")
.then((res) => res.json())
.then((data) => {
    cTC = new Chart(
        document.getElementById('totalCitizens'),{
            type: 'line',
            data: {
                labels: data.map(row => {
                    if (row.gDate != '-') {
                        return row.gDate;
                    }
                }),
                datasets: [{
                    label: 'Citizens',
                    data: data.map(row => {
                        if (row.globalCitizens != undefined) {
                            var test = row.globalCitizens;
                            test = test.replace(/,/g, '')
                            return test;
                        }
                    }),
                    borderColor: '#b5b350',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                }]
            },
            options: {
                plugins: {
                    zoom: {
                        pan: { enabled: true, mode: 'x' },
                        zoom: { wheel: { enabled: true }, drag: { enabled: true }, pinch: { enabled: true } }
                    }
                }
            }
        }
    );

    cTP = new Chart(
        document.getElementById('totalPollution'),{
            type: 'line',
            data: {
                labels: data.map(row => {
                    if (row.gDate != '-') {
                        return row.gDate;
                    }
                }),
                datasets: [{
                    label: 'Pollution',
                    data: data.map(row => {
                        if (row.globalPollution != undefined) {
                            var test = row.globalPollution;
                            test = test.replace(/,/g, '')
                            return test;
                        }
                    }),
                    borderColor: '#4eb774',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                }]
            },
            options: {
                plugins: {
                    zoom: {
                        pan: { enabled: true, mode: 'x' },
                        zoom: { wheel: { enabled: true }, drag: { enabled: true }, pinch: { enabled: true } }
                    }
                }
            }
        }
    );

    cDP = new Chart(
        document.getElementById('dailytPollution'),{
            type: 'line',
            data: {
                labels: data.map(row => {
                    if (row.gDate != '-') {
                        return row.gDate;
                    }
                }),
                datasets: [{
                    label: 'Pollution',
                    data: data.map(row => {
                        if (row.dailyPollution != undefined) {
                            var test = row.dailyPollution;
                            test = test.replace(/,/g, '')
                            return test;
                        }
                    }),
                    borderColor: '#8aa642',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                }]
            },
            options: {
                animation: false,
                plugins: {
                    zoom: {
                        pan: { enabled: true, mode: 'x' },
                        zoom: { wheel: { enabled: true }, drag: { enabled: true }, pinch: { enabled: true } }
                    }
                }
            }
        }
    );
});

fetch("https://opensheet.elk.sh/1JCY1OJkJhyJ9NF5QJVESdD4U5mVqxqXpxi--vDf3Yek/World+Data")
.then((res) => res.json())
.then((data) => {
    cCP = new Chart(
        document.getElementById('citizenDistrubution'),{
            type: 'line',
            data: {
                labels: data.map(row => {
                    if (row.Date != '-') {
                        return row.Date;
                    }
                }),
                datasets: [{
                    label: 'L0 Citizens',
                    data: data.map(row => {
                        if (row.l0cit != undefined) {
                            var test0 = row.l0cit;
                            test0 = test0.replace(/,/g, '')
                            return test0;
                        }
                    }),
                    borderColor: '#2980B9',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L1 Citizens',
                    data: data.map(row => {
                        if (row.l1cit != undefined) {
                            var test1 = row.l1cit;
                            test1 = test1.replace(/,/g, '')
                            return test1;
                        }
                    }),
                    borderColor: '#27AE60',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L2 Citizens',
                    data: data.map(row => {
                        if (row.l2cit != undefined) {
                            var test2 = row.l2cit;
                            test2 = test2.replace(/,/g, '')
                            return test2;
                        }
                    }),
                    borderColor: '#8aa642',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L3 Citizens',
                    data: data.map(row => {
                        if (row.l3cit != undefined) {
                            var test3 = row.l3cit;
                            test3 = test3.replace(/,/g, '')
                            return test3;
                        }
                    }),
                    borderColor: '#F1C40F',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L4 Citizens',
                    data: data.map(row => {
                        if (row.l4cit != undefined) {
                            var test4 = row.l4cit;
                            test4 = test4.replace(/,/g, '')
                            return test4;
                        }
                    }),
                    borderColor: '#D35400',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L5 Citizens',
                    data: data.map(row => {
                        if (row.l5cit != undefined) {
                            var test5 = row.l5cit;
                            test5 = test5.replace(/,/g, '')
                            return test5;
                        }
                    }),
                    borderColor: '#C0392B',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                }]
            },
            options: {
                animation: false,
                plugins: {
                    zoom: {
                        pan: { enabled: true, mode: 'x' },
                        zoom: { wheel: { enabled: true }, drag: { enabled: true }, pinch: { enabled: true } }
                    }
                }
            }
        }
    );

    cJP = new Chart(
        document.getElementById('jobDistrubution'),{
            type: 'line',
            data: {
                labels: data.map(row => {
                    if (row.Date != '-') {
                        return row.Date;
                    }
                }),
                datasets: [{
                    label: 'L0 Citizens',
                    data: data.map(row => {
                        if (row.l0job != undefined) {
                            var test0 = row.l0job;
                            test0 = test0.replace(/,/g, '')
                            return test0;
                        }
                    }),
                    borderColor: '#2980B9',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L1 Citizens',
                    data: data.map(row => {
                        if (row.l1job != undefined) {
                            var test1 = row.l1job;
                            test1 = test1.replace(/,/g, '')
                            return test1;
                        }
                    }),
                    borderColor: '#27AE60',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L2 Citizens',
                    data: data.map(row => {
                        if (row.l2job != undefined) {
                            var test2 = row.l2job;
                            test2 = test2.replace(/,/g, '')
                            return test2;
                        }
                    }),
                    borderColor: '#8aa642',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L3 Citizens',
                    data: data.map(row => {
                        if (row.l3job != undefined) {
                            var test3 = row.l3job;
                            test3 = test3.replace(/,/g, '')
                            return test3;
                        }
                    }),
                    borderColor: '#F1C40F',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L4 Citizens',
                    data: data.map(row => {
                        if (row.l4job != undefined) {
                            var test4 = row.l4job;
                            test4 = test4.replace(/,/g, '')
                            return test4;
                        }
                    }),
                    borderColor: '#D35400',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L5 Citizens',
                    data: data.map(row => {
                        if (row.l5job != undefined) {
                            var test5 = row.l5job;
                            test5 = test5.replace(/,/g, '')
                            return test5;
                        }
                    }),
                    borderColor: '#C0392B',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                }]
            },
            options: {
                animation: false,
                plugins: {
                    zoom: {
                        pan: { enabled: true, mode: 'x' },
                        zoom: { wheel: { enabled: true }, drag: { enabled: true }, pinch: { enabled: true } }
                    }
                }
            }
        }
    );

    cWD = new Chart(
        document.getElementById('workforceDefecit'),{
            type: 'line',
            data: {
                labels: data.map(row => {
                    if (row.Date != '-') {
                        return row.Date;
                    }
                }),
                datasets: [{
                    label: 'L0 Citizens',
                    data: data.map(row => {
                        if (row.l0fjob != undefined) {
                            var test0 = row.l0fjob;
                            test0 = test0.replace(/,/g, '')
                            return test0;
                        }
                    }),
                    borderColor: '#2980B9',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L1 Citizens',
                    data: data.map(row => {
                        if (row.l1fjob != undefined) {
                            var test1 = row.l1fjob;
                            test1 = test1.replace(/,/g, '')
                            return test1;
                        }
                    }),
                    borderColor: '#27AE60',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L2 Citizens',
                    data: data.map(row => {
                        if (row.l2fjob != undefined) {
                            var test2 = row.l2fjob;
                            test2 = test2.replace(/,/g, '')
                            return test2;
                        }
                    }),
                    borderColor: '#8aa642',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L3 Citizens',
                    data: data.map(row => {
                        if (row.l3fjob != undefined) {
                            var test3 = row.l3fjob;
                            test3 = test3.replace(/,/g, '')
                            return test3;
                        }
                    }),
                    borderColor: '#F1C40F',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L4 Citizens',
                    data: data.map(row => {
                        if (row.l4fjob != undefined) {
                            var test4 = row.l4fjob;
                            test4 = test4.replace(/,/g, '')
                            return test4;
                        }
                    }),
                    borderColor: '#D35400',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                },{
                    label: 'L5 Citizens',
                    data: data.map(row => {
                        if (row.l5fjob != undefined) {
                            var test5 = row.l5fjob;
                            test5 = test5.replace(/,/g, '')
                            return test5;
                        }
                    }),
                    borderColor: '#C0392B',
                    borderWidth: 1,
                    backgroundColor: '#ffffff',
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointHoverRadius: 7
                }]
            },
            options: {
                animation: false,
                plugins: {
                    zoom: {
                        pan: { enabled: true, mode: 'x' },
                        zoom: { wheel: { enabled: true }, drag: { enabled: true }, pinch: { enabled: true } }
                    }
                }
            }
        }
    );

    pCD = new Chart(
        document.getElementById('totalCitizensPie'),{
            type: 'pie',
            data: {
                labels: [ 'Level 0', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5' ],
                datasets: [{
                    data: [data[data.length - 1].l0cit, data[data.length - 1].l1cit, data[data.length - 1].l2cit, data[data.length - 1].l3cit, data[data.length - 1].l4cit, data[data.length - 1].l5cit],
                    backgroundColor: [ '#8E44AD', '#2980B9', '#27AE60', '#F1C40F', '#D35400', '#C0392B' ],
                    hoverOffset: 4
                }]
            },
            options: {
                animations: {
                    animateScale: true,
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#FFFFFF' },
                        position: 'left'
                    },
                    title: {
                        color: '#FFFFFF',
                        display: true,
                        font: {
                            size: 16
                        },    
                        text: 'Citizen Distribution'
                    }
                }
            }
        }
    );

    pTJ = new Chart(
        document.getElementById('totalJobsPie'),{
            type: 'pie',
            data: {
                labels: [ 'Level 0', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5' ],
                datasets: [{
                    data: [data[data.length - 1].l0job, data[data.length - 1].l1job, data[data.length - 1].l2job, data[data.length - 1].l3job, data[data.length - 1].l4job, data[data.length - 1].l5job],
                    backgroundColor: [ '#8E44AD', '#2980B9', '#27AE60', '#F1C40F', '#D35400', '#C0392B' ],
                    hoverOffset: 4
                }]
            },
            options: {
                animations: {
                    animateRotate: true,
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#FFFFFF' },
                        position: 'left'
                    },
                    title: {
                        color: '#FFFFFF',
                        display: true,
                        font: {
                            size: 16
                        },    
                        text: 'Total Jobs'
                    }
                }
            }
        }
    );

    pFJ = new Chart(
        document.getElementById('totalFJobsPie'),{
            type: 'pie',
            data: {
                labels: [ 'Level 0', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5 ' ],
                datasets: [{
                    data: [data[data.length - 1].l0fjob, data[data.length - 1].l1fjob, data[data.length - 1].l2fjob, data[data.length - 1].l3fjob, data[data.length - 1].l4fjob, data[data.length - 1].l5fjob],
                    backgroundColor: [ '#8E44AD', '#2980B9', '#27AE60', '#F1C40F', '#D35400', '#C0392B' ],
                    hoverOffset: 4
                }]
            },
            options: {
                animations: {
                    animateRotate: true,
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#FFFFFF' },
                        position: 'left'
                    },
                    title: {
                        color: '#FFFFFF',
                        display: true,
                        font: {
                            size: 16
                        },    
                        text: 'Free Jobs'
                    }
                }
            }
        }
    );

    pDJ = new Chart(
        document.getElementById('totalDJobsPie'),{
            type: 'pie',
            data: {
                labels: [ 'Free', 'Active'],
                datasets: [{
                    data: [data[data.length - 1].totalFree, (data[data.length - 1].totalJobs - data[data.length - 1].totalFree)],
                    backgroundColor: [ '#8E44AD', '#2980B9' ],
                    hoverOffset: 4
                }]
            },
            options: {
                animations: {
                    animateRotate: true,
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#FFFFFF' },
                        position: 'left'
                    },
                    title: {
                        color: '#FFFFFF',
                        display: true,
                        font: {
                            size: 16
                        },    
                        text: 'Job Occupation'
                    }
                }
            }
        }
    );
});
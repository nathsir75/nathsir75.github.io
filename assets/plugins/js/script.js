
(function () {
    'use strict';

    // Toggle Sidebar
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('.main');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // Add active class to the sidebar link
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Add active class to the navbar link
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Check for body overflow-y and add class to body
    const hasOverflowY = () => {
        const body = document.querySelector('body');
        const overflowY = body.style.getPropertyValue('overflow-y');

        if (overflowY === 'scroll' || overflowY === 'auto') {
            body.classList.add('overflow-y-scroll');
        } else {
            body.classList.remove('overflow-y-scroll');
        }
    };

    // Add class to body on page load
    hasOverflowY();

    // Add class to body on resize
    window.addEventListener('resize', () => {
        hasOverflowY();
    });

    // Initialize simplebar
    new SimpleBar(document.querySelector('[data-simplebar]'), {
        autoHide: false,
        scrollbarMinSize: 10,
        scrollbarMaxSize: 10,
    });

    // Initialize flatpickr
    flatpickr('.flatpickr', {
        dateFormat: 'Y-m-d',
        enableTime: false,
        inline: true,
        minDate: 'today',
        mode: 'range',
        onChange: [
            function (selectedDates, dateStr, instance) {
                const startDate = selectedDates[0];
                const endDate = selectedDates[1];

                console.log('Start date:', startDate);
                console.log('End date:', endDate);
                console.log('Formatted date:', dateStr);
            },
        ],
    });

    // Initialize Chart.js
    const chartCanvas = document.getElementById('chartCanvas');
    const chart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3, 12],
                backgroundColor: '#3b7ddd',
                borderColor: '#3b7ddd',
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    // Initialize jvm
    const jvmContainer = document.querySelector('.jvm-container');
    const jvm = new JVM(jvmContainer, {
        animation: true,
        height: '400px',
        legend: {
            title: 'Sales',
        },
        series: [
            {
                data: [12, 19, 3, 5, 2, 3, 12],
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                type: 'line',
            },
        ],
        width: '100%',
    });

    // Initialize feather icons
    feather.replace();
}());

document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("chartjs-dashboard-line").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 225);
    gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
    gradient.addColorStop(1, "rgba(215, 227, 244, 0)");
    // Line chart
    new Chart(document.getElementById("chartjs-dashboard-line"), {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Sales ($)",
                fill: true,
                backgroundColor: gradient,
                borderColor: window.theme.primary,
                data: [
                    2115,
                    1562,
                    1584,
                    1892,
                    1587,
                    1923,
                    2566,
                    2448,
                    2805,
                    3438,
                    2917,
                    3327
                ]
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                intersect: false
            },
            hover: {
                intersect: true
            },
            plugins: {
                filler: {
                    propagate: false
                }
            },
            scales: {
                xAxes: [{
                    reverse: true,
                    gridLines: {
                        color: "rgba(0,0,0,0.0)"
                    }
                }],
                yAxes: [{
                    ticks: {
                        stepSize: 1000
                    },
                    display: true,
                    borderDash: [3, 3],
                    gridLines: {
                        color: "rgba(0,0,0,0.0)"
                    }
                }]
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Pie chart
    new Chart(document.getElementById("chartjs-dashboard-pie"), {
        type: "pie",
        data: {
            labels: ["Chrome", "Firefox", "IE"],
            datasets: [{
                data: [4306, 3801, 1689],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.warning,
                    window.theme.danger
                ],
                borderWidth: 5
            }]
        },
        options: {
            responsive: !window.MSInputMethodContext,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            cutoutPercentage: 75
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Bar chart
    new Chart(document.getElementById("chartjs-dashboard-bar"), {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "This year",
                backgroundColor: window.theme.primary,
                borderColor: window.theme.primary,
                hoverBackgroundColor: window.theme.primary,
                hoverBorderColor: window.theme.primary,
                data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
                barPercentage: .75,
                categoryPercentage: .5
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    stacked: false,
                    ticks: {
                        stepSize: 20
                    }
                }],
                xAxes: [{
                    stacked: false,
                    gridLines: {
                        color: "transparent"
                    }
                }]
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var markers = [{
        coords: [31.230391, 121.473701],
        name: "Shanghai"
    },
    {
        coords: [28.704060, 77.102493],
        name: "Delhi"
    },
    {
        coords: [6.524379, 3.379206],
        name: "Lagos"
    },
    {
        coords: [35.689487, 139.691711],
        name: "Tokyo"
    },
    {
        coords: [23.129110, 113.264381],
        name: "Guangzhou"
    },
    {
        coords: [40.7127837, -74.0059413],
        name: "New York"
    },
    {
        coords: [34.052235, -118.243683],
        name: "Los Angeles"
    },
    {
        coords: [41.878113, -87.629799],
        name: "Chicago"
    },
    {
        coords: [51.507351, -0.127758],
        name: "London"
    },
    {
        coords: [40.416775, -3.703790],
        name: "Madrid "
    }
    ];
    var map = new jsVectorMap({
        map: "world",
        selector: "#world_map",
        zoomButtons: true,
        markers: markers,
        markerStyle: {
            initial: {
                r: 9,
                strokeWidth: 7,
                stokeOpacity: .4,
                fill: window.theme.primary
            },
            hover: {
                fill: window.theme.primary,
                stroke: window.theme.primary
            }
        },
        zoomOnScroll: false
    });
    window.addEventListener("resize", () => {
        map.updateSize();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
    var defaultDate = date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate();
    document.getElementById("datetimepicker-dashboard").flatpickr({
        inline: true,
        prevArrow: "<span title=\"Previous month\">&laquo;</span>",
        nextArrow: "<span title=\"Next month\">&raquo;</span>",
        defaultDate: defaultDate
    });
});
// JavaScript to toggle dark/light mode
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('themeToggle');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');

    // Check local storage and apply saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        moonIcon.classList.add('d-none');
        sunIcon.classList.remove('d-none');
    }

    themeToggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        moonIcon.classList.toggle('d-none');
        sunIcon.classList.toggle('d-none');

        // Save the user's theme preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
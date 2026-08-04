Chart.defaults.font.family = "'IBM Plex Mono', monospace";
Chart.defaults.color = '#8A97AC';

const donutOpts = {
  type: 'doughnut',
  options: {
    cutout: '66%',
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: '#161E2C', borderColor: '#232E40', borderWidth: 1 }
    },
    maintainAspectRatio: false,
    responsive: true,
    animation: { duration: 0 }
  }
};

new Chart(document.getElementById('outcomeChart'), {
  ...donutOpts,
  data: {
    labels: ['Answered', 'Abandoned', 'Unparsed'],
    datasets: [{
      data: [58, 5, 0],
      backgroundColor: ['#33D17A', '#E5484D', '#3A4557'],
      borderColor: '#121824',
      borderWidth: 2
    }]
  }
});

new Chart(document.getElementById('cosChart'), {
  ...donutOpts,
  data: {
    labels: ['Wireless', 'VoIP', 'Wireline', 'TLMA & Other'],
    datasets: [{
      data: [49, 8, 1, 0],
      backgroundColor: ['#4FD1C5', '#F0A93A', '#33D17A', '#3A4557'],
      borderColor: '#121824',
      borderWidth: 2
    }]
  }
});

new Chart(document.getElementById('contactChart'), {
  ...donutOpts,
  data: {
    labels: ['911 Calls', 'Non-911 Admin', 'Outbound', 'Text/TTY'],
    datasets: [{
      data: [63, 136, 72, 0],
      backgroundColor: ['#4FD1C5', '#F0A93A', '#33D17A', '#3A4557'],
      borderColor: '#121824',
      borderWidth: 2
    }]
  }
});

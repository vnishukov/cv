$(document).ready(function () {
  var data = [
    {
      label: ['Optical Character Recognition', 'License Plate Recognition'],
      link: 'http://google.com/',
      data: 1
    },
    {
      label: ['Optical flow', 'Driver Assistance Systems', 'Object Tracking'],
      link: 'http://yahoo.com/',
      data: 1
    },
    {
      label: ['Object Detection', 'Object Recognition'],
      link: 'http://amazon.com/',
      data: 1
    },
    {
      label: ['Face Position Estimation', 'Gesture Recognition', 'Face Recognition'],
      link: 'http://oracle.com/',
      data: 1
    },
    {
      label: ['HeatMap', 'Face Detection'],
      link: 'http://yelp.com/',
      data: 1
    },
    {
      label: ['Motion Detection', 'Image Processing', 'Counting'],
      link: 'http://tripadvisor.com/',
      data: 1
    },
    {
      label: ['Inttrusion Area'],
      link: 'http://github.com/',
      data: 1
    },
    {
      label: ['Fire Detection'],
      link: 'http://ebay.com/',
      data: 1
    }
  ];

  $('.pie-chart').bind('plothover', function (event, pos, item) {
    if (item) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  });

  $('.pie-chart').bind('plotclick', function (event, pos, item) {
    if (item) {
      document.location.href = item.series.link;
    }
  });

  $.plot('.pie-chart', data, {
    series: {
      pie: {
        show: true,
        radius: 1,
        label: {
          show: true,
          radius: .7,
          formatter: labelFormatter,
          threshold: 0.1
        }
      }
    },
    legend: {
      show: false
    },
    grid: {
      hoverable: true,
      clickable: true
    }
  });

  function labelFormatter(label, series) {
    var result = '';
    _.each(label, function (entry) {
      result += '<a class="chart-label" href="' + series.link + '">' + entry + '</a>'
    });
    return result;
  }

  $('#pieLabel0').css('left', 580);
  $('#pieLabel1').css('top', 245);
});

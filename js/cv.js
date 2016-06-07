$(document).ready(function () {
  var data = [
    {
      label: ['Optical Character Recognition', 'License Plate Recognition'],
      data: 1
    },
    {
      label: ['Optical flow', 'Driver Assistance Systems', 'Object Tracking'],
      data: 1
    },
    {
      label: ['Object Detection', 'Object Recognition'],
      data: 1
    },
    {
      label: ['Face Position Estimation', 'Gesture Recognition', 'Face Recognition'],
      data: 1
    },
    {
      label: ['HeatMap', 'Face Detection'],
      data: 1
    },
    {
      label: ['Motion Detection', 'Image Processing', 'Counting'],
      data: 1
    },
    {
      label: ['Inttrusion Area'],
      data: 1
    },
    {
      label: ['Fire Detection'],
      data: 1
    }
  ];

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

  function labelFormatter(label) {
    var result = '';
    _.each(label, function (entry) {
      result += '<p><strong>' + entry + '</strong></p>'
    });
    return result;
  }

  $('#pieLabel0').css('left', 585);
  $('#pieLabel1').css('top', 240);
});

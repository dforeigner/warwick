$(document).foundation();

$().ready(function () {
    var showData = $('#show-data');

    $.getJSON('data/data.json', function (data) {
      console.log(data);

      var items = data.issuesWeeklyData.series.map(function (item) {
        return '<div><b>' + item.title + '</b><br /> <p>' + item.points + '</p></div>';
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });

$().ready(function () {
    var showData = $('#show-issueData');

    $.getJSON('data/data.json', function (data) {
      console.log(data);

      var items = data.issuesData.map(function (item) {
        return '<ul class="pricing-table"><li class="title">' + item.issueName + '</li><li class="price">$' + item.cost + '</li><li class="bullet-item"> Faults - ' + item.faults + '</li><li class="bullet-item">Status - ' + item.solutionStatus + '</li><li class="cta-button"><a class="button" href="'+item.issueUrl+'">Details</a></li></ul>' ;
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });

$().ready(function () {
    var showData = $('#show-totalsData');

    $.getJSON('data/data.json', function (data) {
      console.log(data);

      var items = data.totals.map(function (item) {
        return '<table><thead><tr><th>Total completed</th><th>With issues</th><th>Without issues</th><th>Total cost</th></tr></thead><tbody><tr ><td>' + item.total + '</td><td>' + item.withIssues + '</td><td>' + item.withoutIssues + '</td><td>$' + item.totalCost +'</td></tr></tbody></table>' ;
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });
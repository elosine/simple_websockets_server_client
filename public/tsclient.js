// create a timesync instance
var ts = timesync.create({
  server: '/timesync',
  interval: 10000
});

// get notified on changes in the offset
ts.on('change', function (offset) {
  document.write('changed offset: ' + offset + ' ms<br>');
});

// get synchronized time
setInterval(function () {
  var now = new Date(ts.now());
  document.write('now: ' + now.getTime() + ' ms<br>');
}, 1000);

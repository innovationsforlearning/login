window.expect = chai.expect;

beforeEach(function() {
  $("body").append("<div id='fixtures'/>");
});

afterEach(function() {
  $("#fixtures").remove();
});

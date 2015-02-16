describe('login', function() {

  var subject;

  beforeEach(function() {
    subject = new Ifl.login();
  });

  describe("setting urls", function() {
    it("sets a production url", function() {
      Ifl.login.setProductionUrl();
      expect(Ifl.login.productionApiUrl).to.equal('https://iflauthexample-webapp.herokuapp.com');
    });

    // it("sets a development url", function() {
    //   login.setDevelopmentUrl();
    //   expect(login.developmentApiUrl).to.equal('http://localhost:3000');
    // });
  });

  // describe("cacheElements", function() {

  //   beforeEach(function() {
  //     login.cacheElements();
  //   });

  //   it("saves a reference to the game container", function() {
  //     expect(login.$gameContainer).to.exist;
  //     expect(login.$gameContainer).to.have.id("gameContainer");
  //   });

  //   it("saves a reference to the submit button", function() {
  //     expect(login.$submit).to.exist;
  //     expect(login.$submit).to.have.id("submit");
  //   });

  //   it("saves a reference to the email field", function() {
  //     expect(login.$email).to.exist;
  //     expect(login.$email).to.have.id("email-field");
  //   });

  //   it("saves a reference to the password field", function() {
  //     expect(login.$password).to.exist;
  //     expect(login.$password).to.have.id("password-field");
  //   });

  //   it("saves a reference to the login container", function() {
  //     expect(login.$login).to.exist;
  //     expect(login.$login).to.have.id("login");
  //   });
  // });

  // it("sets the current user", function() { // how do you fake out the response data?
  //   responseData = { firstname:"Cool", lastname: "Person", token: "abc123"};
  //   login.setCurrentUser(responseData);
  //   expect(login.currentUser.firstname).to.equal("Cool");
  //   expect(login.currentUser.lastname).to.equal("Person");
  //   expect(login.currentUser.token).to.equal("abc123");
  // });

  // it("registers the submit click event", function() {
  //   var request;
  //   login.cacheElements();
  //   login.registerEvents();
  //   login.$submit.trigger("click");
  //   request = _.first(requests);
  //   expect(request.method).to.equal("POST");
  //   expect(request.url).to.equal("https://iflauthexample-webapp.herokuapp.com");
  //   expect(request.requestHeaders.Accept).to.match(/application\/json/);
  // });

  // it("sets the current user on loginSuccess", function() {
  //   responseData = { firstname:"Cool", lastname: "Person", token: "abc123"};
  //   successCallback = "success";
  //   login.loginSuccess(responseData, successCallback);
  //   expect(login.currentUser).to.equal(responseData);
  // });

  // it("it does not set the current user on login failure", function() {
  //   login.loginFailure();
  //   expect(login.currentUser).to.be.nil
  // });
});

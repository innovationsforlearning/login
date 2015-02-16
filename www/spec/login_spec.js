describe('Ifl.login', function() {

  describe("setting urls", function() {
    it("sets a production url", function() {
      Ifl.login.setProductionUrl();
      expect(Ifl.login.productionApiUrl).to.equal('https://iflauthexample-webapp.herokuapp.com');
    });

    it("sets a development url", function() {
      Ifl.login.setDevelopmentUrl();
      expect(Ifl.login.developmentApiUrl).to.equal('http://localhost:3000');
    });
  });

  describe("cacheElements", function() {

    beforeEach(function() {
      // appendFixture("input", { id: "autocomplete", type: "text", name: "autocomplete" });
      appendFixture("div", { id: "loginContainer"});
      appendFixture("input", { id: "email-field", type: "text", name: "email"});
      appendFixture("input", { id: "password-field", type: "password", name: "password"});
      appendFixture("input", { id: "submit", type: "button"});
      appendFixture("div", { id: "gameContainer"});
      Ifl.login.cacheElements();
    });

    it("saves a reference to the login container", function() {
      expect(Ifl.login.$loginContainer).to.exist;
      expect(Ifl.login.$loginContainer).to.have.id("loginContainer");
    });

    it("saves a reference to the email field", function() {
      expect(Ifl.login.$email).to.exist;
      expect(Ifl.login.$email).to.have.id("email-field");
    });

    it("saves a reference to the password field", function() {
      expect(Ifl.login.$password).to.exist;
      expect(Ifl.login.$password).to.have.id("password-field");
    });

    it("saves a reference to the submit button", function() {
      expect(Ifl.login.$submit).to.exist;
      expect(Ifl.login.$submit).to.have.id("submit");
    });

    it("saves a reference to the game container", function() {
      expect(Ifl.login.$gameContainer).to.exist;
      expect(Ifl.login.$gameContainer).to.have.id("gameContainer");
    });
  });

  // it("sets the current user", function() { // how do you fake out the response data?
  //   responseData = { firstname:"Cool", lastname: "Person", token: "abc123"};
  //   Ifl.login.setCurrentUser(responseData);
  //   expect(Ifl.login.currentUser.firstname).to.equal("Cool");
  //   expect(Ifl.login.currentUser.lastname).to.equal("Person");
  //   expect(Ifl.login.currentUser.token).to.equal("abc123");
  // });

  // it("registers the submit click event", function() {
  //   var request;
  //   Ifl.login.cacheElements();
  //   Ifl.login.registerEvents();
  //   Ifl.login.$submit.trigger("click");
  //   request = _.first(requests);
  //   expect(request.method).to.equal("POST");
  //   expect(request.url).to.equal("https://iflauthexample-webapp.herokuapp.com");
  //   expect(request.requestHeaders.Accept).to.match(/application\/json/);
  // });

  // it("sets the current user on Ifl.loginSuccess", function() {
  //   responseData = { firstname:"Cool", lastname: "Person", token: "abc123"};
  //   successCallback = "success";
  //   Ifl.login.Ifl.loginSuccess(responseData, successCallback);
  //   expect(Ifl.login.currentUser).to.equal(responseData);
  // });

  // it("it does not set the current user on Ifl.login failure", function() {
  //   Ifl.login.Ifl.loginFailure();
  //   expect(Ifl.login.currentUser).to.be.nil
  // });
});

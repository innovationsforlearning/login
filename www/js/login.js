var Ifl = Ifl || {};
Ifl.login = {

  addLoginModule: function(callback) {
    this.successCallback = callback;
    this.setProductionUrl(); // combine into set urls?  add detection into script. How to get Env?
    this.setDevelopmentUrl();
    this.cacheElements();
    this.$gameContainer.hide();
    this.registerEvents();
  },

  setProductionUrl: function() {
    this.productionApiUrl = 'https://iflauthexample-webapp.herokuapp.com';
  },

  setDevelopmentUrl: function () {
    this.developmentApiUrl = 'http://localhost:3000';
  },

  cacheElements: function() {
    this.$loginContainer = $("#loginContainer");
    this.$email = $("#email-field");
    this.$password = $("#password-field");
    this.$submit = $("#submit");
    this.$gameContainer = $("#gameContainer");
  },

  registerEvents: function() {
    this.$submit.on("click", this.loginUser);
  },

  setCurrentUser: function(responseData) {
    this.currentUser = responseData; //this needs to be global
  },

  loginUser: function(event) {
    var request = $.ajax({
      type: 'POST',
      // url: this.productionApiUrl + '/users/sign_in.json',  // need url switching
      url: 'https://iflauthexample-webapp.herokuapp.com/users/sign_in.json',
      // url: 'http://localhost:3000/users/sign_in.json',
      crossDomain: true,
      data: {
        user: {
          email: $("#email-field").val(),
          password: $("#password-field").val()
        },
      },
      dataType: 'json',
    })
    request.done(this.loginSuccess);
    request.fail(this.loginFailure);
  },

  loginSuccess: function(responseData) {
    this.setCurrentUser(responseData);
    this.$loginContainer.hide();
    this.$gameContainer.show();
    this.successCallback();
  },

  loginFailure: function() {
    alert("There was a problem, please try again.");
  }
}

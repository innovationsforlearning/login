var Ifl = Ifl || {};
Ifl.login = {

  // addLoginModule: function(callback) {
  //   this.successCallback = callback;
  //   setProductionUrl(); // combine into set urls?  add detection into script. How to get Env?
  //   setDevelopmentUrl();
  //   cacheElements();
  //   this.$gameContainer.hide();
  //   registerEvents();
  // },

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

  // registerEvents: function() {
  //   this.$submit.on("click", loginUser);
  // },

  // setCurrentUser: function(responseData) {
  //   this.currentUser = responseData; //this needs to be global
  // },

  // loginUser: function(event) {
  //   $.ajax({
  //     type: 'POST',
  //     url: productionApiUrl + '/users/sign_in.json',  // need url switching
  //     // url: 'http://localhost:3000/users/sign_in.json',
  //     crossDomain: true,
  //     data: {
  //       user: {
  //           email: event.$email.val(), //does this need event?
  //           password: $password.val()
  //       },
  //     },
  //     dataType: 'json',
  //   })
  //   .done(this.loginSuccess(responseData, this.successCallback))
  //   .fail(this.loginFailure);
  // },

  // loginSuccess: function(responseData, successCallback) {
  //   this.setCurrentUser(responseData);
  //   this.$loginContainer.hide();
  //   successCallback();
  // },

  // loginFailure: function() {
  //   alert("There was a problem, please try again.");
  // }
}

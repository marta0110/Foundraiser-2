//google sign in

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log("Full Name: " + profile.getName());
  console.log("Given Name: " + profile.getGivenName());
  console.log("Family Name: " + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

//fb sign in

window.fbAsyncInit = function() {
  FB.init({
    appId: "2253051438244282",
    xfbml: true,
    version: "v3.2"
  });
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

function TestAPI() {
  FB.api("/me?fields=id,name,email", function(response) {
    if (response && !response.error) {
      console.log(response);
      console.log(response.name);

      //buildProfile (response);
      localStorage.setItem("name", response.name);
      localStorage.setItem("email", response.email);
      localStorage.setItem("FName", response.name);
      window.location = "donation_loggedin.html";
    }
  });
}

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function statusChangeCallback(responce) {
  if (responce.status === "connected") {
    console.log("loged in");
    TestAPI();
  } else {
    console.log("error");
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

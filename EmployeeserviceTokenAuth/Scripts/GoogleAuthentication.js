/// <reference path="jquery-3.4.1.min.js" />

function GetAccessToken() {
    if (location.hash) {
        if (location.hash.split('access_token=')) {
            var accesstoken = location.hash.split('access_token=')[1].split('&')[0];
            if (accesstoken) {
                alert("1");
                IsUserRegistered(accesstoken);
            }
            
        }
    }
}
function IsUserRegistered(accesstoken) {
    $.ajax({
        url: 'api/Account/UserInfo',
        method: 'GET',
        headers: {
            'content_type': 'application/JSON',
            'Authorization': 'Bearer ' + accesstoken
        },
        success: function (response) {
            if (response.HasRegistered) {
                alert('enterted if');
                localStorage.setItem("accessToken", accesstoken);
                localStorage.setItem("userName", response.Email);
                window.location.href = "Data.html";
            }
            else {
                alert('enterted else');
                signupExternalUser(accesstoken, response.LoginProvider);
            }
        }
    });
}

function signupExternalUser(accesstoken,provider) {
    alert("5");
    alert(accesstoken);
    alert(provider);
    $.ajax({
        url: '/api/Account/RegisterExternal',
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + accesstoken
        },
        success: function () {
            window.location.href =  "/api/Account/ExternalLogin?provider="+provider+"&response_type=token&client_id=self&redirect_uri=https%3A%2F%2Flocalhost%3A44385%2FLogin.html&state=qmqVVgepY9ljkvAtcKbUIUgRWdRpYcTB3vV6QUcCrC01";
        }
        
    });
}
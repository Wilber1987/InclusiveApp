function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
//var Url_Path = "http://localhost:6601/";
var Url_Path = "https://165.98.8.46/";
var UserSeason;
const instModules = new FooterNavigator({
    class: "FooterNav",
    id: "FooterNav",
    style: ""
});
const OnLoad = async () => {
    const BodyComponents = new MasterDomClass();
    BodyRoot.appendChild(createElement(BodyComponents));
    document.addEventListener('backbutton', function (evt) {
        evt.preventDefault();
        if (cordova.platformId !== 'windows') {
            alert("no es windows");
            return;
        }    
        if (window.location.href === firstPageUrl) {
            alert("first Page");
            //window.history.back();
        } else {
            alert("no es  error");
            throw new Error('Exit'); // This will suspend the app
        }
    }, false);
    onDeviceReady()
    //onDeviceReady()
}



function onDeviceReady() {
    // Register the event listener
    document.addEventListener('backbutton', function (evt) {
        evt.preventDefault();
        alert("no es windows");
        if (cordova.platformId !== 'windows') {
            alert("no es windows");
            return;
        }    
        if (window.location.href === firstPageUrl) {
            alert("first Page");
            //window.history.back();
        } else {
            alert("no es  error");
            throw new Error('Exit'); // This will suspend the app
        }
    }, false);
}
//document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('deviceready', OnLoad, false);
window.addEventListener('load', OnLoad, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
//var Url_Path = "http://localhost:6601/";
var Url_Path = "https://165.98.8.46/";
var UserSeason;
const instModules = new FooterNavigator( {class: "FooterNav", 
id: "FooterNav", 
style: ""});
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    alert("cerrar app...")
}

const OnLoad =  async () => {     
    const BodyComponents = new MasterDomClass();
    BodyRoot.appendChild(createElement(BodyComponents));
    onDeviceReady()
}
//document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('deviceready', OnLoad, false);
window.addEventListener('load', OnLoad, false);
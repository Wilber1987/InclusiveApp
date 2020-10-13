function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
var Url_Path = "http://localhost:6601/"; //getAbsolutePath();

const OnLoad =  async () => {     
    const BodyComponents = new MasterDomClass();
    BodyRoot.appendChild(createElement(BodyComponents));
}
//document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('deviceready', OnLoad, false);
window.addEventListener('load', OnLoad, false);
function DisplayAcordeon(value, SectionId, size = null) {

    if (size == null) {
        size = "500px";
    }
    var acc = document.getElementsByClassName("GroupFormAcordeon");
    for (var i = 0; i < acc.length; i++) {
        ventanaM = acc[i];
        if (ventanaM.id != SectionId) {
            //  if (ventanaM.style.height != "300px") {
            ventanaM.style.transition = "all ease 1s";
            ventanaM.style.height = "0px";
            //ventanaM.style.overflow = "scroll";
        } else {
            ventanaM.style.transition = "all ease 1s";
            ventanaM.style.height = size;
            //ventanaM.style.oveflow = "hidden";
        }
    }
}

function DisplayUniqAcorden(elementId) {
    let SectionElement = GetObj(elementId);
    if (SectionElement.style.display == "none") {
        SectionElement.style.display = "block";
        setTimeout(() => {
            SectionElement.style.maxHeight = "800px";
            SectionElement.style.minHeight = "300px";
        }, 100);
    } else {
        SectionElement.style.maxHeight = "0px";
        SectionElement.style.minHeight = "0px";
        setTimeout(() => {
            SectionElement.style.display = "none";
        }, 1000);
    }
}

//*****DOM TOOLS */

//AJAXTOOLS----------------------------------------

class AjaxTools {
    constructor() {}
    static PostRequest = async(Url, Data = {}) => {
        try {
            let response = await fetch(Url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(Data)
            });
            if (response.status == 404 || response.status == 500) {
                console.log("ocurrio un error: " + response.status);
                if (typeof responseLocal !== "undefined" && typeof responseLocal !== "null" && responseLocal != "") {
                    return this.LocalData(Url);
                } else {
                    return [];
                }
            } else {
                response = await response.json();
                
                localStorage.setItem(Url, JSON.stringify(response));
                return response;
            }
        } catch (error) {
            if (error == "TypeError: Failed to fetch") {
                return this.LocalData(Url);
            }
        }
    }
    static GetRequest = async(Url) => {
        try {
            let response = await fetch(Url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
            });
            if (response.status == 404 || response.status == 500) {
                console.log("ocurrio un error: " + response.status);
                if (typeof responseLocal !== "undefined" && typeof responseLocal !== "null" && responseLocal != "") {
                    return this.LocalData(Url);
                } else {
                    return [];
                }
            } else {
                response = await response.json();
                localStorage.setItem(Url, JSON.stringify(response));
                return response;
            }
        } catch (error) {
            if (error == "TypeError: Failed to fetch") {
                return this.LocalData(Url);
            }
        }
    }
    static LocalData = (Url) => {
        let responseLocal = localStorage.getItem(Url);
        return JSON.parse(responseLocal);
    }
}
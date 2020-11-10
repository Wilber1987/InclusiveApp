//import {DomComponent}  from "../../MasterDomClass.js";
class MyPerfil {
    constructor(props, UserSeasonParam) {
        this.type = "div";
        this.props = props;
        this.MyLoginData = UserSeasonParam;
        this.children.push({
            type: "div", children: [
                {
                    type: 'img', props: {
                        src: "data:image/png;base64," + UserSeasonParam.Photo,
                        class: "imgPhoto"
                    }
                },
                { type: 'label', props: { innerText: "Usuario: " + this.MyLoginData.Username } },
                { type: 'label', props: { innerText: "Nombres: " + this.MyLoginData.Name } },
                { type: 'label', props: { innerText: "Apellidos: " + this.MyLoginData.LastName } },
                { type: 'label', props: { innerText: "Correo: " + this.MyLoginData.Mail } },
            ]
        })
    }
    children = [
        {
            type: 'h1', props: { id: "", class: "" },
            children: ["Mi Perfil"]
        }
    ]
}

//export {MyLogin}
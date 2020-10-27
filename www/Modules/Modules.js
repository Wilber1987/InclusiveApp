//import {CreateTable, DrawTable}  from "../Scripts/Modules/WComponents.js";

class Modules {
    constructor(props) {
        this.type = "div";
        this.props = props;
        this.children = [];
        this.children.push(
            {
                type: 'h3', props: { id: "", class: "" },
                children: ["Mis Módulos"]
            }
        );
        if (this.props.MyModules) {
            this.children.push({
                type: 'div', props: { id: "", class: "SliderContainer" },
                children: [
                    {
                        type: "div", props: { id: "GrupFormCardCarrocel", class: "GrupFormCardCarrocel" },
                        children: this.StartModuleList(this.props.MyModules)
                    },
                    {
                        type: "div", props: {
                            id: "", class: "btn-prev",
                            onclick: () => { myFunctionPrev('GrupFormCardCarrocel') }
                        }, children: ["<"]
                    },
                    {
                        type: "div", props: {
                            id: "", class: "btn-next",
                            onclick: () => { myFunctionNext('GrupFormCardCarrocel') }
                        }, children: [">"]
                    }
                ]
            });
        } else {
            this.events = {
                load: () => {
                    console.log("recuperando modulos....")
                }
            }
        }
        this.children.push(
            {
                type: 'h3', props: { id: "", class: "" },
                children: ["Modulos Recomendados"]
            }
        );
        //console.log(this.props.modules.length)
        if (this.props.modules && this.props.modules.length != 0) {
            this.children.push({
                type: 'div', props: { id: "", class: "SliderContainer" },
                children: [
                    {
                        type: "div", props: { id: "GrupFormCardCarrocelModules", class: "GrupFormCardCarrocel" },
                        children: this.StartModuleList(this.props.modules, false)
                    },
                    {
                        type: "div", props: {
                            id: "", class: "btn-prev",
                            onclick: () => { myFunctionPrev('GrupFormCardCarrocelModules') }
                        }, children: ["<"]
                    },
                    {
                        type: "div", props: {
                            id: "", class: "btn-next",
                            onclick: () => { myFunctionNext('GrupFormCardCarrocelModules') }
                        }, children: [">"]
                    }
                ]
            });
        } else {
            this.children.push({
                type: 'section', props: { id: "Modulos recomendados...", class: "Message" },
                children: ["No hay nuevos módulos"]
            });
        }
    }
    StartModuleList = (modules, view = true) => {
        let ApiUrlUpdate = "";
        let ApiUrlCreate = "";
        let ApiUrlDelete = "";
        let ApiUrlSelect = "";

        let Label = "Go...!";
        if (view == false) {
            Label = "+Add";
        }
        //  console.log(modules);
        let Cards = [];
        modules.forEach(element => {
            Cards.push(
                {
                    type: "div", props: {
                        class: "cardForm",
                        id: "card" + element.IdModules
                    },
                    children: [
                        {
                            type: "div", props: {
                                class: "TitleCard",
                                style: `
                                background: url(${element.image}) no-repeat;
                                background-size: 100% 100%;
                            ` },
                            children: [
                                { type: "div", props: { class: "labelCard", innerText: element.Title } }
                            ]
                        },
                        {
                            type: "div", props: { id: element.id + "Container", class: "cardDivOptions" }, children: [
                                {
                                    type: "button", props: {
                                        class: "BtnSecundary", type: "button", onclick: async()=>{
                                            this.UpdateModules(view, element)
                                        } 
                                    }, children: [Label]
                                },
                            ]
                        },
                    ]
                }
            );
        });
        return Cards;
    }
    UpdateModules =  async (view, element) => {
        if (view == true) {
            let MyModulesDetail = await AjaxTools.PostRequest(Url_Path +
                'api/module/PostModuleDetail?idModulos=' +
                element.IdModules, { IdModules: element.IdModules });
            let ModuleModel = {
                id: "module" + element.IdModules,
                title: element.Title,
                sections: MyModulesDetail
            };
            instModules.ModalNavigateFunction(element.id + "Container",
                new ModulesView(ModuleModel), { class: "LoginForm" }, element.id + "Container"
            );
        } else {
            //agregar
            console.log({
                IdModules: element.IdModules,
                IdUser: UserSeason.IdUsers
            })
            let MyModulesDetail = await AjaxTools.PostRequest(Url_Path +
                'api/module/PostAddMyNewModule', {
                IdModules: element.IdModules,
                IdUser: UserSeason.IdUsers
            });
            if (MyModulesDetail == true) {
                instModules.NavForm[this.props.id] = undefined;
                console.log(instModules.NavForm)
                let MyModules = await AjaxTools.PostRequest(Url_Path + 'api/module/PostMyModules', { IdUsers: UserSeason.IdUsers });
                let OModules = await AjaxTools.PostRequest(Url_Path + 'api/module/PostModules', { IdUsers: UserSeason.IdUsers });
                instModules.NavigateFunction("Modules", new Modules({
                    class: "DivContainer", id: "Modules", MyModules: MyModules, modules: OModules
                }));
                console.log(instModules.NavForm)
            }

        }
    }
}
//export {Modules}



//import {CreateTable, DrawTable}  from "../Scripts/Modules/WComponents.js";
const instModules = new DomComponent();
class Modules{    
    constructor(props){
        this.type = "div";
        this.props = props; 
        this.children= [];
        this.children.push(
            { type: 'h3', props: {id:"", class: ""} ,
                children: ["Mis Módulos"]
            }
        );
        if (this.props.MyModules) {
            this.children.push( { type: 'div', props: {id:"", class: "SliderContainer"} ,
                children: [
                    {
                        type: "div", props: {id:"GrupFormCardCarrocel", class: "GrupFormCardCarrocel"},
                        children: this.StartModuleList(this.props.MyModules)
                    },
                    { type: "div", props: {id:"", class: "btn-prev",
                     onclick:()=>{ myFunctionPrev('GrupFormCardCarrocel')} }, children: ["<"]},
                    { type: "div", props: {id:"", class: "btn-next", 
                     onclick:()=>{ myFunctionNext('GrupFormCardCarrocel')} }, children: [">"]}
                ]
            });
        }  else {            
            this.events = { load:  ()=>{
                    console.log("recuperando modulos....")   
                }            
            }
        } 
        this.children.push(
            { type: 'h3', props: {id:"", class: ""} ,
                children: ["Modulos Recomendados"]
            }
        );  
        if (this.props.modules) {
            this.children.push( { type: 'div', props: {id:"", class: "SliderContainer"} ,
                children: [
                    {
                        type: "div", props: {id:"GrupFormCardCarrocelModules", class: "GrupFormCardCarrocel"},
                        children: this.StartModuleList(this.props.modules, false)
                    },
                    { type: "div", props: {id:"", class: "btn-prev",
                     onclick:()=>{ myFunctionPrev('GrupFormCardCarrocelModules')} }, children: ["<"]},
                    { type: "div", props: {id:"", class: "btn-next", 
                     onclick:()=>{ myFunctionNext('GrupFormCardCarrocelModules')} }, children: [">"]}
                ]
            });
        }  else {            
            this.children.push( { type: 'section', props: {id:"Modulos recomendados...", class: ""} ,
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
                {type: "div", props:{ class: "cardForm" ,
                id:"card"+element.IdModules},
                children:[
                    {type: "div",props:{ class: "TitleCard", 
                            style: `
                                background: url(${element.image}) no-repeat;
                                background-size: 100% 100%;
                            ` },                            
                            children:[ 
                                {type: "div", props:{ class: "labelCard", innerText: element.Title}}
                            ]},
                   // {type: "p",props:{ class: "pCard"}, children:[element.Description]}, 
                    {type: "div", props:{id:element.id+"Container", class:"cardDivOptions"}, children:[
                        {type: "button", props:{class: "BtnSecundary", type: "button", onclick: async ()=>{  
                            if (view == true) {
                                let MyModulesDetail = await AjaxTools.PostRequest(Url_Path + 'api/module/PostModuleDetail', { IdModules: 1 }); 
                                let ModuleModel = {
                                    id: "module"+element.IdModules,
                                    title: element.Title,
                                    sections: MyModulesDetail};
                                instModules.ModalNavigateFunction(element.id+"Container",
                                    new ModulesView(ModuleModel),  {class: "LoginForm"}, element.id+"Container"
                                );
                            }else {
                                //agregar
                            }
                           // modalFunction(ModuleModel.id);
                        }}, children:[Label]},
                    ]},                  
                ]}
            );
        });
        return Cards;        
    }   
}
//export {Modules}



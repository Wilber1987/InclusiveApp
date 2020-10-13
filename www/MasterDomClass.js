//import { createElement } from "./Scripts/Modules/WComponents.js";
//import { Loading } from "./Modules/LoadingPage.js";
class DomComponent {
    constructor(){
        this.NavForm = [];   
    }
    type = "form";
    props = { class: "MyForm" };   
    NavigateFunction =  async (IdComponent, ComponentsInstance, ContainerName = "ContainerNavigate" )=>{ 
       //console.log(this.NavForm);
        const ContainerNavigate = document.querySelector("#"+ContainerName);
        let Nodes = ContainerNavigate.querySelectorAll(".DivContainer");        
        Nodes.forEach((node) => {
            if (node.id != IdComponent) {                                  
                this.NavForm[node.id] = node;
                if (ContainerNavigate.querySelector("#"+node.id)) {                   
                    ContainerNavigate.removeChild(node);
                }  
            }  
        });
        if (!ContainerNavigate.querySelector("#"+IdComponent)) {           
            if (typeof this.NavForm[IdComponent] != "undefined") {
                ContainerNavigate.append(this.NavForm[IdComponent]);                            
                return;
            }        
            ContainerNavigate.append(createElement(ComponentsInstance));
            return;
        }   
    } 
    ModalNavigateFunction =  async (IdComponent, ComponentsInstance, props = {}, ContainerName = "ContainerNavigate" )=>{ 
        const ContainerNavigate = document.querySelector("#"+ContainerName);        
        if (!ContainerNavigate.querySelector("#"+IdComponent)) {
            if (typeof this.NavForm[IdComponent] != "undefined") {
                ContainerNavigate.append(this.NavForm[IdComponent]); 
                setTimeout(
                    ()=>{  modalFunction( this.NavForm[IdComponent].id); }, 100
                );                           
                return;
            }   
            this.NavForm[IdComponent] = createElement(ComponentsInstance);         
            ContainerNavigate.append(this.NavForm[IdComponent]);
            setTimeout(
                ()=>{  modalFunction(this.NavForm[IdComponent].id); }, 100
            );
            return;
        } else {
            this.NavForm[IdComponent] = ContainerNavigate.querySelector("#"+IdComponent);
            modalFunction( this.NavForm[IdComponent].id);
            setTimeout(
                ()=>{  ContainerNavigate.removeChild(this.NavForm[IdComponent]); }, 1000
            );
        }   
    }
    _DispalNav(NavContainerId, NavAnimation){          
        let NavContainer = document.querySelector("#"+NavContainerId);
        let Nav = NavContainer.querySelector("ul"); 
        NavContainer.style.transition = "all 1s";
        Nav.style.transition = "all 1s";
        Nav.style.webkitTransform =  "translateX(-100%)"; 
        if (NavContainer.style.opacity == 0) {
            NavContainer.style.pointerEvents = "all";
            NavContainer.style.opacity = 1;
            if (NavAnimation == "SlideLeft") {                   
                Nav.style.webkitTransform =  "translateX(0%)";         
            }if (NavAnimation == "SlideRight") {                   
                Nav.style.webkitTransform =  "translateX(0%)";         
            }
        }else {
            NavContainer.style.pointerEvents = "none";
            NavContainer.style.opacity = 0;
            if (NavAnimation == "SlideLeft") {
                Nav.style.webkitTransform =  "translateX(-100%)";         
            }if (NavAnimation == "SlideRight") {                   
                Nav.style.webkitTransform =  "translateX(+100%)";         
            }
        }                   
    }     
}
class MasterDomClass extends DomComponent{    
    constructor(){     
        super();         
        this.MainComponent = new Loading({id:"Load", class:"LoadingPage DivContainer"}, async ()=>{ 
            //TAKE MODULESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS           
            let MyModules = await PostRequest(Url_Path + 'api/module/PostMyModules', { IdUsers: 1 });         
            let OModules = await PostRequest(Url_Path + 'api/module/PostModules', { IdUsers: 1 });            
            this.NavigateFunction("Modules",new Modules({
                class: "DivContainer", id: "Modules", MyModules: MyModules,   modules: OModules
            }));           
        });
        this.header = new headerClass();       
        this.children= [
            this.header,        
            { type: 'nav', props: {id:"NavContainer", class: "Menu"} ,
                children: [ new MyNavigator(
                    {class: "MyNav", id: "MyLateralNav", style: "opacity: 0; pointer-events: none"}                
                )]
            },
            { type: 'main', children: [
                { type: 'section', props: {id:"ContainerNavigate"},
                    children: [this.MainComponent]
                },
                { type: 'section', props: {id:"Container"}}
            ] },    
            new FooterNavigator(
                {class: "FooterNav", 
                id: "FooterNav", 
                style: ""}
            )     
        ]
    } 
}
class headerClass extends DomComponent {
    constructor(){     
        super();
        this.type = "header";
        this.props.class = "";                 
    }      
    children = [
        {
            type: 'button', 
            props: {
                id:"ViewMenu",
                type: "button",
                class: "btnMenu",
                onclick: ()=> {
                    this._DispalNav("MyLateralNav", "SlideLeft")
                }
            },
            children: ['']
        }, { type: 'label', props: {innerText: "My Inclusive APP"}}        
    ];
   
}
class MyNavigator extends DomComponent{   
    constructor(props){
        super();
        this.props = props;         
    }
    type= "div";
    children = [{type: "ul",
        children: [            
            {type: "li", props:{
                onclick: ()=>{
                   // this.NavigateFunction("Modules",new Modules({class: "DivContainer", id: "Modules", modules: this.modules}));
                    //this.NavigateFunction("MyLogin", "./Modules/Security/Login.js");
                    this._DispalNav("MyLateralNav", "SlideLeft");
                }
            }, children: [{type:"a", props:{href:"#"}, children: ["Perfil"]}]},
            {type: "li", props:{
                onclick:  ()=>{
                   // this.NavigateFunction("BarReport", new ReportView({class: "DivContainer", id: "ReportView"}));  
                    this._DispalNav("MyLateralNav", "SlideLeft");                   
                }
            }, children: [{type:"a", props:{href:"#"}, children: ["Notificaciones"]}]},
            {type: "li", props:{
                onclick: ()=>{
                   // this.NavigateFunction("RadialReport",new RadialReport({class: "DivContainer", id: "RadialReport"}));  
                    this._DispalNav("MyLateralNav", "SlideLeft");          
                }
            }, children: [{type:"a", props:{href:"#"}, children: ["Mensajes"]}]},
            {type: "li", props:{
                onclick: ()=>{
                   // this.NavigateFunction("MultiSelectControls", new MultiSelectControls({class: "DivContainer", id: "MultiSelectControls"}));
                    this._DispalNav("MyLateralNav", "SlideLeft");
                }
            }, children: [{type:"a", props:{href:"#"}, children: ["Cerrar Sesión"]}]},
        ]    
    }];      
}
class FooterNavigator extends DomComponent{   
    constructor(props){
        super();
        this.props = props;
    }
    type= "div";
    children = [{type: "ul",
        children: [            
            {type: "li", props:{
                onclick: ()=>{
                    this.NavigateFunction("Modules",new Modules({class: "DivContainer", id: "Modules", modules: this.modules}));                 
                }
            }, children: [{type:"button", props:{ type: "button", 
                style: `
                    background: url('./Media/icons/modules2.png') no-repeat;
                    background-size: 100% 100%;
                `}
        , children: [""]}]},
            {type: "li", props:{
                onclick: async ()=>{
                    const Foros = [
                        {
                            title: "Foro de prueba 1",
                            date: "2020-01-01"
                        },{
                            title: "Foro de prueba 2",
                            date: "2020-01-01"
                        },{
                            title: "Foro de prueba 3",
                            date: "2020-01-01"
                        }
                    ];
                    this.NavigateFunction("ForosView",new ForosView({class: "DivContainer DivSection", id: "ForosView", Foros: Foros}));                    
                }
            }, children: [{type:"button", props:{ type: "button",
            style: `
                background: url('./Media/icons/foro2.png') no-repeat;
                background-size: 100% 100%;
            `
        }, children: [""]}]},  
            {type: "li", props:{
                onclick:  ()=>{                    
                    this.NavigateFunction("ReportView", new ReportView({class: "DivContainer DivSection", id: "ReportView"})); 
                }
            }, children: [{type:"button", props:{ type: "button", 
                style: `
                    background: url('./Media/icons/bar.png') no-repeat;
                    background-size: 100% 100%;
                `}
        , children: [""]}]},                    
        ]    
    }];      
}
//export {MasterDomClass, DomComponent};
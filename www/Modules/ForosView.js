//import "../Scripts/StyleFrame/WStyledRender.js";
class ForosView{    
    constructor(props){
        this.type = "div";
        this.props = props;
        this.children= [
            { type: 'h2', props: {id:"", class: ""} ,
                children: ["Noticias"]
            },
            { type: 'section', props: {id:"", class: ""} ,
               children: this.DisplayForos(this.props.Foros)
            }     
        ]
    }
    DisplayForos = (Foros)=>{
        let ForosElements = [];
        Foros.forEach(foro => {
            ForosElements.push({
                type: "article", props: {class: "Articles"},
                children: [
                    {type: "label", props: {innerText: foro.title}},
                    //{type: "label", props: {innerText: foro.date}},
                    {type: "a", props: {innerText: "ver...", href: "#"}}
                ]
            })                       
        });   
        ForosElements.push(this.Styles());     
        return ForosElements;
    }
    Styles = ()=>{
        const Style =  { type: "w-style", props:{
            ClassList: [
                new WCssClass(`#${this.props.id} .Articles`,{
                    display: "flex",
                    border: "1px solid #808080",
                    "border-radius": "0.2cm",
                    "align-items": "center",
                    padding: "15px" ,
                    margin: "5px"                 
                }),
                new WCssClass(`#${this.props.id} .Articles label`,{
                    width: "100%",                
                })
            ]
        }}
        return Style;
    }
}
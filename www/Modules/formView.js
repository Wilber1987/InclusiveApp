class WFormView extends HTMLElement{
    constructor(props){
        super();      
        this.slideIndex = 1;     
    }
    attributeChangedCallBack(){
        this.DrawChart();
    }
    connectedCallback(){           
        if (this.innerHTML != "") {            
            return;
        }
        this.DrawForm();        
    }
    DrawForm = async () =>{         
        const url =  Url_Path + 'api/Form/GetForm?idform=' + this.idform[0];
        this.data = await GetRequest(url);        
        let frag = {type: "div", props: {class: "slideshow-container"}, children:[FormStyle]}
        let dotContainer = {type: "div", props: {class: "dot-container"}, children:[]}
        this.data[1].forEach((preg, index = 1) => {
            let pregSection = {
                type: "div", props: {id:`section${preg.IdQuestion}`, class: "mySlides"}, children:[
                    {type:"h4", children:[preg.Description]}
                ]
            }
            let OptionSections = {
                type: "div", props: {class: "sectionResp"}, children:[]
            }            
            const pregsOptions = this.data[2].filter(
                p => p.IdQuestion == preg.IdQuestion);
            let typeOption = preg.pregType;
            if (preg.IdType == 1) {
                //NO IMPLEMENTED                                
            }
            //-----------------------------------
            //console.log(this.data[2]);
           // console.log(pregsOptions);
            pregsOptions.forEach(pregOption => {                
                OptionSections.children.push(
                    {type: "div", props: {class: "divOption"}, children:[
                        {type: "label", props: {
                            for: `preg${preg.IdQuestion}_${pregOption.IdQuestionOption}`
                        },children:[pregOption.OptionDesc]},
                        {type: "input", props: {
                            type: typeOption, 
                            id: `preg${preg.IdQuestion}_${pregOption.IdQuestionOption}`,
                            name:  `preg${preg.IdQuestion}`,
                            value: pregOption.Value
                        }}
                    ]}
                )
            });
            //-------------------------------------
            pregSection.children.push(OptionSections);
            frag.children.push(pregSection);

            dotContainer.children.push(
                {type: "span", props: {class: "dot", onclick:()=>{
                    this.currentSlide(index);
                }}}
            );
            index++;
        }); 
        frag.children.push(
            {type: "a", props:{class:"prev", onclick : ()=>{ this.plusSlides(-1); }},
            children: ["❮"]}
        );  
        frag.children.push(
            {type: "a", props:{class:"next", onclick : ()=>{ this.plusSlides(1);}}, 
            children: ["❯"]}
        ); 
        this.append(createElement(frag), createElement(dotContainer));
        this.showSlides(this.slideIndex);
    }
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }
    showSlides = (n)=>{
        var i;
        var slides = this.getElementsByClassName("mySlides");
        var dots = this.getElementsByClassName("dot");
        if (n > slides.length) {this.slideIndex = 1}    
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex-1].style.display = "block";  
        dots[this.slideIndex-1].className += " active";
    }

}

const FormStyle = {
    type: "style", props : {},
    children: [`     
        w-form-view{
            display: block;
        }
        w-form-view h4{
            display: block;
            text-align: left;
            padding-left: 10px ;
        }
        w-form-view input[type=text], w-form-view input[type=number]{
            display: block;
            padding: 7px;
            border-radius: 0.2cm;
            border: solid 1px #6b6b70;
            width: 95%;
            flex: 1;
        }
        w-form-view .sectionResp{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        w-form-view .sectionResp .divOption{
        flex: 1;
        }
        w-form-view .sectionResp .divOption{
            text-align: left;
            padding-left: 10px;
            padding-right: 10px;
        }
        w-form-view .slideshow-container {
            box-sizing: border-box;
            position: relative;
            background: #f1f1f1f1;
            font-family: Verdana, sans-serif; margin:0;
        }      
        w-form-view .mySlides {
            display: none;
            padding: 20px 50px;
            height: 280px;
            overflow-y: auto;
            overflow-x: hidden;
            text-align: justify;
            white-space:pre-wrap;
        }
        w-form-view .prev,w-form-view .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            margin-top: -30px;
            padding: 16px;
            color: #888;
            font-weight: bold;
            font-size: 20px;
            border-radius: 0 3px 3px 0;
            user-select: none;
        }      
        w-form-view .next {
            position: absolute;
            right: 0;
            border-radius: 3px 0 0 3px;
        }
        w-form-view .prev {
            position: absolute;
            left: 0;
            border-radius: 3px 0 0 3px;
        }
        w-form-view .prev:hover,w-form-view .next:hover {
            background-color: rgba(0,0,0,0.8);
            color: white;
        }      
        w-form-view .dot-container {
            text-align: center;
            padding: 20px;
            background: #ddd;
        }
        w-form-view .dot {
            cursor: pointer;
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
        }      
        w-form-view .active,w-form-view .dot:hover {
            background-color: #717171;
        }
        w-form-view q {font-style: italic;}      
        w-form-view .author {color: cornflowerblue;}
    `]
}
customElements.define("w-form-view", WFormView);

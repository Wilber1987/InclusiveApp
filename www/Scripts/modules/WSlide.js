class WSlide extends HTMLElement{
    constructor(){
        super(); 
        this.style = "display:block"; 
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
    DrawSlide = async () =>{    
        let frag = {type: "div", props: {class: "slideshow-container"}, children:[StyleForSlide]}
        let dotContainer = {type: "div", props: {class: "dot-container"}, children:[]}
        let slides = ["zdsfsdf", "zsfdazsd"];
        slides.forEach((element, index = 1) => {
            frag.children.push(
                {type: "div", props: {class: "mySlides"},
                 children:[
                    {type: "q", children: [element.content]}
                 ]}
            );
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
    }
    plusSlides(n) {
        this.showSlides(slideIndex += n);
    }
    currentSlide(n) {
        this.showSlides(slideIndex = n);
    }
    showSlides = (n)=>{
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }
}
const StyleForSlide = {
    type: "style", props : {},
    children: [` 
    .slideshow-container {
        box-sizing: border-box;
        position: relative;
        background: #f1f1f1f1;
        font-family: Verdana, sans-serif; margin:0;
      }      
      .mySlides {
        display: none;
        padding: 80px;
        text-align: center;
      }
      .prev, .next {
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
      .next {
        position: absolute;
        right: 0;
        border-radius: 3px 0 0 3px;
      }
      .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
        color: white;
      }      
      .dot-container {
          text-align: center;
          padding: 20px;
          background: #ddd;
      }
      .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
      }      
      .active, .dot:hover {
        background-color: #717171;
      }
      q {font-style: italic;}      
      .author {color: cornflowerblue;}
    `]
}
customElements.define("w-slide-view", WSlide);

//import {DomComponent}  from "../../MasterDomClass.js";
let photoB64;
class MyRegister {
    constructor(props, Navegando) {
        this.type = "div";
        this.props = props;
        this.Photo;       
        this.MyLoginData = {
            Name: null,
            Apellidos: null,
            Username: null,
            Password: null,
            Password2: null,
            Mail: null,
            Photo: null
        };
        this.props.MyLoginData = this.MyLoginData;
        this.Navegando = Navegando;
    }
    children = [
        {
            type: 'h1', props: { id: "", class: "" },
            children: ["My Login"]
        }, {
            type: "divControl", children: [
                { type: 'label', props: { id: "", class: "" }, children: ["Imagen"] },
                {
                    type: 'input', props: {
                        id: "filePhoto", class: "", placeholder: "Example: mail@mail.com", type: "file",
                        onchange: async () => {
                            const control = document.querySelector("#filePhoto");
                            await this.SelectedFile(control.files[0],this.MyLoginData)
                            setTimeout(() => {
                                this.MyLoginData.Photo = photoB64.toString();
                                console.log(this.MyLoginData);
                            }, 1000);

                        }
                    }
                }
            ]
        },
        {
            type: "divControl", children: [
                { type: 'label', props: { id: "", class: "" }, children: ["Usuario"] },
                {
                    type: 'input', props: {
                        id: "txtName", class: "", placeholder: "Nombres", type: "text",
                        onchange: () => {
                            const control = document.querySelector("#txtName");
                            this.MyLoginData.Name = control.value;
                        }
                    }
                }
            ]
        }, {
            type: "divControl", children: [
                { type: 'label', props: { id: "", class: "" }, children: ["Apellidos"] },
                {
                    type: 'input', props: {
                        id: "txtApellidos", class: "", placeholder: "Apellidos", type: "text",
                        onchange: () => {
                            const control = document.querySelector("#txtApellidos");
                            this.MyLoginData.LastName = control.value;
                        }
                    }
                }
            ]
        },
        {
            type: "divControl", children: [
                { type: 'label', props: { id: "", class: "" }, children: ["Username"] },
                {
                    type: 'input', props: {
                        id: "txtUsername", class: "", placeholder: "usuario", type: "text",
                        onchange: () => {
                            const control = document.querySelector("#txtUsername");
                            this.MyLoginData.Username = control.value;
                        }
                    }
                }
            ]
        },
        {
            type: "divControl", children: [
                { type: 'label', props: { id: "", class: "" }, children: ["Contraseña"] },
                {
                    type: 'input', props: {
                        id: "txtpass1", class: "", placeholder: "password", type: "password",
                        onchange: () => {
                            const control = document.querySelector("#txtpass1");
                            this.MyLoginData.Password = control.value;
                        }
                    }
                }
            ]
        },
        {
            type: "divControl", children: [
                { type: 'label', props: { id: "", class: "" }, children: ["Confirmar Contraseña"] },
                {
                    type: 'input', props: {
                        id: "txtpass2", class: "", placeholder: "password", type: "password",
                        onchange: () => {
                            const control = document.querySelector("#txtpass2");
                            this.MyLoginData.Password2 = control.value;
                        }
                    }
                }
            ]
        },
        {
            type: "divControl", children: [
                { type: 'label', props: { id: "", class: "" }, children: ["Correo"] },
                {
                    type: 'input', props: {
                        id: "txtMail", class: "", placeholder: "Example: mail@mail.com", type: "password",
                        onchange: () => {
                            const control = document.querySelector("#txtMail");
                            this.MyLoginData.Mail = control.value;
                        }
                    }
                }
            ]
        },

        {
            type: "divControl", children: [
                {
                    type: 'input', props: {
                        class: "BtnPrimary",
                        type: "button", value: "Ok",
                        onclick: async () => {
                            if (this.MyLoginData.Password != this.MyLoginData.Password2) {
                                const control = document.querySelector("#txtpass1");
                                control.style.border = "red solid 2px";
                                const control2 = document.querySelector("#txtpass2");
                                control2.style.border = "red solid 2px";
                                return;
                            }
                            let response = await AjaxTools.PostRequest(Url_Path + 'api/User/PostRegister', this.MyLoginData);
                            if (response == true) {
                                UserSeason = await AjaxTools.PostRequest(Url_Path + 'api/User/PostTakeSeason', this.MyLoginData);
                                localStorage.setItem("Username", this.MyLoginData.Username);
                                localStorage.setItem("Password", this.MyLoginData.Password);
                                this.Navegando();
                            }
                            else {
                                console.log("error...");
                            }
                        }
                    }
                }
            ]
        }
    ]
    getBase64Image(img) {
        // Create an empty canvas element
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        // Copy the image contents to the canvas
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // Get the data-URL formatted image
        // Firefox supports PNG and JPEG. You could check img.src to guess the
        // original format, but be aware the using "image/jpg" will re-encode the image.
        var dataURL = canvas.toDataURL("image/png");

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
    async SelectedFile(value, obj) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
            photoB64 = e.target.result.split("base64,")[1];
        }
        //Aqui comienza a leer el archivo para posteriormente ejecutar la función onloadend
        reader.readAsDataURL(value);
    }
}
//export {MyRegister}
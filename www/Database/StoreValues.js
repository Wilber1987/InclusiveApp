var localData = {
    "http://localhost:6601/api/User/PostLogin": true,
    "http://localhost:6601/api/module/PostMyModules": [{
        Description: "Esta publicación ha sido realizada con el apoyo !nanciero de la Agencia Española de Cooperación Internacional para el Desarrollo (AECID), con cargo al Convenio “Promoción de la atención integral de los niños y las niñas de 5 a 12 años en el ámbito educativo y comunitario”. El contenido de dicha publicación es responsabilidad exclusiva de Save the Children y no reeja necesariamente la opinión de la AECID.",
        IdModules: 1,
        Title: "Guía de Buenas Prácticas en Educación Inclusiva",
        image: "./Media/img/modulo1.jpg"
    }],
    "http://localhost:6601/api/Form/GetForm?idform=1": [
        {IdQuestionOption: 1, Value: null, OptionDesc: "desc", IdQuestion: 1, pregType: "number"},
        {IdQuestionOption: 2, Value: null, OptionDesc: "desc", IdQuestion: 2, pregType: "number"},
        {IdQuestionOption: 4, Value: "1", OptionDesc: "nada", IdQuestion: 3, pregType: "checkbox"},
        {IdQuestionOption: 5, Value: "2", OptionDesc: "medio", IdQuestion: 3, pregType: "checkbox"},
        {IdQuestionOption: 6, Value: "3", OptionDesc: "mucho", IdQuestion: 3, pregType: "checkbox"},
        {IdQuestionOption: 7, Value: "1", OptionDesc: "si", IdQuestion: 4, pregType: "radio"},
        {IdQuestionOption: 8, Value: "0", OptionDesc: "no", IdQuestion: 4, pregType: "radio"},
    ],
    "http://localhost:6601/api/User/PostRegister": true,
    "Password": 'zaxscd',
    "http://localhost:6601/api/module/PostModules": [{
            Description: "desc.....",
            IdModules: 2,
            Title: "Modulo2",
            image: "./Media/img/modulo2.jpg"
        },
        {
            Description: "desc....",
            IdModules: 3,
            Title: "Algoritmos y Estructuras de Datos",
            image: "./Media/img/modulo3.jpg"
        }
    ],
    "http://localhost:6601/api/module/PostModuleDetail": [{
            IdSection: 1,
            Title: "1. INTRODUCCION",
            Type: "video",
            UrlContent: "https://www.youtube.com/embed/5Vl8KTV9T2A"
        }, {
            IdSection: 2,
            Title: "2. LA EDUCACIÓN INCLUSIVA",
            Type: "texto",
            UrlContent: "El derecho a la educación es mundialmente reconocido desde que en 1948 se proclama la Declaración Universal de Derechos Humanos. ↵Además, la Convención sobre derechos del niño (rati!cada por 193 estados), reconoce este derecho a todos los niños y las niñas. En el año 2000, un informe de la UNESCO establece que la inclusión de la infancia con necesidades especiales o pertenecientes a minorías étnicas desfavorecidas, poblaciones migrantes, comunidades remotas y aisladas o barrios urbanos marginales, así como de otros excluidos de la educación, deberá ser parte integrante de las estrategias para lograr la educación para todos antes del 2015. En 2008, con motivo de la 48ª Conferencia Internacional de Educación de la UNESCO, los Ministros de Educación y Jefes de Delegación de 153 Estados miembro a!rman que una educación inclusiva y de calidad es fundamental para alcanzar el desarrollo humano, social y económico. ↵Actualmente, existe entre la comunidad internacional una voluntad unánime de fomentar un modelo de educación de calidad, intercultural e inclusivo. Los argumentos que avalan este modelo pueden encontrarse en distintas investigaciones e informes. La OCDE (2007), por ejemplo, a!rmaba en su informe No More Failures: Ten steps to Equity in Education que el excluir a ciertas personas de una educación de calidad, tiene altos costes sociales y conómicos. Los autores de la investigación Actuaciones de Éxito en Escuelas Europeas, publicada por el Ministerio de Educación (2011), sostienen que el éxito en educación está relacionado con la inclusión social y con el acceso a todos los ámbitos sociales y los recursos (empleo, vivienda, salud, política, etc.); y que la inclusión social permite la contribución de un mayor número de personas al desarrollo de una economía del conocimiento competitiva y dinámica, y una mayor cohesión social.↵",
        }, {
            IdSection: 3,
            Title: "3. HISTORIA DE VIDA - SANDRA",
            Type: "video",
            UrlContent: "https://www.youtube.com/embed/czLniFi69aM"
        },{
            IdSection: 4,
            Title: "4. HISTORIA DE VIDA - ROBERTO",
            Type: "video",
            UrlContent: "https://www.youtube.com/embed/Na-aM8F1WrI"
        },{
            IdSection: 5,
            Title: "5. HISTORIA DE VIDA - IRANIA",
            Type: "video",
            UrlContent: "https://www.youtube.com/embed/UmF7wXV7sMY"
        },{
            IdSection: 6,
            Title: "6. HISTORIA DE VIDA - FREDDY REYES",
            Type: "video",
            UrlContent: "https://www.youtube.com/embed/zGE06p1dq8E",
        },{
            IdSection: 8,
            Title: "8. TEST",
            Type: "test",
            UrlContent: "1"
        }
    ],
    "Username": 'Wilber'
}
function SetLoca() {
    for (const prop in localData) {
        localStorage.setItem(prop, JSON.stringify(localData[prop]));
    }   
}
SetLoca();
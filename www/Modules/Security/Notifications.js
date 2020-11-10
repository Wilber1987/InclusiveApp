//import {DomComponent}  from "../../MasterDomClass.js";
class MyNotifications {
    constructor(props, Notifications = []) {
        this.type = "div";
        this.props = props;      
        const NotificationsContainer = {
            type: "div", props: {
                class: "NotificationsContainer"
            },
            children: []
        }
        Notifications.forEach(notif => {
            NotificationsContainer.children.push({
                type: "article", props: { class: "State" + notif.state }, children: [
                    { type: 'label', props: { innerText: notif.Description } },
                    { type: 'label', props: { innerText: notif.Date } },
                ]
            })
        });
        this.children.push(NotificationsContainer)        
    }
    children = [
        {
            type: 'h1', props: { id: "", class: "" },
            children: ["Notificaciones "]
        }
    ]
}

//export {MyLogin}
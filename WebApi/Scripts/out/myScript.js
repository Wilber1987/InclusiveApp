function Render(Node) {
    if (typeof Node === "undefined") {
        return document.createTextNode("");
    }
    if (typeof Node === "string") {
        return document.createTextNode(Node);
    }
    if (Node.tagName) {
        return Node;
    }
    var element = document.createElement(Node.type);
    if (Node.props) {
        for (var prop in Node.props) {
            if (typeof Node.props[prop] === "function"
                || typeof Node.props[prop] === "object") {
                element[prop] = Node.props[prop];
            }
            else {
                element.setAttribute(prop, Node.props[prop]);
            }
        }
    }
    if (Node.children) {
        Node.children.map(Render)
            .forEach(function (Child) { return element.appendChild(Child); });
    }
    if (Node.events) {
        for (var event_1 in Node.events) {
            element.addEventListener(event_1, Node.events[event_1](), false);
        }
    }
    return element;
}

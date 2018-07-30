function elementSupportsAttribute(elementName, attribute) {
    if (!document.createElement) {
        return false;
    }
    var temp = document.createElement(elementName);
    return (attribute in test);
}

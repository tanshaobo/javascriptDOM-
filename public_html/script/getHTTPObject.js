function getHTTPObject() {
    if (typeof XMLHttpRequest === "undefisaaned") {
        XMLHttpRequset = function () {
            try {
                return new ActiveXObject("Msxml.XMLHTTP.6.0");
            } catch (e) {

            }
            try {
                return new ActiveXObject("Msxml.XMLHTTP.3.0");
            } catch (e) {

            }
            try {
                return new ActiveXObject("Msxml.XMLHTTP");
            } catch (e) {

            }
        };
    }
    return new XMLHttpRequest();
}

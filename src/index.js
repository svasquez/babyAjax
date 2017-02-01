(function () {
    var babyAjax = {};
    var defaultMethod = 'GET';
    var defaultContentType = 'application/x-www-form-urlencoded';
    var initializeXhr = function () {
        try {
            return new window.XMLHttpRequest();
        } catch (error) {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        }
    };

    babyAjax.ajaxCall = function (settings) {
        var xhr = initializeXhr();
        settings.method = (settings.method || defaultMethod).toUpperCase();
        xhr.open(settings.method, settings.url, true);
        if (settings.method !== defaultMethod) {
            xhr.setRequestHeader("Content-Type", (settings.contentType || defaultContentType));
        }
        xhr.send(settings.data || null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status >= 200 && xhr.status <= 208)) {
                if (settings.onOk) settings.onOk(xhr.responseText);
            } else {
                if (settings.onError) settings.onError(new Error('Error occurred ' +  xhr.status));
            }
        };
    };

    babyAjax.post = function (configurl, ctnType, data, callback) {

    };

    babyAjax.get = function (configurl, ctnType, data, callback) {

    };

    babyAjax.put = function (configurl, ctnType, data, callback) {

    };

    babyAjax.del = function (configurl, ctnType, data, callback) {

    };

    window.babyAjax = babyAjax;
})();
/** 
 * Function to create babyAjax object
*/

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

    /**
     * Generic function to do asynchronus callback
     * @param {object} settings - storage all data to do asynchronus call
     */
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

    /**
     * Function to POST data via asynchronus call
     * @param {string} url 
     * @param {object} headers
     * @param {object} data
     * @param {Function} callback
     */
    babyAjax.post = function (url, headers, data, callback) {
        var xhr = initializeXhr();
        xhr.open('POST',url,true);
        if(headers){
            for(var name in headers){
                xhr.setRequestHeader(name,headers[name]);
            }
        }

        xhr.send(data || null);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status >= 200 && xhr.status <= 208)) {
                var xhrObject = {
                    data : xhr.responseText,
                    headers : xhr.getAllResponseHeaders()
                };
                callback(xhrObject);
            } else {
                callback(null,new Error('Error occurred ' +  xhr.status));
            }
        };
    };

    /**
     * Function to GET data via asynchronus call
     * @param {string} url 
     * @param {object} headers
     * @param {object} data
     * @param {Function} callback
     */
    babyAjax.get = function (configurl, ctnType, data, callback) {
        var xhr = initializeXhr();
        xhr.open('GET',url,true);
        if(headers){
            for(var name in headers){
                xhr.setRequestHeader(name,headers[name]);
            }
        }

        xhr.send(data || null);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status >= 200 && xhr.status <= 208)) {
                var xhrObject = {
                    data : xhr.responseText,
                    headers : xhr.getAllResponseHeaders()
                };
                callback(xhrObject);
            } else {
                callback(null,new Error('Error occurred ' +  xhr.status));
            }
        };
    };

    /**
     * Function to PUT data via asynchronus call
     * @param {string} url 
     * @param {object} headers
     * @param {object} data
     * @param {Function} callback
     */
    babyAjax.put = function (configurl, ctnType, data, callback) {
        var xhr = initializeXhr();
        xhr.open('PUT',url,true);
        if(headers){
            for(var name in headers){
                xhr.setRequestHeader(name,headers[name]);
            }
        }

        xhr.send(data || null);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status >= 200 && xhr.status <= 208)) {
                var xhrObject = {
                    data : xhr.responseText,
                    headers : xhr.getAllResponseHeaders()
                };
                callback(xhrObject);
            } else {
                callback(null,new Error('Error occurred ' +  xhr.status));
            }
        };
    };

    /**
     * Function to DELETE data via asynchronus call
     * @param {string} url 
     * @param {object} headers
     * @param {object} data
     * @param {Function} callback
     */
    babyAjax.del = function (configurl, ctnType, data, callback) {
        var xhr = initializeXhr();
        xhr.open('DELETE',url,true);
        if(headers){
            for(var name in headers){
                xhr.setRequestHeader(name,headers[name]);
            }
        }

        xhr.send(data || null);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status >= 200 && xhr.status <= 208)) {
                var xhrObject = {
                    data : xhr.responseText,
                    headers : xhr.getAllResponseHeaders()
                };
                callback(xhrObject);
            } else {
                callback(null,new Error('Error occurred ' +  xhr.status));
            }
        };
    };

    window.babyAjax = babyAjax;
})();
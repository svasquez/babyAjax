(function(babyAjax){
    babyAjax = babyAjax || {};
    var method = 'GET';
    var initializeXhr = function (){
        try {
            return new window.XMLHttpRequest();
        } catch (error) {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        }
    };

    babyAjax.AjaxCall = function (settings) {
        var xhr = initializeXhr();
        settings.method = (settings.method || method).toUpperCase();
        xhr.open(settings.url,settings.method,true);
        
    };

    babyAjax.post = function (configurl,ctnType,data,callback) {
        
    };

    babyAjax.get = function (configurl,ctnType,data,callback) {
        
    };

    babyAjax.put = function (configurl,ctnType,data,callback) {
        
    };

    babyAjax.del = function (configurl,ctnType,data,callback) {
        
    };


})(Window.babyAjax);
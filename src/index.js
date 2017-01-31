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

    babyAjax.prototype.AjaxCall = function (settings) {
        
    };

    babyAjax.prototype.post = function (configurl,ctnType,data,callback) {
        
    };

    babyAjax.prototype.get = function (configurl,ctnType,data,callback) {
        
    };

    babyAjax.prototype.put = function (configurl,ctnType,data,callback) {
        
    };

    babyAjax.prototype.delete = function (configurl,ctnType,data,callback) {
        
    };


})(Window.babyAjax);
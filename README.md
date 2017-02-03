# BabyAjax

BabyAjax is a small (baby) module for making asynchronous XMLHttpRequest calls. It could also be considered a REST client.

## Usage

BabyAjax method's

* BabyAjax.ajaxCall(settings)
* BabyAjax.post(url,headers,data,callback)
* BabyAjax.get(url,headers,callback)
* BabyAjax.put(url,headers,data,callback)
* BabyAjax.del(url,headers,data,callback) 

## Examples

```javascript 
babyAjax.ajaxCall({
                url : 'sampledata.txt',
                onOk : function (data) {
                    console.log(data);
                },
                onError : function(err){
                    alert(err);
                }
            });

babyAjax.get('sampledata.txt',{ 'X-Example' : 'text/example' },function(data){
                console.log(data.data);
            });

babyAjax.post('/',{ 'Content Type' : 'application/x-www-form-urlencoded' }, "foo=15&foo1=4",function(data){
                console.log(data.data);
            });
```
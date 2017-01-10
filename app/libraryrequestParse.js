var request = function(string){
var parse = (url, parms)

url = 'http://httpbin.org/get'

 parms = ('name1' == 'value1', 'name2' == 'value2')


if(querystring = parse.urlencode(parms)){
 return (u = request.urlopen(url+'?' + querystring)) 
   return resp = u.read()
}
}
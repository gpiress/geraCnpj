angular.module("gera-cnpj",["ngclipboard"]),angular.module("gera-cnpj").filter("prettifyCnpj",function(){return function(a){if(!a||a.length<14)return"-";var b="";return b+=a.slice(0,2)+".",b+=a.slice(2,5)+".",b+=a.slice(5,8)+"/",b+=a.slice(8,12)+"-",b+=a.slice(12,14)}}),angular.module("gera-cnpj").filter("prettifyCPF",function(){return function(a){if(!a||a.length<11)return"-";var b="";return b+=a.slice(0,3)+".",b+=a.slice(3,6)+".",b+=a.slice(6,9)+"-",b+=a.slice(9,11)}}),angular.module("gera-cnpj").service("CNPJService",function(){function a(a){var b=0,c=4;13===a.length&&(c=5);for(var d=0;c>d;d++){var e=c+1,f=parseInt(a[d]);b+=(e-d)*f}for(var d=0;8>d;d++){var f=parseInt(a[c+d]);b+=(9-d)*f}return b}return this.geraCnpj=function(){var a=this.geraPrimeirosDoze(),b=this.geraPrimeiroVerificador(a);a+=b+"";var c=this.geraSegundoVerificador(a);return a+=c+""},this.geraPrimeirosDoze=function(){for(var a="",b=0;12>b;b++){var c=Math.floor(10*Math.random());a+=c+""}return a},this.geraPrimeiroVerificador=function(b){if(b.length<12)return-1;var c=a(b),d=c%11;return 2>d?0:11-d},this.geraSegundoVerificador=function(b){if(b.length<13)return-1;var c=a(b),d=c%11;return 2>d?0:11-d},this}),angular.module("gera-cnpj").service("CPFService",function(){return this.geraCPF=function(){var a=this.geraCPFParcial(),b=this.calculaDigito(a);a+=b;var c=this.calculaDigito(a);return a+=c},this.geraCPFParcial=function(){for(var a="",b=0;9>b;b++){var c=Math.floor(10*Math.random());a+=c}return a},this.calculaDigito=function(a){if(a.length<9)return-1;for(var b=0,c=a.length+1,d=c;d>1;d--){var e=c-d,f=parseInt(a[e]);b+=f*d}var g=b%11;return 2>g?0:11-g},this}),angular.module("gera-cnpj").controller("IndexController",["CNPJService","CPFService",function(a,b){return this.CNPJService=a,this.CPFService=b,this.cnpj="",this.cpf="",this.novoCnpj=function(){this.cnpj=this.CNPJService.geraCnpj()},this.novoCPF=function(){this.cpf=this.CPFService.geraCPF()},this.init=function(){this.novoCnpj(),this.novoCPF()},this.init(),this}]);
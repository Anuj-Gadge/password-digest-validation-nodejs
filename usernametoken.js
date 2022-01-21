import { getHashes, createHash } from 'crypto';
var sha1 = getHashes('sha1');
import atob from 'atob';

function ToUTF8(str) {
    var result = new Array();
    var k = 0;
    for (var i = 0; i < str.length; i++) {
        var j = encodeURI(str[i]);
        if (j.length == 1) {
                         // Unconverted character
            result[k++] = j.charCodeAt(0);
        } else {
                         // Convert to the form of the% xx form
            var bytes = j.split("%");
            for (var l = 1; l < bytes.length; l++) {
                result[k++] = parseInt("0x" + bytes[l]);
            }
        }
    }
    return result;
}
function stringToByteArray(s){
    s = atob(s);
    var result = new Uint8Array(s.length);
    var myarray = new Array(s.length);
    for (var i=0; i<s.length; i++){
        if(s.charCodeAt(i)>127){
            var a = s.charCodeAt(i)-256;
            myarray[i] = a;
        }
        else{
            myarray[i] = s.charCodeAt(i);
        }
    }
    return myarray;
}
var crudenonce = "6Sa1EzAD1rHnS+JE197HsA==";
var crudepassword = "4C2d85FBEE80145B4";
var crudedate = "2022-01-15T11:07:55.689298300Z";

var nonce = stringToByteArray(crudenonce);
var date = ToUTF8(crudedate);
var password = ToUTF8(crudepassword);

var abc = createHash('sha1');
abc.update(Buffer.from(nonce));
abc.update(Buffer.from(date));
abc.update(Buffer.from(password));
var result = abc.digest('base64');
console.log(result);

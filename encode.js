// const byteArray = new Buffer(base64String.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64');
// console.log(byteArray);
import atob from 'atob';
var b64 = "+8GorZIWoF7mnZ2/M86/eA==";
function stringToByteArray(s){
    s = atob(s);
    var result = new Uint8Array(s.length);
    var myarray = new Array(s.length);
    for (var i=0; i<s.length; i++){
        if(s.charCodeAt(i)>127){
            var a = s.charCodeAt(i)-256;
            myarray[i] = a;
            console.log(myarray[i]);
        }
        else{
            myarray[i] = s.charCodeAt(i);
            console.log(myarray[i]);
        }
    }
    return result;
}
stringToByteArray(b64);
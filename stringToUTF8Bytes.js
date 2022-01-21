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
var result = ToUTF8("4C2d85FBEE80145B4");
console.log(result);

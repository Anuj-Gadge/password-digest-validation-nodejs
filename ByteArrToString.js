//converts byte array to base64 byte array and then to string
var b64 = Buffer.from([-5,-63,-88,-83,-110,22,-96,94,-26,-99,-99,-65,51,-50,-65,120]).toString('base64');
console.log(b64);
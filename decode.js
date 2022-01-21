// Create a buffer from the string
let bufferObj = Buffer.from("+8GorZIWoF7mnZ2/M86/eA==", "base64");

// Encode the Buffer as a utf8 string
let decodedString = bufferObj.toString("latin1");
const toBytes = (string) => {
	const buffer = Buffer.from(string, 'latin1');
	const result = Array(buffer.length);
	for (var i = 0; i < buffer.length; i++) {
		result[i] = buffer[i];
	}
	return result;
};


// Usage example:

const bytes = toBytes(decodedString);

console.log(bytes);
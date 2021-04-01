const { decode , encode } = require('./px.js');

async function main(){

	var encode_payload = 'aUkQRhAIEGJqABAeEFYQCEkQYmoLBBAIEFpGRkJBCB0dRUVFHEVTXl9TQEYcUV1fHRAeEGJqBAEQCBB/U1F7XEZXXhAeEGJqAwsDEAgCHhBiagoHAhAIAh4QYmoKBwMQCAMLAAceEGJqAwICChAIAQQCAh4QYmoDAgcHEAgDBAMFAQMDAQsEBAAGHhBiagMCBwQQCAMEAwUBAwMBCwQEAAUeEGJqAwIBChAIEAtRB1QEUFYCHwsBAFcfAwNXUB9TAlRQH1ZUVwMHAwQBBVBWBRAeEGJqAQUDEAhGQEdXT09v'; 
	var decode_payload = '[{"t":"PX2","d":{"PX96":"https://www.walmart.com/","PX63":"MacIntel","PX191":0,"PX850":0,"PX851":1925,"PX1008":3600,"PX1055":1617311396624,"PX1056":1617311396627,"PX1038":"9c5f6bd0-932e-11eb-a0fb-dfe151637bd7","PX371":true}}]'; 

	console.log(await decode(encode_payload));
	console.log(await encode(decode_payload));
};

main();
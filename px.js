function X() {
    return ("undefined" != typeof JSON && "function" == typeof JSON.stringify && void 0 === Array.prototype.toJSON ? JSON.stringify : r).apply(null, Array.prototype.slice.call(arguments))
};

function tn(t, n) {
    for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(n ^ t.charCodeAt(r));
    return e
};

function vu_encode(t) {

    return Buffer.from(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(t, n) {
        return String.fromCharCode("0x" + n)
    }), 'utf8').toString('base64');

};

function vu_decode(t) {

    return Buffer.from(decodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(t, n) {
        return String.fromCharCode("0x" + n)
    }), 'base64').toString('utf8');

};

async function encode(payload) {

    payload = await X(payload);
    payload = await tn(payload, 50);
    payload = await vu_encode(payload);

    return payload;
};

async function decode(payload){

    payload = await vu_decode(payload);
    payload = await tn(payload, 50);

    return payload;
};

module.exports.decode = decode; 
module.exports.encode = encode; 
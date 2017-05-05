
const fs = require("fs");
const grpc = require("grpc");
const mattiservice = grpc.load("./matti_service/matti_service.proto").MattiService;


var s = grpc.credentials.createInsecure();
console.log(grpc.credentials);
var combined_creds = grpc.credentials.combineCallCredentials({ user: "jaska" });




let credentials = grpc.credentials.createSsl(fs.readFileSync('./ssl/ca.crt'), fs.readFileSync('./ssl/client.key'), fs.readFileSync('./ssl/client.crt'));



grpc.credentials.createFromMetadataGenerator()

//console.log(combined_creds, mattiservice.Matti);



// var chCre = grpc.credentials.combineChannelCredentials(s, 
// grpc.credentials.createFromMetadataGenerator(meta));

// var cert = fs.readFileSync("./cert/ca.key");

var meta = new grpc.Metadata();

meta.add("user", "jaska");

var extra = grpc.credentials.createFromMetadataGenerator(
	function (url, callback) {
		callback(null, meta);
	}
);

var combined = grpc.credentials.combineChannelCredentials(credentials, extra);

var client = new mattiservice.Matti(`localhost:5050`, combined);



// var meta = new grpc.Metadata();
// meta.add('user', 'jasgaa');
// meta.add('user', 'jasgaa');
// meta.add('user', 'jasgaa');

// meta.remove("user");
// meta.set("user", "jasgka");
// meta.set("user", "maggara");

client.fetchMatrixById({
	id: 1	
}, (err, matrix) => {
	console.log("matrix", matrix);
});

// const Matti = require("./Matti");

// matti = new Matti({
// 	ip: "localhost",
// 	port: 5050
// });

// var matrixs = matti.fetchMatrixs({
// 	offset: 0,
// 	limit: 10
// });
// console.log(matrixs);
// matrixs.then(matrixs => {
// 	matrixs[0].cpuPorts.then(cpuPorts => {
// 		console.log("cpuPorts", cpuPorts);
// 		cpuPorts[1].slug = "tietokone1";
// 	});

// 	console.log(matrixs);
// });

// function* idMaker() {
//   var index = 0;
//   while (index < 3)
//     yield index++;
// }

// var gen = idMaker();


// for (var i of gen) {
// 	console.log("i ", i);
// }

// function isNumber (o) {
//   	return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
// }

// var pp = new Proxy(conPorts, {
// 	get: (target, name) => {
// 		console.log("name is", typeof name, name);
// 		if (typeof name == "number") console.log("on numero");
// 	}
// });

// //console.log(pp["aa"]);



// console.log("pp", pp);

// pp[784];

//var aa = "aa";

// var fs = require("fs");
// var grpc = require("grpc");
// var mattiservice = grpc.load("./matti_service/matti_service.proto").MattiService;

// var Matti = require("./Matti");

// var matti = new Matti();

// var g = matti.matrixs;

// console.log(g);

// var p = new Proxy({}, {
// 	get: function (proxy, name) {
// 		console.log(name);
// 	}
// });

// p[5];

//console.log(mattiservice.mattiservice.Matti);

// var client = new mattiservice.Matti("127.0.0.1:5050", grpc.credentials.createInsecure());

// console.log(client);

// function fetchMatrixCallback(callback) {

// }



// // client.fetchMatrixById({
// // 	id: 1
// // }, function (error, matrix) {
// // 	console.log("matrix is", matrix, error);
// // });

// // client.fetchMatrixBySlug({
// // 	slug: "testimatti"
// // }, function (error, matrix) {
// // 	console.log("matrix is", matrix, error);
// // });

// client.connectMatrix({
// 	slug: "tuotanto",
// 	ip: "192.168.180.201",
// 	port: 5555,
// 	numberOfConPorts: 16,
// 	numberOfCpuPorts: 16
// }, function (error, matrix) {
// 	console.log("matrix is", matrix, error);
// });

// client.editCpuPort({
// 	id: 1,
// 	slug: "tykkiii"
// }, (err, conPort) => {
// 	console.log(conPort);
// });

// // client.editMatrix({
// // 	id: 1,
// // 	slug: "TTTTTT"
// // }, function (error, matrix) {

// // });

// // client.removeMatrix({
// // 	id: 1
// // }, (error, m) => {

// // });

// var call = client.fetchMatrixs({
// 	offset: 1,
// 	limit: 5
// });

// call.on("data", function (matrix) {
// 	console.log("ddaatta", matrix);
// });

// call.on("end", function() {
// 	console.log("ened");
// });
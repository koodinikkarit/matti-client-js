const fs = require("fs");
const grpc = require("grpc");
const mattiservice = grpc.load("./matti_service/matti_service.proto").MattiService;

const Matrix = require("./Matrix");
import DefaultState from "./DefaultState";
import Diagram from "./Diagram";

module.exports = class Matti {
	constructor(props) {
		if (props) {
			if (props.ip && props.port) {
				this.client = new mattiservice.Matti(`${props.ip}:${props.port}`, grpc.credentials.createInsecure());
			}
		}
	}
	fetchMatrixs({ offset, limit }) {
		return new Promise((resolve, reject) => {
			var call = this.client.fetchMatrixs({
				offset,
				limit
			})

			var matrixs = [];

			call.on("data", matrix => {
				matrixs.push(new Matrix(this.client, matrix));
			});

			call.on("end", () => {
				resolve(matrixs);
			});
		});
	}

	fetchMatrixById(id) {
		return new Promise((resolve, reject) => {
			this.client.fetchMatrixById({
				id: 1
			}, function (error, res) {
				if (!error) 
				resolve(new Matrix(this.client, res.matrix));
			});
		});
	}

	fetchMatrixBySlug(slug) {
		return new Promise((resolve, reject) => {
			this.client.fetchMatrixBySlug({
				slug
			}, function (error, res) {
				if (!error)
				resolve(new Matrix(this.client, res.matrix));
			});
		});
	}

	connectMatrix({
		slug,
		ip,
		port,
		numberOfConPorts,
		numberOfCpuPorts
	}) {
		return new Promise((resolve, reject) => {
			this.client.connectMatrix({

			}, function(error, res) {
				if (!error) 
				resolve(new Matrix(this.client, res.matrix));
			});
		})
	}

	fetchDefaultStates({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var call = this.client.fetchDefaultStates({
				offset,
				limit
			});

			var defaultStates = [];

			call.on("data", defaultState => {
				defaultStates.push(new DefaultState(this.client, defaultState));
			});

			call.on("end", () => {
				resolve(defaultStates);
			});
		});
	}

	fetchDefaultStateById(id) {
		return new Promise((resolve, reject) => {
			this.client.fetchDefaultStateById({
				defaultStateId: id
			}, (error, res) => {
				if (!error)
				resolve(new DefaultState(this.client, res.defaultState));
			});
		});
	}

	fetchDefaultStateBySlug(slug) {
		return new Promise((resolve, reject) => {
			this.client.fetchDefaultStateBySlug({
				slug
			}, (error, res) => {
				if (!error)
				resolve(new DefaultState(this.client, res.defaultState));
			});
		});
	}

	createDefaultState({
		slug,
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			this.client.createDefaultState({
				slug,
				matrixId
			}, (error, res) => {
				if (!error) 
				resolve(new DefaultState(this.client, res.defaultState));
			})
		});
	}

	fetchDiagrams({
		offset,
		limit		
	}) {
		return new Promise((resolve, reject) => {
			var call = this.client.fetchDiagrams({
				offset,
				limit
			});

			var diagrams = [];

			call.on("data", diagram => {
				diagrams.push(new Diagram(this.client, diagram));
			});

			call.on("end", () => {
				resolve(diagrams);
			});
		});
	}

	fetchDiagramById(id) {
		return new Promise((resolve, reject) => {
			this.client.fetchDiagramById({
				diagramId: id
			}, (error, res) => {
				if (!error)
				resolve(new Diagram(this.client, res.diagram));
			});
		});
	}

	fetchDiagramBySlug(slug) {
		return new Promise((resolve, reject) => {
			this.client.fetchDiagramBySlug({
				slug
			}, (error, res) => {
				if (!error)
				resolve(new Diagram(this.client, res.diagram));
			});
		});
	}

	createDiagram({
		slug
	}) {
		return new Promise((resolve, reject) => {
			this.client.createDiagram({
				slug
			}, (error, res) => {
				if (!error)
				resolve(new Diagram(this.client, res.diagram));
			});
		});
	}
}
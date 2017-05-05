
import Diagram from "./Diagram";
import Matrix from "./Matrix";

export default class DiagramScreen {
	constructor(client, {
		id,
		slug,
		diagramId,
		matrixId,
		conPortId
	}) {
		this.client = client;
		this._id = id;
		this._slug = slug;
		this._diagramId = diagramId;
		this._matrixId = matrixId;
		this._conPortId = conPortId;
	}

	get slug() {
		return this._slug;
	}

	get diagram() {
		return new Promise((resolve, reject) => {
			this.client.fetchDiagramScreenById({
				diagramScreenId: this._diagramId
			}, (error, res) => {
				if (!error)
				resolve(new Diagram(this.client, res.diagram));
			});
		});
	}

	get matrix() {
		return new Promise((resolve, reject) => {
			this.client.fetchMatriById({
				matrixId: this._id
			}, (error, res) => {
				if (!error)
				resolve(new Matrix(this.client, res.matrix));
			});
		});
	}

	get conPort() {
		return new Promise((resolve, reject) => {
			this.client.fetchConPortById({
				conPortId: this._conPortId
			}, (error, res) => {
				if (!error)
				resolve(new ConPort(this.client, res.conPort));
			});
		});
	}

	remove() {
		this.client.removeDiagramScreen({
			diagramScreenId: this._id
		}, (error, res) => {
		})
	}
}
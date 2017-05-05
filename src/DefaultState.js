
import Matrix from "./Matrix";
import DefaultStateVideoConnection from "./DefaultStateVideoConnection";
import DefaultStateKvmConnection from "./DefaultStateKvmConnection";

export default class DefaultState {
	constructor(client, defaultState) {
		this.client = client;
		this._id = defaultState.id;
		this._slug = defaultState.slug;
		this._matrixId = defaultState.matrixId;
	}

	get id() {
		return this._id;
	}

	get slug() {
		return this._slug;
	}

	get matrix() {
		return new Promise((resolve, reject) => {
			this.client.fetchMatrixById({
				matrixId: this._matrixId
			}, (error, res) => {
				if (!error)
				resolve(new Matrix(this.client, res.matrix));
			});
		});
	}

	insertVideoConnection({
		conPort,
		cpuPort
	}) {
		return new Promise((resolve, reject) => {
			this.client.insertVideoConnectionToDefaultState({
				defaultStateId: this.id,
				conPortId: conPort.id,
				cpuPortId: cpuPort.id
			}, (error, res) => {
				if (!error)
				resolve(new DefaultStateVideoConnection(this.client, res.defaultStateVideoConnection));
			})
		});
	}

	insertKvmConnection({
		conPort,
		cpuPort
	}) {
		return new Promise((resolve, reject) => {
			this.client.insertKvmConnectionToDefaultState({
				defaultStateId: this.id,
				conPortId: conPort.id,
				cpuPort: cpuPort.id
			}, (error, res) => {
				if (!error)
				resolve(new DefaultStateKvmConnection(this.client, res.defaultStateKvmConnection));
			});
		});
	}

	remove() {
		this.client.removeDefaultState({
			defaultStateId: this.id
		}, (error, res) => {

		});
	}

	execute() {
		this.client.executeDefaultState({
			defaultStateId: this._id
		}, (error, res) => {

		});
	}
}

import ConPort from "./ConPort";
import CpuPort from "./CpuPort";
import DefaultState from "./DefaultState";

export default class DefaultStateVideoConnection {
	constructor(client, {
		id,
		conPortId,
		cpuPortId,
		defaultStateId
	}) {
		this.client = client;
		this._id = id;
		this._conPortId = conPortId;
		this._cpuPortId = cpuPortId;
		this._defaultStateId = defaultStateId;
	}

	get id() {
		return this._id;
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

	get cpuPort() {
		return new Promise((resolve, reject) => {
			this.client.fetchCpuPortById({
				cpuPortId: this._cpuPortId
			}, (error, res) => {
				if (!error)
				resolve(new CpuPort(this.client, res.cpuPort));
			});
		});
	}

	get defaultState() {
		return new Promise((resolve, reject) => {
			this.client.fetchDefaultStateById({
				defaultStateId: this._defaultStateId
			}, (error, res) => {
				if (!error)
				resolve(new DefaultState(this.client, res.defaultState));
			});
		});
	}

	remove() {
		this.client.removeVideoConnectionFromDefaultState({
			defaultStateId: this._id
		}, (error, res) => {
			
		});
	}
}
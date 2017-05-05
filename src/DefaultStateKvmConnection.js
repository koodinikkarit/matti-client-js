
import ConPort from "./ConPort";
import CpuPort from "./CpuPort";
import DefaultState from "./DefaultState";

export default class DefaultStateKvmConnection {
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
				conPortId: this.id
			}, (error, res) => {
				if (!error)
				resolve(new ConPort(this.client, res.conPort));
			});
		});
	}

	get cpuPort() {
		return new Promise((resolve, reject) => {
			this.client.fetchCpuPortById({
				cpuPortId: this.id
			}, (error, res) => {
				if (!error)
				resolve(new CpuPort(this.client, res.cpuPort));
			});
		});
	}

	get defaultState() {
		return new Promise((resolve, reject) => {
			this.client.fetchDefaultStateById({
				defaultStateId: this.id
			}, (error, res) => {
				if (!error)
				resolve(new DefaultState(this.client, res.defaultState));
			});
		});
	}

	remove() {
		this.client.removeKvmConnectionFromDefaultState({
			defaultStateId: this._id
		}, (error, res) => {
			
		});
	}
}
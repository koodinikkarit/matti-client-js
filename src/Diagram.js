

export default class Diagram {
	constructor(client, diagram) {
		this._id = diagram.id;
		this._slug = diagram.slug;
	}

	get id() {
		return this._id;
	}

	get slug() {
		return this._slug;
	}

	set slug(slug) {
		this._slug = slug;
		this.client.editDiagram({
			diagramId: this.id,
			slug
		}, (error, res) => {
			if (!error)
				resolve(new Diagram(this.client, res.diagram));
		});
	}

	remove() {
		this.client.removeDiagram({
			diagramId: this.id
		}, (error, res) => {

		})
	}
}
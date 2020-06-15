const fs = require('fs');
const crypto = require('crypto');

//To handle database.

module.exports = class Repository {
	constructor(filename) {
		if (!filename) {
			throw new Error('Creating a repository requires a filename');
		}

		this.filename = filename;
		try {
			fs.accessSync(this.filename);
		} catch (err) {
			fs.writeFileSync(this.filename, '[]');
		}
	}

	//to create item.
	async create(attrs) {
		attrs.id = this.randomId();

		const records = await this.getAll();
		records.push(attrs);
		await this.writeAll(records);

		return attrs;
	}

	//to get all items in database.
	async getAll() {
		return JSON.parse(
			await fs.promises.readFile(this.filename, {
				encoding: 'utf8'
			})
		);
	}

	//To write all items to database json file.
	async writeAll(records) {
		await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
	}

	//To generate a random id.
	randomId() {
		return crypto.randomBytes(4).toString('hex');
	}

	//To find a specific item.
	async getOne(id) {
		const records = await this.getAll();
		return records.find((record) => record.id === id);
	}

	//To delete an item.
	async delete(id) {
		const records = await this.getAll();
		const filteredRecords = records.filter((record) => record.id !== id);
		await this.writeAll(filteredRecords);
	}

	//To update item.
	async update(id, attrs) {
		const records = await this.getAll();
		const record = records.find((record) => record.id === id);

		if (!record) {
			throw new Error(`Record with id ${id} not found`);
		}

		Object.assign(record, attrs);
		await this.writeAll(records);
	}

	//To get an item using a filter.
	async getOneBy(filters) {
		const records = await this.getAll();

		for (let record of records) {
			let found = true;

			for (let key in filters) {
				if (record[key] !== filters[key]) {
					found = false;
				}
			}

			if (found) {
				return record;
			}
		}
	}
};

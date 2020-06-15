const express = require('express');
const listRepo = require('./repositories/list');
const listShowTemplate = require('./views/showContent');
const layoutShowTemplate = require('./views/layout');

const router = express.Router();

//To get page after adding item to list.
router.post('/', async (req, res) => {
	let list;
	if (!req.session.listID) {
		list = await listRepo.create({ items: [] });
		req.session.listID = list.id;
	} else {
		list = await listRepo.getOne(req.session.listID);
	}

	const existingItem = list.items.find((item) => item.name === req.body.name);
	if (existingItem) {
		existingItem.quantity += parseInt(req.body.quantity);
	} else {
		list.items.push({ name: req.body.name, quantity: parseInt(req.body.quantity) });
	}
	await listRepo.update(list.id, {
		items: list.items
	});

	res.send(listShowTemplate({ items: list.items }));
	console.log('post1');
});

//To get page when starting
router.get('/', async (req, res) => {
	if (!req.session.cartID) {
		return res.send(layoutShowTemplate('<h1> Nothing to show here</h1>'));
	}

	const list = await listRepo.getOne(req.session.listID);

	res.send(listShowTemplate({ items: list.items }));
	console.log('get1');
});

//To remove item from list.
router.post('/remove', async (req, res) => {
	const { itemName } = req.body;
	console.log(itemName);
	const list = await listRepo.getOne(req.session.listID);

	const items = list.items.filter((item) => item.name !== itemName);

	await listRepo.update(req.session.listID, { items });

	res.send(listShowTemplate({ items }));
	console.log('post2');
});

//To clear cookie and thus clear list.
router.get('/clear', (req, res) => {
	req.session = null;
});

module.exports = router;

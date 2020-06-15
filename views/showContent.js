const layout = require('./layout');

// to generate html for the list.

module.exports = ({ items }) => {
	if (items === undefined) {
		return `
        <h1>No item in the list</h1>
        `;
	} else {
		const renderedItems = items
			.map((item) => {
				// const check = item.status ? 'checked' : '';
				return `
				<li class="list-group-item d-inline-flex">
			<div class="card bg-light" >
			<div class="card-body">
			<form method="POST" action="/remove">
             
			<div >${item.name}</div>
			<div >${item.quantity}</div>
            <input hidden value="${item.name}" name="itemName" >
			<button class="btn btn-outline-primary">remove</button>
			</div>
			</form>
			</div>
			</li>
            `;
			})
			.join('');

		return layout({
			content: `
			<h1 styles="padding-top : 500px">Your Travel Check-list</h1>
			<ul class="list-group list-group-flush">
            ${renderedItems}
            </ul>
            `
		});
	}
};

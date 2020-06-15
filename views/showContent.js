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
				const check = item.status ? 'checked' : '';
				return `
            <div>
            <label>${item.name} -- ${item.quantity}</label> 
            <form method="POST" action="/remove">
            <input hidden value="${item.name}" name="itemName" >
            <button>remove</button>
            </form>
            `;
			})
			.join('');

		return layout({
			content: `
            <h1>Your Travel Check-list</h1>
            ${renderedItems}
            
            `
		});
	}
};

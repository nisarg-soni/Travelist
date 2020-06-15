module.exports = ({ content }) => {
	// if (content !== undefined) {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Travelist</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="/public/styles.css">
      <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap" rel="stylesheet">
      
    </head>

    <body>
      <header>
        <nav class="navbar navbar-light bg-light">
          <div class="container navbar-container">
              <img src="/public/backpack.svg" class="logo">
            <h1 id="app-name">Travelist</h1>
            <form action="/clear">
                <button class="btn btn-outline-primary">Clear list</button>
            </form>
          </div>

      </header>
      
      <form method="POST" name="addItem" action="/"  >
        <div class="row" id="addItemForm">
          <div class="col" class="item-name">
            <input type="text" class="form-control" placeholder="Item Name" name="name">
          </div>
          <div class="col" class="item-quant">
            <input type="number" class="form-control" placeholder="Quantity" name="quantity">
          </div>
          <div class="col">
              <button class="btn btn-outline-success">ADD</button>
          </div>
        </div>
      </form>
    

      

    ${content}
      
    </body>
  </html>
    `;
	// } else {
	// 	return `
	//   <!DOCTYPE html>
	//   <html lang="en">
	//   <head>
	//     <meta charset="utf-8">
	//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
	//     <title>Travelist</title>
	//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	//     <link rel="stylesheet" href="styles.css">
	//     <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap" rel="stylesheet">

	//   </head>

	//   <body>
	//     <header>
	//       <nav class="navbar navbar-light bg-light">
	//         <div class="container navbar-container">
	//             <img src="backpack.svg" class="logo">
	//           <h1 id="app-name">Travelist</h1>
	//           <form action="/clear">
	//               <button class="btn btn-outline-primary">Clear list</button>
	//           </form>
	//         </div>

	//     </header>

	//     <form method="POST" name="addItem" action="/"  >
	//       <div class="row" id="addItemForm">
	//         <div class="col" class="item-name">
	//           <input type="text" class="form-control" placeholder="Item Name" name="name">
	//         </div>
	//         <div class="col" class="item-quant">
	//           <input type="number" class="form-control" placeholder="Quantity" name="quantity">
	//         </div>
	//         <div class="col">
	//             <button class="btn btn-outline-success">ADD</button>
	//         </div>
	//       </div>
	//     </form>

	//   <div>
	//     <h1 class="list-empty">List Empty</h1>
	//   </div>

	//   </body>
	// </html>
	//   `;
	// }
};

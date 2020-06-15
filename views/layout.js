module.exports = ({ content }) => {
	if (content !== undefined) {
		return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Travelist</title>
          
          
        </head>
  
        <body>
          <header>
            
              <div class="container navbar-container">
                <h1>Travelist</h1>
                <form action="/clear">
                    <button>Clear list</button>
                </form>
              </div>

          </header>

          <div>
          <form method="POST" name="addItem" action="/">
              <input name="name" placeholder="add item"/>
              <input name="quantity" placeholder="add quantity"/>
              <button>add</button>
          </form>
      </div>

          ${content}
        </body>
      </html>
    `;
	} else {
		return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Travelist</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
          <link rel="stylesheet" href="../styles">
          
        </head>
  
        <body>
          <header>
            <nav class="navbar navbar-light bg-light">
              <div class="container navbar-container">
                <h1>Travelist</h1>
                <form action="/clear">
                    <button>Clear list</button>
                </form>
              </div>

          </header>

          <div>
          <form method="POST" name="addItem" action="/">
              <input name="name" placeholder="add item"/>
              <input name="quantity" placeholder="add quantity"/>
              <button>add</button>
          </form>
      </div>

      <div>List Empty</div>
          
        </body>
      </html>
    `;
	}
};

const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const listRouter = require('./list_router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: [ 'dfgjldig9894759jhj' ]
	})
);
app.use(listRouter);
app.use('/public', express.static('public'));

const port = 3000;
app.listen(port, () => {
<<<<<<< HEAD
	console.log(`listening at port : ${port}`);
=======
	console.log(`listening on port : ${port}`);
>>>>>>> 8903a5d01838fb78a2abdc029fb35889989fcb82
});

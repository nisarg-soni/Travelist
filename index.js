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

app.listen(3069, () => {
	console.log('listening...');
});

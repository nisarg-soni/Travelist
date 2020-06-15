const Repository = require('./repository');

class ListRepository extends Repository {}

module.exports = new ListRepository('list.json');

//To create a list databse repository with all the functionality of repository.

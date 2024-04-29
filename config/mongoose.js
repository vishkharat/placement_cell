const mongoose = require('mongoose');
const DB = 'mongodb+srv://vishdcosta:6ZHT5B7IzTBiRkw0@cluster0.3jgztyl.mongodb.net/placementcell';

mongoose.set('strictQuery',false);
mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;

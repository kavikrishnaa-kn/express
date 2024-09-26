const mangoose = require('mongoose')

mongoose.connect(process.env.MONGOURL || "mongodb+srv://knkavikrishnaa:krishnaa@kavi.xwwdu.mongodb.net/?retryWrites=true&w=majority&appName=kavi")
const connection = mongoose.connection;
connection.on('connected', () => console.log("DB Connected"))
connection.on('error', () => console.log("DB Error"))

module.exports = mongoose
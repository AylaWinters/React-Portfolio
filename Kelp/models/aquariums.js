const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const aquariums = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  address: String,
  phone: Number,
  date: Date.now,
});

module.exports = aquariums;

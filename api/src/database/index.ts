const mongoose = require('mongoose')

// const conection:any = mongoose.connect('mongodb://localhost:27017/controleacoes').then(
//   response=>console.log(response)
// ).catch(e => console.log(e))

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/controleacoes', {useUnifiedTopology: true, useNewUrlParser: true}); // no callback and promise handlers

export default mongoose;
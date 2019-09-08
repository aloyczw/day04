var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1913',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', (err)=>{
  console.log('db err')
});
db.once('open', function() {
  console.log('db ok')
});
//连接数据库
//默认端口号是21707
windows  安装

mongodb   数据库安装
需要找到c盘目录下program file 下面的mongodb  server 4.2 bin 这个目录 
将该目录复制  添加到计算机属性 高级选项下 环境变量 下的path  复制到原有路径前面并以;来区分
在c盘创建一个data文件夹 里面创建一个db文件夹

mac安装
首先安装一个homebrew  软件 直接百度
看软件安装过程 将指令复制到终端
安装xcode 软件
brew  -v
brew install mongodb



mongodb  的使用
要开启二个cmd指令窗  都不要关闭 
一个输入mongod 这个是启动数据库
一个输入mongo   这个是 操纵数据的指令
db  是查看当前数据库
show dbs 显示所有数据库
use dbname   若没有就是新建一个临时的  若有就是切换到该数据库
db dropDatabase()  删除数据库
db.createCollection(集合的名字name,设置参数options{}是一个对象)
第一个参数是必填  name  第二个参数可以选填
show collections 显示集合
db.collection.drop() 用于从数据库中删除集合
db.集合名.drop()
find()  发现文档 检索集合中所有的文档结果
db.集合名.find()
pretty()  格式化显示结果
db.集合名。find().pretty()
固值查找 db.集合名.find({字段:值}})
范值查找 db.集合名.find({字段:{$gt:值}})  
$lt小于  $lte小于等于 $gt 大于 $gte 大于等于 $ne不等于


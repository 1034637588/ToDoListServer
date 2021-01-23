import mongoose from 'mongoose';
const url = 'mongodb://192.168.249.129/todo-list';
async function connect() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("数据库已连接....");
    } catch (error) {
        console.log("数据库连接失败",error);
    }    
}
export default connect;
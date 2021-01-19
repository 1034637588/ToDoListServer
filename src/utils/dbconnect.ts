import mongoose from 'mongoose';
const url = 'mongodb://localhost/todolist';
async function connect() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("数据库已连接....")
    } catch (error) {
        console.log("数据库连接失败",error);
    }    
}
export default connect;
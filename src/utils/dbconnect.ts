import mongoose from 'mongoose';
const url = 'mongodb://localhost/todolist';
async function connect() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(error);
    }    
}
export default connect;
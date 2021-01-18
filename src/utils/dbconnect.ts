import mongoose from 'mongoose';
import { noteDao } from '../dao/noteDao';
const url = 'mongodb://192.168.249.129';
async function connect() {
    try {
        let note = new noteDao();
        console.log(999)
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected!");
        note.getNoteList(1,2);
    } catch (error) {
        console.log(error);
    }    
}
export default connect;
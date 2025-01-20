import mongoose from "mongoose";


const dbCon=async()=>{
    try {
        await mongoose.connect("mongodb+srv://hafsariaz:hafsa123@cluster0.i0joy.mongodb.net/crudretryWrites=true&w=majority&appName=Cluster0")
        console.log('Mongodb is conntected')
    } catch (error) {
        console.log(error)
    }
}

export default dbCon

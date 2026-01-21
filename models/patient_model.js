import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagonsed_with:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    blood_group:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['M','F','O'],
        required:true
    },
    addmitted_in:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }
},
{
    timestamps:true
}
)

export const Patient = mongoose.model('Patient',patientSchema)
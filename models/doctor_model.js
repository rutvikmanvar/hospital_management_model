import mongoose from "mongoose";

const hospitalHours = new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    },
    hours:{
        type:Number,
        default:0
    }
})

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experience_in_year:{
        type:Number,
        default:0
    },
    works_in_hospital:{
        type:[hospitalHours]
    }
},
{
    timestamps:true
}
)

export const Doctor = mongoose.model('Doctor',doctorSchema)
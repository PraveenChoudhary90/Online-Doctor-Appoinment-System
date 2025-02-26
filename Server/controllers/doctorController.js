const DoctorModel= require("../models/doctorModel");


const doctorRegistration=async(req, res)=>{
    const {name,address, city, mobile,speciality,email, password} = req.body; 
    try {
        const Doctor = await DoctorModel.create({
            name:name,
            address:address, 
            city:city,
            mobile:mobile,
            specailization:speciality,
            email:email,
            password:password 
        })

        res.status(201).send({msg:"Doctor Succesfully Registered!"});
    } catch (error) {
           res.status(400).send({msg:"Data base not Work"})
    }

}


const doctorHomeDisplay=async( req, res) =>{
    try {
         const Doctor= await DoctorModel.find();
         res.status(200).send(Doctor);
    } catch (error) {
        console.log(error);
    }
}



const doctorLogin = async(req,res)=>{
   const { email, password } = req.body;
   try {
    const doctor = await DoctorModel.findOne({email:email});
    if(!doctor){
        res.status(400).send({msg:"Invalid Email"})
    }
    if(doctor.password != password){
        res.status(400).send({msg:"Invalid Password"})
    }
    res.status(200).send(doctor)
   } catch (error) {
    console.log(error)
   }
}


module.exports ={
    doctorRegistration,
    doctorHomeDisplay,
    doctorLogin
}
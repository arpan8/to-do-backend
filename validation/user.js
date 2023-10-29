exports.createUser =(user)=>
{
    const JoiSchema = Joi.object({
        name: Joi.string().min(5).max(30).required(),
        email: Joi.string().email().min(5).max(50).required(), 
        password: Joi.string().required(),
        phone: joi.string().length(10).pattern(/((\+*)((0[ -]+)*|(91 )*)(\d{12}+|\d{10}+))|\d{5}([- ]*)\d{6}/).required(),
    }).options({ abortEarly: false });
  
    let response = JoiSchema.validate(user)
    
    if(response.error){
        console.log(response.error.details)
    }
    else{
        next();
    }
}
  

  

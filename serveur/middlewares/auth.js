var validator = require("email-validator");
 
exports.register=(req,res,next)=>{
const {nom,prenom,genre,email,motdepasse}=req.body
if(!nom||!email||!motdepasse||!genre||!prenom){
    return(res.status(401).json({msg:'veuillez compléter vos données !'}))

}
 if (!validator.validate(email)){
    return(res.status(402).json({msg:'email non valide  !'}))
 }
 if (motdepasse.length<8){
    return(res.status(403).json({msg:'votre mot de passe doit contenir au moins 8 caractères'}))
 }


// if(genre!=="f") {return(res.json({msg:'vous devez répondre par f ou m'}))}
 //else if (genre!=="m"){ 
  // return(res.json({msg:'vous devez répondre par f ou m'}))
 //}
 next()
}

 
exports.login=(req,res,next)=>{
   const {email,motdepasse}=req.body
   if(!email||!motdepasse){
       return(res.status(401).json({msg:'veuillez compléter vos données !'}))
   
   }
    if (!validator.validate(email)){
       return(res.status(402).json({msg:'email non valide  !'}))
    }
    if (motdepasse.length<8){
       return(res.status(403).json({msg:'votre mot de passe doit contenir au moins 8 caractères'}))
    }
    next()
   }



exports.welcome=(req,res,next)=>{
    req.welmessage= "middleware working"
    next()
}
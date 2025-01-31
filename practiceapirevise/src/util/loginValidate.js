module.exports.isLogin = (req)=>{
    const {email, password} = req.body;
    if(!email) throw new Error("email is required");
    if(!password) throw new Error("password is required");
}
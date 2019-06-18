


module.exports = department => {
    return function(req, res, next) {
        if (req.user) { //if req.user exists
            if(
                req.user.department && // if department key exits in the object token
                Array.isArray(req.user.department) && // if that department value is an array
                req.user.department.includes(department) // if it includes 'department'
            ) {
                next()
            } else {
                res.status(403).json({message: 'you are not authorized'})
            }
        } else {
            res.status(500).json({message: 'you cannot pass'})
        }
    }
}








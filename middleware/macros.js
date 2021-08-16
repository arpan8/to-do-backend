exports.success = (MESSAGE, STATUS = true,statusCode = 200)=> {
    return (res) => res.json({ 
        MESSAGE,
        STATUS,
        
    }).status(statusCode)
}

exports.error = (MESSAGE, STATUS = false, statusCode = 500)=> {
    return (res) => res.json({ 
        MESSAGE,
        STATUS
    }).status(statusCode)
}


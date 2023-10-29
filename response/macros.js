exports.errorHandler = (req, res, next)=> {

    res.error = function (msg, data, code) {
        res.status(code || 500).json({ data: data, message: msg, success: false })
    }
    next()
}

exports.successHandler = (req, res, next) => {

    res.success = function (msg, data, code) {
      res.status(code || 200).json({data: data, message: msg, success: true})
    }
    next() 
  }


const errorHandler = (err, req , res, next) => {
    // if status code exist use that else use 500
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode) 
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
};

module.exports = {
    errorHandler
}
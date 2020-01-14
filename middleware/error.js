const errorHandler = (err, req, res, next) => {
    // Log to console for dev
    console.log(err.stack);

    // Mongoose bad ObjectId - (This is no longer up to date. Used to be 'CastError'.)
    if (err.name === 'Error') {
        const message = `Bootcamp not found with id of ${err.value}`;
    }

    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Server Error'
    });
};

module.exports = errorHandler;
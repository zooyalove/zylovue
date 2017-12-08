const mongoose = require('mongoose');

const {
    MONGO_URI: mongoUri
} = process.env;

module.exports = (function() {
    mongoose.Promise = global.Promise;

    return {
        connect () {
            mongoose
                .connect(mongoUri, {
                    useMongoClient: true
                })
                .then(
                    () => {
                        console.log('Successfully connected to mongodb');
                    }
                )
                .catch( e => {
                    console.error(e);
                });
        }
    };
})();
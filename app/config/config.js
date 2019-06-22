const config = {
    db: {
        url: 'mongodb://localhost:27017/tagme',
        options: {
            server: {
            
                socketOptions: {keepAlive: 1},
                auto_reconnect: true
            }
        }
    },

 
};

module.exports = config
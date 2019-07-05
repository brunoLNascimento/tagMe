const config = {
    db: {
        //url: 'mongodb://localhost:27017/tagme',
        url: 'mongodb+srv://bruno:bruno123@tagme-ziw9b.mongodb.net/test?retryWrites=true&w=majority',
        options: {
            server: {
            
                socketOptions: {keepAlive: 1},
                auto_reconnect: true
            }
        }
    },

 
};

module.exports = config
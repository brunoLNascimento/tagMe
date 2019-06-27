const menu = require('../controllers/menu_controllers')
    
module.exports = function(server) {	
    server.post('/tagMe/menu/', menu.saveMenu)
    server.get('/tagMe/menu/:nomePrato?', menu.getMenu)
    server.put('/tagMe/dish', menu.getDish)
    server.delete('/tagMe/:id', menu.removeDish)

    
    
}
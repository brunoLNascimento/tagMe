var mongoose = require('mongoose');
const Menu = mongoose.model('Menu');
mongoose.set('debug', true)

exports.saveMenu = function (req, res){

    var menu = validaCampos(req)

    menu.save(function(err, saved){
        if(err){
            return res.status(500).send({message: "Erro ao salvar prato!"})
        }
        if(saved){
            return res.status(201).send({
                message: saved._doc.message,
                res: saved
            })
        }else{
            return res.status(400).send({message: "Algo deu errado!"})
        }
    })
}
     

exports.getMenu = function (req, res){
  
    Menu.find({ active: true }, function (err, response){
        if(err){
            return res.status(500).send({message: "Erro ao consultar menu"})
        }
        if(response.length){
            return res.status(200).send(response) 
        }else{
            return res.status(204).send({message: "Menu não encontrado!"})
        }
    })
}

exports.getDish = function (req, res){
  var queryFind = { active: true, menu_id: req.body.id }

    Menu.findOne( queryFind, function (err, response){
        if(err){
            return res.status(500).send({message: "Erro ao consultar menu"})
        }
        if(response){
            var inc = response._doc.pratoVendido + 1
            var updateDish = { pratoVendido: inc }

            Menu.findOneAndUpdate(queryFind, updateDish, function(err, updated){
                if(err){
                    return res.status(500).send({message: "Erro ao solicitar menu"})
                }
                if(updated){
                    return res.status(200).send({message: "Prato: " +updated._doc.nomePrato+ ", solicitado com sucesso!"}) 
                }else{
                    return res.status(403).send({message: "Algo deu errado ao solicitar prato!"}) 
                }
            })
        }else{
            return res.status(204).send({message: "Menu não encontrado!"})
        }
    })
}

exports.removeDish = function(req, res){
    //Exclusão são lógicas, altera active true para active false
    var queryFind = { menu_id: req.params.id, active: true }
    var queryUpdate = { active: false, removed_at: new Date() }

    Menu.findOneAndUpdate(queryFind, queryUpdate, function(err, updated){
        if(err){
            return res.status(500).send({message: "Erro ao atualizar"})
        }
        if(updated){
            return res.status(200).send({message: "Prato: " +updated._doc.nomePrato+ ", reomvido com sucesso!"})
        }else{
            return res.status(204).send({message: "Nenhum prato encontrado!"})
        }
    })
}

validaCampos = function(req){
    //Função carrega dados para salvar
    var menu = new Menu({
        created_at: new Date(),
        nomePrato:  req.body.nomePrato,
        discricaoPrato: req.body.discricaoPrato,
        ingredientes: req.body.ingredientes,
        modoPreparo: 
            {
            tempo: req.body.modoPreparo.tempo,
            passo1: req.body.modoPreparo.passo1,
            passo2: req.body.modoPreparo.passo2,
            passo3: req.body.modoPreparo.passo3,
            passo4: req.body.modoPreparo.passo4,
            passo5: req.body.modoPreparo.passo5,
            passo6: req.body.modoPreparo.passo6,
            passo7: req.body.modoPreparo.passo7,
            passo8: req.body.modoPreparo.passo8,
            passo9: req.body.modoPreparo.passo9,
            passo10: req.body.modoPreparo.passo10
            }
        
    })
    return menu
}
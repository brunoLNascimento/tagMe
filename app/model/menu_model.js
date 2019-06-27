var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoincrement = require('mongoose-sequence')(mongoose)

const menu = new Schema({
    active: {type: Boolean, default: true},
    created_at: {type: Date},
    removed_at: {type: Date},
    image: { type: String },
    nomePrato:  { type: String, field: 'nomePrato', required: "Nome do prato é um campo obrigatório!" },
    discricaoPrato: { type: String, field: 'discricaoPrato', required: "Discrição do prato é um campo obrigatório!" },
	ingredientes: { type: String, field: 'ingredientes', required: "Ingredientes é um campo obrigatório!" },
	modoPreparo: {
        tempo: { type: String },
        passo1: { type: String },
        passo2: { type: String },
        passo3: { type: String },
        passo4: { type: String },
        passo5: { type: String },
        passo6: { type: String },
        passo7: { type: String },
        passo8: { type: String },
        passo9: { type: String },
        passo10: { type: String }
        },
    pratoVendido: {type: Number, default: 0 }
});


menu.plugin(autoincrement, {inc_field: 'menu_id'}).set('toJSON', {
    getters: true,
    virtuals: true
})

mongoose.model('Menu', menu);
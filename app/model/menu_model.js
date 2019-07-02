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
    tempo: { type: String },
	ingredientes: [{ }],
	modoPreparo: [{  }],
    pratoVendido: {type: Number, default: 0 }
});


menu.plugin(autoincrement, {inc_field: 'menu_id'}).set('toJSON', {
    getters: true,
    virtuals: true
})

mongoose.model('Menu', menu);
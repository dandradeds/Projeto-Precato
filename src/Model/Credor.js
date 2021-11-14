'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Credores extends Model {
    static associate(models) {
       
    }
  };

  Credores.init({
    identificador_credor: DataTypes.STRING,
    nome_credor: DataTypes.STRING,
    cpf_credor: DataTypes.STRING,
    status_cadastro: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'credores',
    defaultScope: { order: [['id', 'ASC']] }
  });

  return Credores;
};
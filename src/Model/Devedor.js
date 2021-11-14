'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Devedor extends Model {
    static associate(models) {
       
    }
  };

  Devedor.init({
    identificador_devedor: DataTypes.STRING,
    nome_devedor: DataTypes.STRING,
    cpnj_devedor: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'devedores',
    defaultScope: { order: [['id', 'ASC']] }
  });

  return Devedor;
};
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pagamentos extends Model {
    static associate(models) {
       
    }
  };

  Pagamentos.init({
    identificador_remessa: DataTypes.STRING,
    identificador_credor: DataTypes.STRING,
    identificador_ente_devedor: DataTypes.STRING,
    valor_inicial: DataTypes.FLOAT,
    valor_final: DataTypes.FLOAT,
    data: DataTypes.DATE,
    status_remessa: DataTypes.STRING,
    motivo: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'pagamentos',
    defaultScope: { order: [['id', 'ASC']] }
  });

  return Pagamentos;
};
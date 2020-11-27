const Sequelize = require('sequelize');
const {connection, db} = require('../database/connection')

const Contracts = db.define('informacao', {
    numCont: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    dataPub: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    tipoCont: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    tipoProc: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    descr: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    fund: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    fundNec: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    adjudicante: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    adjudicatario: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    obj: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    cpv: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    dataCeleb: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    pContr: {
      type: Sequelize.DECIMAL(19,2),
      allowNull: false
    },
    prazoExe: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    localExe: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    conc: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    anuncio: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    inc15: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    docs: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    obs: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    dataFecho: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    pTotalEf: {
      type: Sequelize.DECIMAL(19,2),
      allowNull: false
    },
    causasPrazo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    causasPreco: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  }, {
    db,
    tableName: 'informacao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numCont" },
        ]
      },
    ]
  });


module.exports = Contracts

// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const LogisticsServiceKinds = sequelize.define('logisticsServiceKinds', {
    servicekinds: {
      type: DataTypes.ENUM('fullfillment','storeproduct','processing','etc'),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'logistics_service_kinds',
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  LogisticsServiceKinds.associate = (models) => {
    LogisticsServiceKinds.belongsTo(models.detailOrderInfos, {
      foreignKey: {
        name: 'detailOrderInfoSeqKey',
        field: 'DetailOrderInfoSeq',
      },
      targetKey: 'seq',
      as: 'detailOrderInfoSeq',
    });
  };

  return LogisticsServiceKinds;
};
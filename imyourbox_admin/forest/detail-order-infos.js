const { collection } = require('forest-express-sequelize');

// This file allows you to add to your Forest UI:
// - Smart actions: https://docs.forestadmin.com/documentation/reference-guide/actions/create-and-manage-smart-actions
// - Smart fields: https://docs.forestadmin.com/documentation/reference-guide/fields/create-and-manage-smart-fields
// - Smart relationships: https://docs.forestadmin.com/documentation/reference-guide/relationships/create-a-smart-relationship
// - Smart segments: https://docs.forestadmin.com/documentation/reference-guide/segments/smart-segments
collection('detailOrderInfos', {
  actions: [{
    name : "upload estimate",
    type:'single',
    fields:[
      {
      field:'맞춤 견적서 업데이트',
      description:'고객사에게 제공할 견적서를 업로드합니다.',
      type:'File',
      isRequired:true
      },
  ]
  }],
  isSearchable: true,
  fields: [],
  segments: [],
});

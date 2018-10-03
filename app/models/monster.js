import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  level: DS.attr('number'),
  active: DS.attr('boolean')
});

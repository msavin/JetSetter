
Template.JetSetter_row.helpers({
    value: function () {
        var value = Session.get(this);
        var stringed = JSON.stringify(value, undefined, 0);
        return stringed;
   }
});
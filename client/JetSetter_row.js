Template.JetSetter_row.events({
    'click .JetSetter_row': function () {

        Session.set("JetSetter_settings_edit", false)
        
        var current = Session.get("JetSetter_current")

        if (current === String(this)) {
        	Session.set("JetSetter_current", null);
        } else {
        	Session.set("JetSetter_current", String(this));
        }



    }
});

Template.JetSetter_row.helpers({
    value: function () {
        
        var value = Session.get(this);
        var stringed = JSON.stringify(value, undefined, 0);
        return stringed;
   },
   expand: function () {
    var current = Session.get("JetSetter_current");
    
    if (current === String(this)) {
        return "JetSetter_row_expand";
    }

   }
});
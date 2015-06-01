Template.JetSetter_Component.helpers({
	expand: function () {
	    
	    var current = String(Session.get("JetSetter_current"));
	    var item    = "JetSetter_" + String(this.name);

	    if (current === item) {
	        return "JetSetter_row_expand";
	    }

	}
});

Template.JetSetter_Component.events({
	'click .JetSetter_row': function () {

		var current = String(Session.get("JetSetter_current"));
		var target  = "JetSetter_" + String(this.name);

		if (current === target) {
			Session.set("JetSetter_current", null);
		} else {
			Session.set("JetSetter_current", target);
		}
		
	},
	'click .JetSetter_editor': function (e, t) {
	    e.stopPropagation();
	}
});


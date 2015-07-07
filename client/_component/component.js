Template.JetSetter_Component.helpers({
	expand: function () {
	    
	    var current = String(MeteorToysDict.get("JetSetter_current"));
	    var item    = "JetSetter_" + String(this.name);

	    if (current === item) {
	        return "JetSetter_row_expand";
	    }

	}
});

Template.JetSetter_Component.events({
	'click .JetSetter_row': function () {

		var current = String(MeteorToysDict.get("JetSetter_current"));
		var target  = "JetSetter_" + String(this.name);

		if (current === target) {
			MeteorToysDict.set("JetSetter_current", null);
		} else {
			MeteorToysDict.set("JetSetter_current", target);
		}
		
	},
	'click .JetSetter_editor': function (e, t) {
	    e.stopPropagation();
	}
});


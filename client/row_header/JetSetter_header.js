Template.JetSetter_header.events({
    'click .JetSetter_row': function () {

        var current = String(Session.get("JetSetter_current"));
        var target  = "JetSetter_header_expand";

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

Template.JetSetter_header.helpers({
	expand: function () {
		
		var current = String(Session.get("JetSetter_current"));

		if (current === "JetSetter_header_expand") {
			return "JetSetter_row_expand"
		}

	}
});


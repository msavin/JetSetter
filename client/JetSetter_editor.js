Template.JetSetter_editor.events({
	'click .JetSetter_button_edit': function () {
		Session.set("JetSetter_settings_edit", true)
	},
	'click .JetSetter_button_save': function () {
		
		// data the data
		var data = $("#JetSetter_editor_" + String(this)).text();

		// Parse it

		var newObject = false;

		try {
		  newObject = JSON.parse(data);
		} catch (error) {
		  var newObject = "JetSetter_failed_change"
		  // alert("There was an error with your input.")
		}

		if (newObject === "JetSetter_failed_change") {
			// Do nothing
		} else {
			Session.set(this, newObject)	
		}

		Session.set("JetSetter_settings_edit", false);

	},
	'click .JetSetter_button_cancel': function () {
		Session.set("JetSetter_settings_edit", false)
	},
	'click .JetSetter_editor': function (e, t) {
		e.stopPropagation();
	},
	'click .JetSetter_button_drop': function () {
		
		Session.set("JetSetter_current", null)
		currentSession = this; 

		window.setTimeout(function() {
			delete Session.keys[currentSession];
			JetSetter.getKeys();
		}, 300);
		

	}
});

Template.JetSetter_editor.helpers({
	content: function () {
		var value = Session.get(this);
		var stringed = JSON.stringify(value, undefined, 2);
		return JetSetter.colorize(stringed);
	},
	editing: function () {
		return Session.get("JetSetter_settings_edit");
	}
});
Template.JetSetter_create.events({
    'click .JetSetter_row': function () {
        // Focus on input
        window.setTimeout(function() {
            $(".JetSetter_editor_title").focus();
        }, 300);
        
    },
    'click .JetSetter_button_new': function () {
        
        // get values
        var js_key    = $(".JetSetter_editor_title").val(),
            js_value  = $(".JetSetter_editor_create").text(),
            js_result = "jetsetter_empty_value";

        // ensure key has value 
        if (!js_key) {
            alert("Please enter a Session key");
            return false;
        }
        
        // convert string to json

        try {
          js_result = JSON.parse(js_value);
        } catch (error) {
          alert("There was an error with your input.");
          return false;
        }

        // run magic

        if (js_result === "jetsetter_empty_value") {
            // do nothing
        } else {
            // set session
            Session.set(js_key, js_result);

            // rerun key fetch to seem instant
            JetSetter.getKeys()

            // reset inputs
            $(".JetSetter_editor_title").val("")
            $(".JetSetter_editor_create").text("")
        }

    }
});

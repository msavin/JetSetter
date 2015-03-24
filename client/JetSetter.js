Template.body.helpers({
    expanded: function () {
        var current = Session.get("JetSetter_current");
        if (current) {
            return "JetSetter_expand"
        }
    },
    SessionItems: function () {
        // Hide the JetSetter session
        var array = Session.get("JetSetter");

        // Return just the developers sessions
        return array;
    }
});

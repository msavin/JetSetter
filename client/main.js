Template.JetSetter.helpers({
    expanded: function () {
        var current = Session.get("JetSetter_current");
        if (current) {
            return "JetSetter_expand"
        }
    },
    SessionItems: function () {

        var array = Session.get("JetSetter");
        return array;
    }
});
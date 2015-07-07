// Initialize Reactive-Dict
  MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;

Template.JetSetter.helpers({
    expanded: function () {
        var current = MeteorToysDict.get("JetSetter_current");
        if (current) {
            return "JetSetter_expand"
        }
    },
    SessionItems: function () {

        var array = MeteorToysDict.get("JetSetter");
        return array;
    }
});
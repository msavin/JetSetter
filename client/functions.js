
// Initialize Dict
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;

JetSetter = {
    getKeys: function () {

        var keys = Object.getOwnPropertyNames(Session.keys);
        keys = JetSetter.arrayCleaner(keys, "Meteor.");
        MeteorToysDict.set("JetSetter", keys);

    },
    arrayCleaner: function(array, toRemove) {
        
        var length = toRemove.length;

        for (var i = 0; i < array.length; i++) {
            if(array[i].substr(0, length) === toRemove) {
                array.splice(i, 1);
                i--;  
            }
        }

        return array;

    },
    'colorize': function (json) {
      
      // Should merge this out of here and Mongol into ToyKit
      
      // colorized the JSON objects
      if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
      }
      json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        var cls = 'Mongol_number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'Mongol_key';
          } else {
            cls = 'Mongol_string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'Mongol_boolean';
        } else if (/null/.test(match)) {
          cls = 'Mongol_null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      });

    },
}
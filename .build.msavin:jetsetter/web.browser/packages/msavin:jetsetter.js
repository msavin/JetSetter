(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/msavin:jetsetter/template.jetsetter.js                                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.body.addContent((function() {                                                                       // 2
  var view = this;                                                                                           // 3
  return Blaze.If(function() {                                                                               // 4
    return Spacebars.call(view.lookup("JetSetter_enabled"));                                                 // 5
  }, function() {                                                                                            // 6
    return [ "\n		", HTML.DIV({                                                                              // 7
      id: "JetSetter"                                                                                        // 8
    }, "\n			", Spacebars.include(view.lookupTemplate("JetSetter_header")), "\n			", Blaze.Each(function() { // 9
      return Spacebars.call(view.lookup("SessionItems"));                                                    // 10
    }, function() {                                                                                          // 11
      return [ "\n				", HTML.DIV({                                                                          // 12
        "class": "JetSetter_row"                                                                             // 13
      }, "\n					", HTML.SPAN(Blaze.View(function() {                                                        // 14
        return Spacebars.mustache(view.lookup("."));                                                         // 15
      })), ":\n					", Blaze.View(function() {                                                               // 16
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));                                  // 17
      }), "\n				"), "\n			" ];                                                                              // 18
    }, function() {                                                                                          // 19
      return [ "\n				", Spacebars.include(view.lookupTemplate("JetSetter_empty")), "\n			" ];               // 20
    }), "\n		"), "\n	" ];                                                                                    // 21
  });                                                                                                        // 22
}));                                                                                                         // 23
Meteor.startup(Template.body.renderToDocument);                                                              // 24
                                                                                                             // 25
Template.__checkName("JetSetter_empty");                                                                     // 26
Template["JetSetter_empty"] = new Template("Template.JetSetter_empty", (function() {                         // 27
  var view = this;                                                                                           // 28
  return HTML.Raw('<div class="JetSetter_row_empty">\n		<span>None Found</span>\n	</div>');                  // 29
}));                                                                                                         // 30
                                                                                                             // 31
Template.__checkName("JetSetter_header");                                                                    // 32
Template["JetSetter_header"] = new Template("Template.JetSetter_header", (function() {                       // 33
  var view = this;                                                                                           // 34
  return HTML.Raw('<div class="JetSetter_row">\n		<strong style="color: #fff !important">JetSetter</strong>\n	</div>');
}));                                                                                                         // 36
                                                                                                             // 37
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/msavin:jetsetter/jetsetter.js                                                                    //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
if (Meteor.isClient) {                                                                                       // 1
                                                                                                             // 2
    var JetSetter = {                                                                                        // 3
        "getKeys": function () {                                                                             // 4
            var JetSetter_Keys = Object.getOwnPropertyNames(Session.keys);                                   // 5
            Session.set("JetSetter", JetSetter_Keys);                                                        // 6
        }                                                                                                    // 7
    }                                                                                                        // 8
                                                                                                             // 9
                                                                                                             // 10
    if (!Object.observe) {                                                                                   // 11
                                                                                                             // 12
        setInterval(function(){                                                                              // 13
            JetSetter.getKeys()                                                                              // 14
            // MongolPackage.setSubscriptionKeys();                                                          // 15
        }, 3000);                                                                                            // 16
                                                                                                             // 17
    } else {                                                                                                 // 18
                                                                                                             // 19
        Object.observe(Session.keys, function() {                                                            // 20
            JetSetter.getKeys()                                                                              // 21
            // MongolPackage.setSubscriptionKeys();                                                          // 22
        });                                                                                                  // 23
                                                                                                             // 24
    }                                                                                                        // 25
                                                                                                             // 26
                                                                                                             // 27
    var SessionChecker = {                                                                                   // 28
        null: function (value) {                                                                             // 29
            if (value === null) {                                                                            // 30
                return true;                                                                                 // 31
            }                                                                                                // 32
        },                                                                                                   // 33
        boolean: function (value) {                                                                          // 34
            if (typeof value === "boolean") {                                                                // 35
                return true;                                                                                 // 36
            }                                                                                                // 37
        },                                                                                                   // 38
        array: function(value) {                                                                             // 39
            if ($.isArray(value)) {                                                                          // 40
                return true;                                                                                 // 41
            }                                                                                                // 42
        },                                                                                                   // 43
        number: function (value) {                                                                           // 44
            if (typeof value === "number") {                                                                 // 45
                return true;                                                                                 // 46
            }                                                                                                // 47
        },                                                                                                   // 48
        string: function (value) {                                                                           // 49
            if (typeof value === "string") {                                                                 // 50
                return true;                                                                                 // 51
            }                                                                                                // 52
        }                                                                                                    // 53
    }                                                                                                        // 54
                                                                                                             // 55
    Template.body.helpers({                                                                                  // 56
        JetSetter_enabled: function () {                                                                     // 57
                                                                                                             // 58
            if (Package['msavin:mongol']) {                                                                  // 59
                return Session.get("Mongol_settings_display");                                               // 60
            } else {                                                                                         // 61
                return true;                                                                                 // 62
            }                                                                                                // 63
        },                                                                                                   // 64
        SessionItems: function () {                                                                          // 65
            // Hide the JetSetter session                                                                    // 66
            var array = Session.get("JetSetter");                                                            // 67
                                                                                                             // 68
            var i = array.indexOf("JetSetter");                                                              // 69
            if (i != -1) {                                                                                   // 70
                array.splice(i, 1)                                                                           // 71
            }                                                                                                // 72
                                                                                                             // 73
            // Return just the developers sessions                                                           // 74
            return array;                                                                                    // 75
        },                                                                                                   // 76
        value: function () {                                                                                 // 77
                                                                                                             // 78
            var value = Session.get(this);                                                                   // 79
                                                                                                             // 80
            switch (true) {                                                                                  // 81
                case SessionChecker.null(value):                                                             // 82
                    return '<i>null</i>';                                                                    // 83
                    break;                                                                                   // 84
                case SessionChecker.boolean(value):                                                          // 85
                    return '<i>' + value + '</i>';                                                           // 86
                    break;                                                                                   // 87
                case SessionChecker.number(value):                                                           // 88
                    return value;                                                                            // 89
                    break;                                                                                   // 90
                case SessionChecker.string(value):                                                           // 91
                    return '"' + value + '"';                                                                // 92
                    break;                                                                                   // 93
                case SessionChecker.array(value):                                                            // 94
                    return "[" + value + "]";                                                                // 95
                    break;                                                                                   // 96
                default:                                                                                     // 97
                    return "<i>Object</i>";                                                                  // 98
                    break;                                                                                   // 99
            }                                                                                                // 100
                                                                                                             // 101
        }                                                                                                    // 102
    });                                                                                                      // 103
                                                                                                             // 104
    Template.body.events({                                                                                   // 105
        'click .JetSetter_row': function () {                                                                // 106
                                                                                                             // 107
            // var value = prompt("What would you like to change the value of this Session variable to?");   // 108
                                                                                                             // 109
            // if (value === "" || value === null || value === undefined)  {                                 // 110
            //     console.log("JetSetter: Prompt entry cannot be empty. To set null value, enter null.");   // 111
            // } else {                                                                                      // 112
                                                                                                             // 113
            //     switch (value) {                                                                          // 114
            //         case "false":                                                                         // 115
            //             Session.set(this, false);                                                         // 116
            //             break;                                                                            // 117
            //         case "true":                                                                          // 118
            //             Session.set(this, true);                                                          // 119
            //             break;                                                                            // 120
            //         case "null":                                                                          // 121
            //             Session.set(this, null);                                                          // 122
            //             value = "null";                                                                   // 123
            //             break;                                                                            // 124
            //         default:                                                                              // 125
            //             Session.set(this, value);                                                         // 126
            //             break;                                                                            // 127
            //     }                                                                                         // 128
            // }                                                                                             // 129
            console.log(Session.get(this))                                                                   // 130
                                                                                                             // 131
        }                                                                                                    // 132
    });                                                                                                      // 133
                                                                                                             // 134
}                                                                                                            // 135
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

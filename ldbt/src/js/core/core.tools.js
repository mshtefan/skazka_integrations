(function () {

  angular.module('core.tools', [])

    .service('tools', function () {

      this.find = function (arr, props, index) {

        var found = [];

        if (Object.prototype.toString.call(arr) !== "[object Array]") return [];
        if (Object.prototype.toString.call(props) !== "[object Object]") return arr;

        for (var i = 0, len = arr.length; i < len; i += 1) {

          var obj = arr[i];

          var right = true;

          for (var p in props) {
            if (props[p] !== obj[p]) {
              right = false;
            }
          }

          right && index && found.push({index: i, value: obj});
          right && !index && found.push(obj);

        }

        if (found.length < 1) {
          index && found.push({index: -1, value: null});
        }

        return found;

      };

      this.findByProperty = function (arr, prop, value, index) {
        if (angular.isArray(arr)) {
          for (var i = 0, len = arr.length; i < len; i += 1) {
            if (arr[i] && arr[i][prop] === value) {
              if (index) {
                return {
                  obj: arr[i],
                  index: [i]
                };
              } else {
                return arr[i];
              }
            }
          }
        }
        return false;
      };

      this.remove = function (arr, elm) {

        var rem_index = arr.indexOf(elm);

        if (rem_index > -1) {
          arr.splice(rem_index, 1);
        }

        return arr;

      };

      this.generate_id = function () {
        // always start with a letter (for DOM friendlyness)
        var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
          // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
          var ascicode = Math.floor((Math.random() * 42) + 48);
          if (ascicode < 58 || ascicode > 64) {
            // exclude all chars between : (58) and @ (64)
            idstr += String.fromCharCode(ascicode);
          }
        } while (idstr.length < 32);

        return (idstr);
      };

    });

}());

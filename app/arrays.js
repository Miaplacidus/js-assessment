if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = 0 ; i < arr.length ; i++){
            if (arr[i] == item) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        s = 0;
        for (var i = 0 ; i < arr.length ; i++){
            s+= arr[i];
        }
        return s;
    },

    remove : function(arr, item) {
        var item_index = 0;

        for (var i = 0 ; i < arr.length ; i++){
            if (arr[i] == item) {
                arr.splice(i, 1)
            }
        }

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        // RETURN HERE
        var item_index = 0;

        for (var i = 0 ; i < arr.length ; i++){
            if (arr[i] == item) {
                arr.splice(i, 1)
            }
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2)
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var counter = 0;
        for (var i = 0 ; i < arr.length ; i++){
            if (arr[i] == item) {
                counter++;
            }
        }
        return counter;
    },

    duplicates : function(arr) {
        var occur = new Object(0);
        for (var i = 0 ; i < arr.length ; i++){

        }
    },

    square : function(arr) {
        var sqr = [];
        for (var i = 0 ; i < arr.length ; i++) {
            sqr.push(arr[i]*arr[i])
        }
        return sqr;
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});

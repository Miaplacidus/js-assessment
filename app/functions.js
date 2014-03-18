if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
         obj.func = fn;
         return obj.func();
    },

    functionFunction : function(str) {
        function retfunc (new_str){
            return str +", " + new_str;
        }

        return retfunc;
    },

    makeClosures : function(arr, fn) {
        var new_arr = [];
        for (var i = 0 ; i < arr.length ; i++){
            new_arr.push(fn(arr[i]));
        }
        return new_arr;
    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});

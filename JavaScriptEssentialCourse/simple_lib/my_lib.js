/**
 * Created by atran on 11/22/14.
 */
function _(id) {

    var about = {
        version: 1.0,
        author: "n00b",
        created: "Nov 2014"
    };

    if (id) {
        if (window === this) {
            return new _(id);
        }

        this.e = document.getElementById(id);
        return this;
    }
    else {
        return about;
    }
}

_.prototype = {
    toggle: function() {
        return this;
    },

    hide: function () {
        this.e.style.display = 'none';
        return this;
    },

    show: function () {
        this.e.style.display = 'inherit';
        return this;
    },

    val: function (newval) {
        this.e.value = newval;
        return this;
    },

    size: function (height, width) {
        this.e.style.height = height;
        this.e.style.width = width;
        return this;
    },

    bgcolor: function (color) {
        this.e.style.background = color;
        return this;
    }
}
+ function($) {
    'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    var dropZone = document.getElementById('drop-zone');

    dropZone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'drop-zone';
    }

    dropZone.ondragover = function() {
        this.className = 'drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function() {
        this.className = 'drop-zone';
        return false;
    }

}(jQuery);

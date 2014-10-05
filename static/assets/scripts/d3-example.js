(function() {

  var d3Example = function() {

    function my(sel) {
      sel.each(function() {
        var _el = d3.select(this);
        var textarea = _el.select('.codebox').node();
        CodeMirror.fromTextArea(textarea, {

        })
      })
    }

    return my;

  }

})();

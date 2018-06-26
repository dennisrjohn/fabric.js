(function() {

  /**
   * Override _setObjectScale and apply max and min dimensions
   */

  fabric.Canvas.prototype._setObjectScale = function (localMouse, transform,
    lockScalingX, lockScalingY, by, lockScalingFlip, _dim) {

    var returnValue = false;
    var t = transform.target;
    var tw = t._getTransformedDimensions().x;
    var w = t.width * (localMouse.x / tw);
    if (w >= t.getMinWidth() && w <= t.getMaxWidth()) {
      t.set('width', w);
      returnValue = true;
    }
    var th = t._getTransformedDimensions().y;
    var h = t.height * (localMouse.y / th);
    if (h >= t.getMinHeight() && h <= t.getMaxHeight()) {
      t.set('height', h);
      returnValue = true;
    }
    return returnValue;
  };
})();

export ragAdjust from "./ragAdjust"

export const makeSentence = (arr) => {
  if (arr.length === 1) return arr[0];
  const firsts = arr.slice(0, arr.length - 1);
  const last = arr[arr.length - 1];
  return firsts.join(', ') + ' and, ' + last;
}

export const arrayToObject = (array, keyField) => (
  array.reduce((obj, item) => {
    obj[item[keyField]] = item
    return obj
  }, {})
)

// function to map a value from one range to another range
export const mapRange = (value, in_min, in_max, out_min, out_max) => {
	return (
	  ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
	);
};

export const getNumericStyleProp = (el, styleProp) => {
  if (typeof document !== `undefined`) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return parseFloat(defaultView.getComputedStyle(el, null).getPropertyValue(styleProp));
    } else if (el.currentStyle) { // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
        return (function(value) {
          var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + 'px';
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return parseFloat(value);
    }
  }
}


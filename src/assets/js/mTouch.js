
function css (element, attr, val) {
  if (attr === 'scale' || attr === 'scaleX' || attr === 'scaleY' || attr === 'scaleZ' || attr === 'rotateX' || attr === 'rotateY' ||
    attr === 'rotateZ' || attr === 'rotate' || attr === 'skewX' || attr === 'skewY' || attr === 'translateX' || attr === 'translateY' || attr === 'translateZ') {
    return cssTransform(element, attr, val)
  }
  if (arguments.length === 2) {
    let val = getComputedStyle(element)[attr]
    if (attr === 'opacity') {
      val = Math.round(val * 100)
    }
    return parseFloat(val)
  }
  if (attr === 'opacity') {
    element.style.opacity = val / 100
  } else {
    element.style[attr] = val + 'px'
  }
}
function cssTransform (element, attr, val) {
  if (!element.transform) {
    element.transform = {}
  }
  if (typeof val === 'undefined') {
    if (typeof element.transform[attr] === 'undefined') {
      switch (attr) {
        case 'scale':
        case 'scaleX':
        case 'scaleY':
        case 'scaleZ':
          element.transform[attr] = 100
          break
        default:
          element.transform[attr] = 0
      }
    }
    return element.transform[attr]
  } else {
    element.transform[attr] = val
    let transformVal = ''
    for (let s in element.transform) {
      switch (s) {
        case 'scale':
        case 'scaleX':
        case 'scaleY':
        case 'scaleZ':
          transformVal += s + '(' + (element.transform[s] / 100) + ') '
          break
        case 'rotate':
        case 'rotateX':
        case 'rotateY':
        case 'rotateZ':
        case 'skewX':
        case 'skewY':
          transformVal += s + '(' + element.transform[s] + 'deg) '
          break
        default:
          transformVal += s + '(' + element.transform[s] + 'px) '
      }
    }
    element.style.WebkitTransform = element.style.transform = transformVal
  }
}

export {
  css
}

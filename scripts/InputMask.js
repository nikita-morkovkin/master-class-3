const rootSelector = '[data-js-input-mask]'

const createMask = () => {
  const element = document.querySelector(rootSelector)
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  const mask = IMask(element, maskOptions);
}

createMask();
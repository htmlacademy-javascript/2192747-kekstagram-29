const STEP = 25;
const MIN_STEP = 25;
const MAX_STEP = 100;
const DEFAULT = 100;

const smallControl = document.querySelector('.scale__control--smaller');
const bigControl = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const imgElement = document.querySelector('.img-upload__preview img');

const scaleImg = (value) => {
  imgElement.style.transform = `scale(${value / 100})`;
  controlValue.value = `${value}%`;
};


const onSmallControlClick = () => {
  let newValue = parseInt(controlValue.value, 10) - STEP;

  newValue = Math.max(MIN_STEP, newValue); // Используем Math.max вместо условия для установки минимального значения

  scaleImg(newValue);
};

const onBigControlClick = () => {
  let newValue = parseInt(controlValue.value, 10) + STEP;

  newValue = Math.min(MAX_STEP, newValue); // Используем Math.min вместо условия для установки максимального значения

  scaleImg(newValue);
};

const resetScale = () => scaleImg(DEFAULT);

const setScaleListener = () => {
  smallControl.addEventListener('click', onSmallControlClick);
  bigControl.addEventListener('click', onBigControlClick); // Поправили название функции на onBigControlClick
};

export { resetScale, setScaleListener };


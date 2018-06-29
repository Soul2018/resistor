import Options from '../../Utilities/OptionsAandB';

const isRightColor = (color) => {
	let test;
    test = Options.some((val) => val.label === `${color}` && val.significant === 0);
  return test;
};

export  default isRightColor;
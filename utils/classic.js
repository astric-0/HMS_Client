const reduceObj = (cssObj) =>
	cssObj?.constructor == Object
		? Object.entries(cssObj).reduce(
				(added, [value, condition]) =>
					condition ? added + value + " " : added,
				""
		  )
		: cssObj;

const classic = (...css) =>
	css.reduce((added, curr) => {
		return added + " " + reduceObj(curr);
	}, "");

export default classic;

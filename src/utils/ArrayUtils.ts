export const isValidArray = (target: Array<unknown> | undefined) => {
	if (!target) return false;
	return target.length > 0;
};

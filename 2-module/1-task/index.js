/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
	let summa = 0;
	for (let value of Object.values(salaries)) {
		if (typeof value == 'number') {
			summa += value;
		}
	}
	return summa;
}

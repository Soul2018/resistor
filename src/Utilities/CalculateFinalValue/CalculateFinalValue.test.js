
import CalculateFinalValue from './CalculateFinalValue';



it('calculate ohm value', () => {
	describe('Given band values' ,() => {
		const result = [0, 0, 1, 20]
		debugger
		const {minValue, maxValue, initialValue} = CalculateFinalValue(result);
		expect(minValue).toBe(0);
		expect(maxValue).toBe(0);
		expect(initialValue).toBe(0);

	});
});
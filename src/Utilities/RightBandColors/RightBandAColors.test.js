import RightColorA from './RightBandColors';


	it('return true for the correspondent color ', () => {
		describe('Given the significant value' ,() => {
			const testColor = 'Black';
			const isMatch = RightColorA(testColor);
			expect(isMatch).toBeTruthy();
		});

	});


it('return throws on Gold', () => {
    describe('Given bad color', () => {
		const badValue = 'Gold';
		expect(() => {
			RightColorA(badValue);
		}).toThrow();
    });
});
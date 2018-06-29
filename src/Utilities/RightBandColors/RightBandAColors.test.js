import RightColorA from './RightBandColors';


	it('return true for the correspondent color ', () => {
		describe('Given the color of the significant value' ,() => {
			const testColor = 'Black';
			const isMatch = RightColorA(testColor);
			expect(isMatch).toBeTruthy();
		});

	});


it('return throws on the bad color Gold', () => {
    describe('Given a bad color', () => {
		const badValue = 'Gold';
		expect(() => {
			RightColorA(badValue);
		}).toThrow();
    });
});

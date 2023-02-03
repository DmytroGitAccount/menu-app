import { DatePipePipe } from './date-pipe.pipe';

describe('DatePipePipe', () => {
	let pipe: DatePipePipe;

	it('should create an instance', () => {
		pipe = new DatePipePipe();
		expect(pipe).toBeTruthy();
	});

	it('should transform ISO string into locale string', () => {
		const isoString = '2023-02-03T20:01:14.261+01:00';

		const localeString = pipe.transform(isoString);

		expect(localeString).toContain('Friday');
		expect(localeString).toContain('3');
		expect(localeString).toContain('Feb');
		expect(localeString).toContain('2023');
	});
});

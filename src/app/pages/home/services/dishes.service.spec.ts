import { TestBed } from '@angular/core/testing';

import { DishesService } from './dishes.service';

import { HttpClientModule } from '@angular/common/http';

describe('DishesService', () => {
	let service: DishesService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
		});
		service = TestBed.inject(DishesService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});

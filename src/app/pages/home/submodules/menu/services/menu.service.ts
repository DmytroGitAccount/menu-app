// Libraries Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Project Imports
import { environment } from 'src/environments/environment';

@Injectable()
export class MenuService {
	private readonly API_URL = `${environment.apiUrl}/dishes`;

	constructor(private http: HttpClient) {}

	public getDish(id: string) {
		return this.http.get(`${this.API_URL}/${id}`);
	}

	public getDishes() {
		return this.http.get(this.API_URL);
	}
}

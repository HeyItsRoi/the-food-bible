import { Component, Inject, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/classes/restaurants';

@Component({
	selector: 'app-restaurant-dialog',
	templateUrl: './restaurant-dialog.component.html',
	styleUrls: ['./restaurant-dialog.component.scss']
})
export class RestaurantDialogComponent implements OnInit {

	constructor(
	) { }

	ngOnInit(): void
	{
	}

	getPriceRange(cost: number)
	{
		let ret = '';

		for (let i = 0; i < cost; i ++) {
			ret += '$';
		}
		
		return ret;
	}

}

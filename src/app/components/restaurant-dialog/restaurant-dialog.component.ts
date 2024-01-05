import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Restaurant } from 'src/app/classes/restaurants';

@Component({
	selector: 'app-restaurant-dialog',
	templateUrl: './restaurant-dialog.component.html',
	styleUrls: ['./restaurant-dialog.component.scss']
})
export class RestaurantDialogComponent implements OnInit {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: Restaurant
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

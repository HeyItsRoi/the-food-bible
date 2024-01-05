import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Rating, Restaurant } from 'src/app/classes/restaurants';
import { RestaurantCollection } from 'src/app/classes/restaurant-collection';
import { FilterEmitterService } from 'src/app/services/filter-emitter/filter-emitter.service';
import { RestaurantList } from 'src/app/classes/restaurant-list';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { RestaurantDialogComponent } from '../restaurant-dialog/restaurant-dialog.component';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit
{
	collection: RestaurantCollection;

	constructor(
		private emitter: FilterEmitterService,
		private dialog: MatDialog
	) { }

	ngOnInit(): void
	{
		this.collection = new RestaurantCollection(RestaurantList);
		this.emitter.search.subscribe(q => this.collection.search(q));
	}

	calcAvgRating(ratings: Rating): number
	{
		let values = Object.values(ratings).map(n => n.rate).filter(n => n);
		let ret = (values.reduce((a, b) => a + b, 0) / values.length) || null;
		return ret ? Math.round(ret * 1e2) / 1e2 : null;
	}

	getPriceRange(cost: number)
	{
		let ret = '';

		for (let i = 0; i < cost; i ++) {
			ret += '$';
		}
		
		return ret;
	}

	openMoreDialog(restaurant: Restaurant): void
	{
		this.dialog.open(RestaurantDialogComponent, {
			data: restaurant,
			width: '70vh'
		});
	}

}

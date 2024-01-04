import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Rating } from 'src/app/classes/restaurants';
import { RestaurantCollection } from 'src/app/classes/restaurant-collection';
import { FilterEmitterService } from 'src/app/services/filter-emitter/filter-emitter.service';
import { RestaurantList } from 'src/app/classes/restaurant-list';

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
		private emitter: FilterEmitterService
	) { }

	ngOnInit(): void
	{
		this.collection = new RestaurantCollection(RestaurantList);
		this.emitter.search.subscribe(q => this.collection.search(q));
	}

	calcAvgRating(ratings: Rating)
	{
		let values = Object.values(ratings).filter(n => n);
		let ret = (values.reduce((a, b) => a + b, 0) / values.length) || null;
		return ret ? (Math.round(ret * 100) / 100).toFixed(2) : 'Unrated';
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

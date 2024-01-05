import { Component, Input, OnInit } from '@angular/core';
import { Rating } from 'src/app/classes/restaurants';

@Component({
	selector: 'rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

	@Input() ratings: Rating;

	filled: number;
	empty: number;
	has_remainder: boolean;
	avg_rating: number;

	constructor() { }

	ngOnInit(): void
	{
		this.avg_rating = this.calcAvgRating()
		this.initStars();
	}

	calcAvgRating(): number
	{

		let values = Object.values(this.ratings).map(n => n.rate).filter(n => n);
		let ret = (values.reduce((a, b) => a + b, 0) / values.length) || null;
		return ret ? Math.round(ret * 1e2) / 1e2 : null;
	}

	private initStars(): void
	{
		if (this.avg_rating === null) {
			this.filled = 0;
			this.empty = 5;
			this.has_remainder = false;
		}

		this.filled = Math.floor(this.avg_rating);
		this.empty = 5 - Math.floor(this.avg_rating);
		this.has_remainder = this.avg_rating % 1 > 0.29;

		if (this.has_remainder && this.empty > 0) {
			this.empty--;
		}
	}

}

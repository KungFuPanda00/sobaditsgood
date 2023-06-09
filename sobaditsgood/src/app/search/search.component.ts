import { Component } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search!: string;
  movieResults: number[] = [];
  constructor(private api: APIServiceService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.search = params['search'].toString();
    });
    this.api.searchForAMovie(this.search).subscribe(data=> 
      {
        let test = JSON.parse(JSON.stringify(data));
        console.log(test.results);
    })

    this.movieResults = this.api.getMovies(this.search);
    console.log(this.movieResults);
    /*
    var movies = JSON.parse(data)
      for (var i = 0; i < movies.length; i++) {
        console.log(movies[i].movieid)
        this.popularIds.push(movies[i].movieid);
      }
    })
    */
    //popularMovies: number[] = [];
    //this.movieResults
  }
  /*
  this.api.searchForAMovie(this.search).subscribe(data=> 
      {
        let test = JSON.parse(JSON.stringify(data));
        this.movieResults = test.results;
        console.log(test.results);
    })
  */
  goToMovie(id:number) {
    console.log(id);
    this.router.navigate([`/movieinfo/${id}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movieId!: number;
  title!: string;
  poster!: string;
  releaseDate!: string;
  description!: string;
  runtime!: number;
  castPhoto!: string;
  cast:any[] = [];
  crew:any[] = [];
  directors:string[] = [];
  genresObj:any[] = [];
  genres:string[] = [];
  path: string = "http://image.tmdb.org/t/p/original"
  id!:string
  constructor(private api: APIServiceService, private route: ActivatedRoute, private routerURL:Router) {

    this.route.params.subscribe(params => {
      this.movieId = parseInt(params['movieid']);
    });
  }

  ngOnInit(): void {
    this.api.searchMovie(this.movieId).subscribe(data => {
      // Get title and concatenate with sliced date to show release year
      this.releaseDate = JSON.parse(data).release_date.slice(0,4);
      this.title = JSON.parse(data).title + " (" + this.releaseDate + ")";

      this.description = JSON.parse(data).overview;
      this.runtime = JSON.parse(data).runtime;
      this.poster = this.api.getPoster(JSON.parse(data).poster_path);
      this.genresObj = JSON.parse(data).genres;
      for (var i = 0; i < this.genresObj.length; i++) {
        this.genres.push(this.genresObj[i].name);
      }

      
    })
    this.api.getCredits(this.movieId).subscribe(data => {
      this.cast = JSON.parse(data).cast.slice(0,7);
    })

    this.api.getCredits(this.movieId).subscribe(data => {
      this.crew = JSON.parse(data).crew;

      for (var i = 0; i < this.crew.length; i++) {
        if (this.crew[i].job == "Director") {
          this.directors.push(this.crew[i].name);
        }
      }
    })    
  }

  castCrew(){
    this.routerURL.navigate([`/castcrew/${this.movieId}`])
  }
}
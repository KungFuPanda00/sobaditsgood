import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { DisplayReviewComponent } from './display-review/display-review.component';
import { StarComponent } from './star/star.component';
import { DescriptionReviewComponent } from './description-review/description-review.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { CastCrewComponent } from './cast-crew/cast-crew.component';
import { MovieInfoOptionComponent } from './movie-info-option/movie-info-option.component';
import { SearchComponent } from './search/search.component';


import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShowFollowsDialogComponent } from './show-follows-dialog/show-follows-dialog.component';
import { UserComponent } from './user/user.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { DisplayMyReviewsComponent } from './display-my-reviews/display-my-reviews.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MovieInfoComponent,
    LoginComponent,
    CreateAccountComponent,
    AddReviewComponent,
    DisplayReviewComponent,
    StarComponent,
    SettingsComponent,
    PasswordDialogComponent,
    DescriptionReviewComponent,
    MovieComponent,
    HomeComponent,
    SettingsComponent,
    CastCrewComponent,
    MovieInfoOptionComponent,
    SearchComponent,
    ShowFollowsDialogComponent,
    UserComponent,
    DisplayUsersComponent,
    DisplayMyReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule, 
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
   MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

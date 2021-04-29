import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './Components/utilisateur/utilisateur.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilisateurService } from '../app/Service/utilisateur.service';
import { HttpClientModule } from '@angular/common/http';
import { TagComponent } from './Components/tag/tag.component';
import { TagService } from '../app/Service/tag.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UtilisateurService, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }

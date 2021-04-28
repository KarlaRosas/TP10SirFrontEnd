import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent} from '../app/Components/utilisateur/utilisateur.component';
import { TagComponent} from './Components/tag/tag.component';

const routes: Routes = [
  {path: 'utilisateur', component: UtilisateurComponent},
  {path: 'tag', component: TagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

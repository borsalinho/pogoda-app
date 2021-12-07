import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'details/:i', component: DetailsComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

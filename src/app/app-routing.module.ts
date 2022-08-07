import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './test/search/search.component';
import { TestComponent } from './test/test/test.component';
import { UpdatesComponent } from './updates/updates.component';


const routes: Routes = [
  { component: SearchComponent, path: 'search' },
  { component: UpdatesComponent, path: 'updates' },
  { component: SettingsComponent, path: 'settings' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule { }

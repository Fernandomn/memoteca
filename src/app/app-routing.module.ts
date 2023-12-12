import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcludeThoughtComponent } from './components/thoughts/exclude-thought/exclude-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { ThoughtFormComponent } from './components/thoughts/thought-form/thought-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'criarPensamento', component: ThoughtFormComponent },
  { path: 'listarPensamento', component: ListThoughtsComponent },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcludeThoughtComponent,
  },
  { path: 'pensamentos/editarPensamento/:id', component: ThoughtFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { ExcludeThoughtComponent } from './components/thoughts/exclude-thought/exclude-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { ThoughtFormComponent } from './components/thoughts/thought-form/thought-form.component';
import { CustomReuseStrategy } from './reuse-strategy/custom-reuse-estrategy';

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'criarPensamento', component: ThoughtFormComponent },
  {
    path: 'listarPensamento',
    component: ListThoughtsComponent,
    data: {
      reuseComponent: true,
    },
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcludeThoughtComponent,
  },
  { path: 'pensamentos/editarPensamento/:id', component: ThoughtFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
})
export class AppRoutingModule {}

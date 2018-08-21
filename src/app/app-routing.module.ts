import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {BasicInputElementsComponent} from './basic-input-elements/basic-input-elements.component';
import {BlogComponent} from './blog/blog.component';

const routes: Routes = [
  {path: 'basic-input-elements', component: BasicInputElementsComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

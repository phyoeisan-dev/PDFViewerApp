import { Routes } from '@angular/router';
import { ImageViewComponent } from './printing-process/components/image-view/image-view.component';

export const routes: Routes = [
  {path:'',redirectTo:'image-view',pathMatch:'full'},
  // {path:'',redirectTo:'chats',pathMatch:'full'},
  {path:'image-view',component:ImageViewComponent},
];


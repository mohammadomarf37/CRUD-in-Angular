import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetApiComponent } from './API/get-api/get-api.component';
import { PostApiComponent } from './API/post-api/post-api.component';
import { PutApiComponent } from './API/put-api/put-api.component';
import { DeleteApiComponent } from './API/delete-api/delete-api.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'get-api', component: GetApiComponent},
    {path: 'post-api', component: PostApiComponent},
    {path: 'put-api', component: PutApiComponent},
    {path: 'delete-api', component: DeleteApiComponent}

];

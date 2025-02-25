import { Routes } from '@angular/router';
import { CombatComponent } from './src/Components/combat/combat.component';
import { MainComponent } from './src/Components/main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'combat', component: CombatComponent },
];

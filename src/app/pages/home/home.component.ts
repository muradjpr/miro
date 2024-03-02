import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ConnectToolsComponent } from '../../shared/components/connect-tools/connect-tools.component';
import { FeaturesComponent } from '../../shared/components/features/features.component';
import { WorkTogetherComponent } from '../../shared/components/work-together/work-together.component';
import { TrustedComponent } from '../../shared/components/trusted/trusted.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { PromoAreaComponent } from '../../shared/components/promo-area/promo-area.component';
import { WorksCategoryComponent } from '../../shared/components/works-category/works-category.component';
import { CategoryComponent } from '../../shared/components/category/category.component';
import { TeamsComponent } from '../../shared/components/teams/teams.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    HeroComponent,
    ConnectToolsComponent,
    FeaturesComponent,
    WorkTogetherComponent,
    TrustedComponent,
    FooterComponent,
    PromoAreaComponent,
    WorksCategoryComponent,
    CategoryComponent,
    TeamsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

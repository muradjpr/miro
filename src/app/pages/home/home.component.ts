import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { FeaturesComponent } from '../../shared/components/features/features.component';
import { WorkTogetherComponent } from '../../shared/components/work-together/work-together.component';
import { TrustedComponent } from '../../shared/components/trusted/trusted.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { PromoAreaComponent } from '../../shared/components/promo-area/promo-area.component';
import { WorksCategoryComponent } from '../../shared/components/works-category/works-category.component';
import { TeamsComponent } from '../../shared/components/teams/teams.component';
import { heroAnimationState } from '../../core/constants/hero.animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    HeroComponent,
    FeaturesComponent,
    WorkTogetherComponent,
    TrustedComponent,
    FooterComponent,
    PromoAreaComponent,
    WorksCategoryComponent,
    TeamsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [heroAnimationState],
})
export class HomeComponent implements OnInit {
  featureArea: any[] = [];
  portfolioArea: any[] = [];

  @Input() show: any;

  ngOnInit(): void {
    this.featureArea = [
      {
        featureTitle: 'Work together, wherever you work',
        featureDescription:
          'Miro is your teams visual platform to connect, collaborate, and create — together.',
        featureLink: '/',
        linkText: 'learn more',
        featureImg: 'featureArea1.png',
      },
      {
        featureTitle: 'Connect your tools, close your tabs',
        featureDescription:
          'Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.',
        featureLink: '/',
        linkText: 'learn more',
        featureImg: 'featureArea2.png',
      },
    ];

    this.portfolioArea = [
      {
        title: 'Built for the way you work',
        portfolio: [
          {
            title: 'Ux & design',
            description:
              'User experience (UX) refers to the users journey when interacting with a product or service. UX design is the process of creating products or services that provide meaningful experiences for users, involving many different areas of product development including branding, usability, function, and design.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'marketing',
            description:
              'Marketing refers to activities a company undertakes to promote the buying or selling of a product or service. Marketing includes advertising, selling, and delivering products to consumers or other businesses. Some marketing is done by affiliates on behalf of a company.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'product management',
            description:
              'Product management is an organizational function that guides every step of a products lifecycle — from development to positioning and pricing — by focusing on the product and its customers first and foremost.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'engineering',
            description:
              'Engineering is a discipline dedicated to problem solving. Our built environment and infrastructure, the devices we use to communicate, the processes that manufacture our medicines, have all been designed, assembled or managed by an engineer.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'consultants',
            description:
              'A consultant is a person who provides professional or expert advice in a particular field of science or business to either an organisation or individual. As there is no legal protection given to the job title consultant, in theory, anyone can wake up on a day and decide to adopt the title.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'agile coaches',
            description:
              'An Agile coach is a project management professional that helps scale Agile practices across a team or organization. By aligning teams or organizations with Agile values and concepts, Agile coaches enable them to be more flexible, transparent, and efficient.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'sales',
            description:
              'A transaction between the buyer and the seller in which the seller sells intangible or tangible goods, assets, or services against money is known as a sale. Sale is done between two or more parties. In broader terms, a sale can be is understood as a contract between two or more parties i.e. the buyer and the seller. A sale can also be defined as an agreement between the two parties in the financial market, where the buyer and seller agree upon a definite price of a security.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
        ],
      },
      {
        title: 'Built for all kinds of teams',
        portfolio: [
          {
            title: 'brainstorming',
            description:
              'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'strategic planning',
            description:
              'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'diagramming',
            description:
              'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'meetings & workshops',
            description:
              'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'scrum events',
            description:
              'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'research & design',
            description:
              'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
          {
            title: 'mapping',
            description: 'this is from mapping',
            image: 'Brainstormwithoutshadow.jpg.png',
          },
        ],
      },
    ];
  }
}

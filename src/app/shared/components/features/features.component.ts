import { Component, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [FeatureComponent, CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent implements OnInit {
  features: any[] = [];

  ngOnInit(): void {
    this.features = [
      {
        title: 'Free forever',
        description:
          'Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.',
        link: '',
        linkText: 'Pricing plans',
      },
      {
        title: 'Security first',
        description:
          'We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center .',
        link: '',
        linkText: 'Marketplace',
      },
      {
        title: 'Easy integrations',
        description:
          'Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace.',
        link: '',
        linkText: 'Trust Center',
      },
    ];
  }
}

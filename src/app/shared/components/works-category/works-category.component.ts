import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { WorksCategoryPaneComponent } from '../works-category-pane/works-category-pane.component';
import { portfolioInState } from '../../../core/constants/portfolio.animations';

@Component({
  selector: 'app-works-category',
  standalone: true,
  imports: [TabMenuModule, CommonModule, WorksCategoryPaneComponent],
  templateUrl: './works-category.component.html',
  styleUrl: './works-category.component.css',
  animations: [portfolioInState],
})
export class WorksCategoryComponent {
  @Input() portfolio: any;
  items: any[] | undefined;
  pane = '';
  isOpen: boolean = false;
  ngOnInit() {
    this.pane = this.portfolio.portfolio[0].title;
    this.items = [
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
    ];
  }

  showPan(value: any) {
    this.isOpen = !this.isOpen;
    this.pane = value;
  }
}

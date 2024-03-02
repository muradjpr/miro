import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryPaneComponent } from '../category-pane/category-pane.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, CategoryPaneComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  items: any[] | undefined;
  pane = 'Ux & design';

  ngOnInit() {
    this.items = [
      {
        title: 'Ux & design',
        description:
          'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
        image: 'Brainstormwithoutshadow.jpg.png',
      },
      {
        title: 'marketing',
        description:
          'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
        image: 'Brainstormwithoutshadow.jpg.png',
      },
      {
        title: 'product management',
        description:
          'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
        image: 'Brainstormwithoutshadow.jpg.png',
      },
      {
        title: 'engineering',
        description:
          'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
        image: 'Brainstormwithoutshadow.jpg.png',
      },
      {
        title: 'consultants',
        description:
          'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
        image: 'Brainstormwithoutshadow.jpg.png',
      },
      {
        title: 'agile coaches',
        description:
          'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,drawing capabilities — the list goes      on. Whether you want to edit your Google Docs, resolve Jira issues, or     collaborate over Zoom, Miro as 100+ integrations with tools you      already use and love.',
        image: 'Brainstormwithoutshadow.jpg.png',
      },
      {
        title: 'sales',
        description: 'this is from mapping',
        image: 'Brainstormwithoutshadow.jpg.png',
      },
    ];
  }

  showPan(value: any) {
    this.pane = value;
  }
}

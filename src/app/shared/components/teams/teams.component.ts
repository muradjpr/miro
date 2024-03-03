import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [RouterModule, CommonModule, TeamComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent implements OnInit {
  customerReview: any[] = [];

  ngOnInit(): void {
    this.customerReview = [
      {
        name: 'Roxanne Mustafa',
        designation: 'Design Team Lead at VMware',
        customerLogo: '',
        comment:
          'When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.',
        avater: 'Jane-Docusign-Testimonials_2x.png.png',
      },
      {
        name: 'Jane Ashley',
        designation: 'Head of Design at DocuSign',
        customerLogo: '',
        comment:
          'Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.',
        avater: 'user1.png',
      },
      {
        name: 'Laura Baird',
        designation: 'Associate Design Director at frog',
        customerLogo: '',
        comment:
          '“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”',
        avater: 'user2.png',
      },
    ];
  }
}

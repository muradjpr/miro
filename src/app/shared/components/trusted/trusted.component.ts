import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  trusHeaderState,
  trustBrandState,
} from '../../../core/constants/trust.animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-trusted',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trusted.component.html',
  styleUrl: './trusted.component.css',
  animations: [trusHeaderState, trustBrandState],
})
export class TrustedComponent implements OnInit {
  brand: any = '';

  ngOnInit(): void {
    this.brand = [
      { logo: 'Walmart_Index_Only.svg.png' },
      { logo: 'cisco.png' },
      { logo: 'Volvo_Index_Only.svg.png' },
      { logo: 'deloitte.svg.png' },
      { logo: 'okta.svg.png' },
    ];
  }
}

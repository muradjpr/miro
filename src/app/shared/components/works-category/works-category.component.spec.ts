import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksCategoryComponent } from './works-category.component';

describe('WorksCategoryComponent', () => {
  let component: WorksCategoryComponent;
  let fixture: ComponentFixture<WorksCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

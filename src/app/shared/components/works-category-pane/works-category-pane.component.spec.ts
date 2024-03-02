import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksCategoryPaneComponent } from './works-category-pane.component';

describe('WorksCategoryPaneComponent', () => {
  let component: WorksCategoryPaneComponent;
  let fixture: ComponentFixture<WorksCategoryPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksCategoryPaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksCategoryPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

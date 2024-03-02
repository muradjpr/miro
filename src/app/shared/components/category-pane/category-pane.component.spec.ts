import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPaneComponent } from './category-pane.component';

describe('CategoryPaneComponent', () => {
  let component: CategoryPaneComponent;
  let fixture: ComponentFixture<CategoryPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

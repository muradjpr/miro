import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectToolsComponent } from './connect-tools.component';

describe('ConnectToolsComponent', () => {
  let component: ConnectToolsComponent;
  let fixture: ComponentFixture<ConnectToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

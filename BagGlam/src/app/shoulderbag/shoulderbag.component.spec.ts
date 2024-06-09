import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoulderbagComponent } from './shoulderbag.component';

describe('ShoulderbagComponent', () => {
  let component: ShoulderbagComponent;
  let fixture: ComponentFixture<ShoulderbagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoulderbagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoulderbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

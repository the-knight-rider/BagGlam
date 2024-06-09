import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagpacksComponent } from './bagpacks.component';

describe('BagpacksComponent', () => {
  let component: BagpacksComponent;
  let fixture: ComponentFixture<BagpacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagpacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

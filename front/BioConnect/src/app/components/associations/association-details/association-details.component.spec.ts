import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationDetailsComponent } from './association-details.component';

describe('AssociationDetailsComponent', () => {
  let component: AssociationDetailsComponent;
  let fixture: ComponentFixture<AssociationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

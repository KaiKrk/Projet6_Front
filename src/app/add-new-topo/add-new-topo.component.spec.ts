import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTopoComponent } from './add-new-topo.component';

describe('AddNewTopoComponent', () => {
  let component: AddNewTopoComponent;
  let fixture: ComponentFixture<AddNewTopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

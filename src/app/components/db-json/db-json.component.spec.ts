import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbJsonComponent } from './db-json.component';

describe('DbJsonComponent', () => {
  let component: DbJsonComponent;
  let fixture: ComponentFixture<DbJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

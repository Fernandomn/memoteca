import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeThoughtsComponent } from './exclude-thoughts.component';

describe('ExcludeThoughtsComponent', () => {
  let component: ExcludeThoughtsComponent;
  let fixture: ComponentFixture<ExcludeThoughtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcludeThoughtsComponent]
    });
    fixture = TestBed.createComponent(ExcludeThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

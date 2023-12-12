import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeThoughtComponent } from './exclude-thought.component';

describe('ExcludeThoughtsComponent', () => {
  let component: ExcludeThoughtComponent;
  let fixture: ComponentFixture<ExcludeThoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcludeThoughtComponent]
    });
    fixture = TestBed.createComponent(ExcludeThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceEditingComponent } from './source-editing.component';

describe('SourceEditingComponent', () => {
  let component: SourceEditingComponent;
  let fixture: ComponentFixture<SourceEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryEditingComponent } from './story-editing.component';

describe('StoryEditingComponent', () => {
  let component: StoryEditingComponent;
  let fixture: ComponentFixture<StoryEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

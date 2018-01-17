import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionPanelComponent } from './emotion-panel.component';

describe('EmotionPanelComponent', () => {
  let component: EmotionPanelComponent;
  let fixture: ComponentFixture<EmotionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

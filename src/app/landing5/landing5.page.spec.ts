import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Landing5Page } from './landing5.page';

describe('Landing5Page', () => {
  let component: Landing5Page;
  let fixture: ComponentFixture<Landing5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landing5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Landing5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

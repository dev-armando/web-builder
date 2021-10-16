import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Landing3Page } from './landing3.page';

describe('Landing3Page', () => {
  let component: Landing3Page;
  let fixture: ComponentFixture<Landing3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landing3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Landing3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

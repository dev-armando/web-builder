import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Landing6Page } from './landing6.page';

describe('Landing6Page', () => {
  let component: Landing6Page;
  let fixture: ComponentFixture<Landing6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landing6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Landing6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

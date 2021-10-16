import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Landing4Page } from './landing4.page';

describe('Landing4Page', () => {
  let component: Landing4Page;
  let fixture: ComponentFixture<Landing4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landing4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Landing4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

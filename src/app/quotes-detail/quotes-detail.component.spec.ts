// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { QuotesDetailComponent } from './quotes-detail.component';

// describe('QuotesDetailComponent', () => {
//   let component: QuotesDetailComponent;
//   let fixture: ComponentFixture<QuotesDetailComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ QuotesDetailComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(QuotesDetailComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailComponent } from './quotes-detail.component';

describe('QuoteDetailComponent', () => {
  let component: QuoteDetailComponent;
  let fixture: ComponentFixture<QuoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

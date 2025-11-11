import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMerchComponent } from './upload-merch.component';

describe('UploadMerchComponent', () => {
  let component: UploadMerchComponent;
  let fixture: ComponentFixture<UploadMerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadMerchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadMerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

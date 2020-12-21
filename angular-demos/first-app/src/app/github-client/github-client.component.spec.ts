import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubClientComponent } from './github-client.component';

describe('GithubClientComponent', () => {
  let component: GithubClientComponent;
  let fixture: ComponentFixture<GithubClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

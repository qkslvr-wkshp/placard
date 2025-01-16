import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAndResourcesComponent } from './tools-and-resources.component';

describe('ToolsAndResourcesComponent', () => {
  let component: ToolsAndResourcesComponent;
  let fixture: ComponentFixture<ToolsAndResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsAndResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsAndResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

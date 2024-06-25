import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTaskComponent } from './all-task.component';
import { TaskListComponent } from '../../task-list/task-list.component';

describe('AllTaskComponent', () => {
  let component: AllTaskComponent;
  let fixture: ComponentFixture<AllTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTaskComponent, TaskListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

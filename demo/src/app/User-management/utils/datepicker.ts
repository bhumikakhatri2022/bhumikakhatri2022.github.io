import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.html'
})
export class Datepicker {
  @Input()
  lang$!: Observable<string>;

  @Input()
  selectDate!: (date: Date) => void;
}

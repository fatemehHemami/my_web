import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'nz-demo-dropdown-basic',
  standalone: true,
  imports: [NzDropDownModule],
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class NzDemoDropdownBasicComponent { }


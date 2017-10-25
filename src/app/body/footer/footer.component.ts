import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  languages = [
    { value: 'Chinese-0', viewValue: 'Chinese' },
    { value: 'Spanish-1', viewValue: 'Spanish' },
    { value: 'Hindi-2', viewValue: 'Hindi' },
    { value: 'Arabic-3', viewValue: 'Arabic' },
    { value: 'Portuguese-4', viewValue: 'Portuguese' },
  ];

  constructor() { }

  ngOnInit() {
  }
}

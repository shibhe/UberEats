import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  @ViewChild('fileInput') fileInput;

  constructor() { }

  ngOnInit() {
  }

  upload() {
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("image", fileBrowser.files[0]);
      //this.projectService.upload(formData, this.project.id).subscribe(res => {
        // do stuff w/my uploaded file
     // });
    }
  }
}


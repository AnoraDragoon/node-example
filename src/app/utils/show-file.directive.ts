import { HttpClient } from '@angular/common/http';
import { Directive, HostListener, Input } from '@angular/core';
import { saveAs } from 'file-saver';

@Directive({
  selector: '[appShowFile]'
})
export class ShowFileDirective {

  @Input() fileName: string = '';
  @Input() item: any = null;
  @Input() url: string = '';


  constructor(private http: HttpClient) { }

  @HostListener('click') onClick() {
    this.getFile();
  }

  private getFile(): void {

    saveAs(this.url, this.fileName);
    // return 0;
  }

}

 // HostListener - omogucava da se vezemo na eventove iz DOM-a
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  // dobro je napisati prefix, kako bi izbegao podudaranje sa standardnim html atributima.. u ovom slucaju prefix je app
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format') format: string; //ako ovako pises onda u hmtl-u moras pisati dodatni property binding
  @Input('appInputFormat') format: string;

  // ElementRef - servis definiran u angularu koji nam daje pristup DOM objektu
    constructor(private el: ElementRef) { }

  // kao parametar prima naziv DOM eventa: blur, kada korisnik makne fokus sa nekog html elementa
  @HostListener('blur') onBlur() {
    // nativeElement - da nam pristum DOM objekt propertijima
    const value: string = this.el.nativeElement.value;
    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else if (this.format === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else if (this.format === 'phoneNumber') {
      this.el.nativeElement.value = '1234';
    }
  }



}

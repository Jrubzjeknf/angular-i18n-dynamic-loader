import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { TranslationComponent } from '../translation-loader/translationComponent';

@Component({
  selector: 'app-error-translation',
  templateUrl: './error-translation.component.html',
  styleUrls: ['./error-translation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorTranslationComponent implements TranslationComponent {

  @ViewChild("tekst") public tekst: ElementRef;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  
  public runChangeDetection(): void {
    this.changeDetectorRef.detectChanges();
  }

}

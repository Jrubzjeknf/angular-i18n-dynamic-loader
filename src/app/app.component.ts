import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TranslationLoaderService } from './translation-loader/translation-loader.service';
import { ErrorTranslationComponent } from './error-translation/error-translation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public translatedText: string;
  
  @ViewChild('translationLoadElement', { read: ViewContainerRef })
  private translationLoadElement: ViewContainerRef;

  constructor(private translationLoaderService: TranslationLoaderService) {
  }

  public loadTranslatedText() {
    var translatedText = this.translationLoaderService.getTranslationText(
      this.translationLoadElement,
      ErrorTranslationComponent,
      component => component.tekst
    );

    this.translatedText = translatedText;
  }


  // Default app hieronder

  minutes = 0;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  heroes: string[] = ['Magneta', 'Celeritas', 'Dynama'];
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() { this.gender = 'male'; }
  female() { this.gender = 'female'; }
  other() { this.gender = 'other'; }
}


import { Injectable, ViewContainerRef, Type, Component, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { TranslationComponent } from './translationComponent';

@Injectable({
  providedIn: 'root'
})
export class TranslationLoaderService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Loads the component, runs change detection and returns the result as HTML.
   *
   * @param viewContainerRef A reference to a container where the component is temporarily added.
   *   This is required because the component is created in the context of the container and its
   *   parents (for example for dependency injection).
   * @param componentType The component's type.
   */
  public getTranslationText<TComponent extends TranslationComponent>(
    viewContainerRef: ViewContainerRef,
    componentType: Type<TComponent>,
    translationItemFunc: (component: TComponent) => ElementRef
  ): string {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const translationComponent: TComponent = <TComponent>componentRef.instance;

    translationComponent.runChangeDetection();

    const translationElement = translationItemFunc(translationComponent);
    const translationText = translationElement.nativeElement.innerHTML;

    // Removes the component and discards it properly.
    viewContainerRef.clear();

    return translationText;
  }
}

import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {SpinnerOverlayComponent} from './spinner-overlay/spinner-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private componentRef: ComponentRef<SpinnerOverlayComponent> = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {
  }

  Show(message?: string) {
    // https://angular.io/guide/dynamic-component-loader
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpinnerOverlayComponent);
    const overlayRef = componentFactory.create(this.injector);

    this.appRef.attachView(overlayRef.hostView);
    const domElem = (overlayRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.componentRef = overlayRef;
    this.componentRef.instance.message = message;
  }

  Hide() {
    if (!!this.componentRef) {
      this.componentRef.destroy();
    }
  }

}

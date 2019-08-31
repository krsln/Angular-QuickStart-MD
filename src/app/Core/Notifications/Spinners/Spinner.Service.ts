import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {SpinnerOverlayComponent} from './spinner-overlay/spinner-overlay.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {ModalComponent} from '../Modals';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  // private componentRef: ComponentRef<any> = null;
  private spinners: { Id: string, Ref: ComponentRef<any> }[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {
  }

  Show(overlay: boolean, message?: string): string {
    // https://angular.io/guide/dynamic-component-loader
    const overlayRef = this.GetComponentRef(overlay);
    overlayRef.instance.message = message;

    const spinner = {Id: overlayRef.instance.Id, Ref: overlayRef};
    this.spinners.push(spinner);
    // this.componentRef = overlayRef;
    // this.componentRef.instance.message = message;
    // console.log(spinner);

    return overlayRef.instance.Id;
  }

  private GetComponentRef(overlay: boolean) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpinnerOverlayComponent);
    if (!overlay) {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpinnerComponent);
    }

    const overlayRef = componentFactory.create(this.injector);
    this.appRef.attachView(overlayRef.hostView);
    const domElem = (overlayRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return overlayRef;
  }

  Hide(spinnerId: string) {
    const spinner = this.spinners.find(x => x.Id === spinnerId);
    if (spinner) {
      if (!!spinner.Ref) {
        spinner.Ref.destroy();
        this.spinners.splice(this.spinners.indexOf(spinner), 1);
      }
    }

    // const type = spinner.Ref.componentType.name;
    // const div = document.getElementById(id);
    // if (div) {
    //   const parent = document.getElementsByTagName(div.parentElement.nodeName);
    //   if (parent) {
    //     document.body.removeChild(div.parentNode);
    //   }
    // }
  }

  CLear() {
    this.spinners = [];
  }

}

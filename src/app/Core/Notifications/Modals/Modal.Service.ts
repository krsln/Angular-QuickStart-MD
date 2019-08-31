import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {map} from 'rxjs/operators';
import {IModalFooter} from './Models';
import {ModalComponent} from './modal/modal.component';

// TODO: Dynamic Content
// TODO: Position
// TODO: Return value
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private componentRef: ComponentRef<ModalComponent> = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {
  }

  GoToCart() {
    const addToCartBody = `<div class="row">
      <div class="col-3">
        <p></p>
        <p class="text-center"><i class="fas fa-4x fa-shopping-cart fa-spin"></i></p>
      </div>
      <div class="col-9">
        <p>Do you need more time to make a purchase decision?</p>
        <p>No pressure, your product will be waiting for you in the cart.</p>
      </div>
    </div>`;
    const addToCartFooter = {Text: '', IsRedirect: true, Redirect: {Text: 'Go to cart', Url: '/Sale/Cart'}};
    this.Show('Product in the cart', addToCartBody, addToCartFooter);
  }

  Show(TitleContent: string, BodyContent: string, FooterContent: IModalFooter = {}) {
    // https://angular.io/guide/dynamic-component-loader
    this.componentRef = this.GetComponentRef();
    this.componentRef.instance.ModalContent = {Active: true, TitleContent, BodyContent, FooterContent};
    this.componentRef.instance.Show();
    // console.log(this.componentRef.instance.ModalContent);
  }

  Prompt(TitleContent: string, BodyContent: string): Promise<boolean> {
    this.componentRef = this.GetComponentRef();
    this.componentRef.instance.ModalContent = {Active: true, TitleContent, BodyContent, FooterContent: {IsPrompt: true}};
    this.componentRef.instance.Show();
    return this.componentRef.instance.onAfterClosed().pipe(map((data) => data.Result)).toPromise();
  }

  private GetComponentRef() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);

    const overlayRef = componentFactory.create(this.injector);
    this.appRef.attachView(overlayRef.hostView);
    const domElem = (overlayRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return overlayRef;
  }

  Hide() {
    if (!!this.componentRef) {
      this.componentRef.destroy();
    }
  }

}

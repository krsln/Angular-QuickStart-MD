import {Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IModalContent, IModalResponse} from '../Models';
import {ActivatedRoute, Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  public ModalContent: IModalContent;
  public visible = false;
  public visibleAnimate = false;

  private ResponseChanges = new Subject<IModalResponse>();
  private Response: IModalResponse;

  constructor(private el: ElementRef = null, private router: Router, private route: ActivatedRoute) {
    this.ModalContent = {Active: false, TitleContent: '', BodyContent: '', FooterContent: null};
    // console.log(this.el);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.Hide();
    }
  }

  public Show(): void {
    // document.body.classList.add('modal-open');
    $('body').addClass('modal-open');

    this.ResponseChanges = new Subject<any>();
    this.Response = new IModalResponse();

    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public Hide(): void {
    // document.body.classList.remove('modal-open');
    $('body').removeClass('modal-open');

    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    this.onCloseCancel();
  }

  onCloseConfirm() {
    this.Response.Text = 'onCloseConfirm';
    this.Response.Result = true;

    this.ResponseChanges.next(this.Response);
    this.ResponseChanges.complete();
    this.Hide();
  }

  onCloseConfirmRedirect(path: string) {
    this.Response.Text = 'onCloseConfirmRedirect';
    this.Response.Result = true;

    this.ResponseChanges.next(this.Response);
    this.ResponseChanges.complete();
    this.Hide();
    this.router.navigate([path], {relativeTo: this.route}).then((res) => {
      console.log(path, res);
    });
  }

  onCloseCancel() {
    this.Response.Text = 'onCloseCancel';
    this.Response.Result = false;

    this.ResponseChanges.next(this.Response);
    this.ResponseChanges.complete();
  }

  onSendData(data: any) {
    this.Response.Text = 'SendData';
    this.Response.Data = data;

    this.ResponseChanges.next(this.Response);
    // this.ResponseChanges.complete();
  }

  onAfterClosed(): Observable<IModalResponse> {
    return this.ResponseChanges;
  }
}

/*   Usage
 <button class="btn btn-outline-primary" (click)="modal1.Show()">modal1</button>
<app-modal #modal1>
  <h5 class="modal-title">Modal title</h5>
  <div class="modal-body">
    Whatever content you like, form fields, anything
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-default" (click)="modal1.Hide()">Close</button>
  </div>
</app-modal>
* */

import {Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  Dynamic: DynamicContent;
  public visible = false;
  public visibleAnimate = false;
  private ResponseChanges = new Subject<ModalResponse>();
  private Response: ModalResponse;

  constructor(private el: ElementRef = null) {
    this.Dynamic = {Active: false, TitleContent: '', BodyContent: '', FooterContent: ''};
    // console.log(this.el);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy', this.Response);
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
    this.Response = new ModalResponse();

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

  onCloseCancel() {
    this.Response.Text = 'onCloseCancel';
    this.Response.Result = false;

    this.ResponseChanges.next(this.Response);
    this.ResponseChanges.complete();
  }

  SendData(data: any) {
    this.Response.Text = 'SendData';
    this.Response.Data = data;

    this.ResponseChanges.next(this.Response);
    // this.ResponseChanges.complete();
  }

  afterClosed(): Observable<ModalResponse> {
    return this.ResponseChanges;
  }
}

export class ModalResponse {
  Result: boolean;
  Text: string;
  Data: any;
}

export class DynamicContent {
  Active: boolean;
  TitleContent: string;
  BodyContent: string;
  FooterContent: string;
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

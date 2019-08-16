export class Alert {
  Type: AlertType;
  Title: string;
  Message: string;
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}

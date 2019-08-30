// Alert
export class Notification {
  Title: string;
  Message: string;
  ExpireIn: number; // milliseconds

  Way: NotificationWay;
  Option: AlertOption | ToastOption;
}

export class AlertOption {
  Type: NotificationType;
}

export class ToastOption {
  Type: NotificationType;
  Position: string;
}


export enum NotificationType {
  None,
  Success,
  Error,
  Info,
  Warning
}

export enum NotificationWay {
  Alert,
  Toast
}

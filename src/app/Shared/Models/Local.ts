export class Notification {
  Title: string;
  Message: string;
  Option: NotificationOption;
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

export class NotificationOption {
  Way: NotificationWay;
  Type: NotificationType;
  KeepAfterRouteChange: boolean;
  Position: string;
}

export class Error {
  Code: string;
  Message: string;
}

export class HttpError extends Error {
  Type?: string;
  Path?: string;
}

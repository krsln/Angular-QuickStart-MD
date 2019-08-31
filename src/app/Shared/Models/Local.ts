export class SeoConfig {
  public Title?: string;
  public Description?: string;
  public Image?: string;
  public Slug?: string; // Permalink
}

export class Error {
  Code: string;
  Message: string;
}

export class HttpError extends Error {
  Type?: string;
  Path?: string;
}

export class View {
  Type: ViewType;
  Caption: string;
  Source: string;
}

export enum ViewType {
  Image,
  Image360,
  Video
}

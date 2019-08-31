export class IModalResponse {
  Result: boolean;
  Text: string;

  Data: any;
}

export class IModalContent {
  Active: boolean;
  TitleContent: string;
  BodyContent: string;
  FooterContent?: IModalFooter;
}

export class IModalFooter {
  Text?: string;
  IsRedirect?: boolean;
  Redirect?: { Url: string, Text: string };
  IsPrompt?: boolean;

}

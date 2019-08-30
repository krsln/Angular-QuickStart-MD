export class Guid {

  // public static Empty = '00000000-0000-0000-0000-000000000000';
  public static get Empty(): string {
    return '00000000-0000-0000-0000-000000000000';
  }

  public get Empty(): string {
    return Guid.Empty;
  }

  constructor(value?: string) {
    this.Value = Guid.Empty;

    if (value && Guid.IsValid(value)) {
      this.Value = value;
    }
  }

  private static validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');

  private readonly Value: string = this.Empty;

  public static Parse(guid: string): Guid {
    return new Guid(guid);
  }

  public static NewGuid(): Guid {
    return new Guid(Guid.Raw());
  }

  public static IsValid(guid: any): boolean {
    const value: string = guid.toString();
    return guid && (guid instanceof Guid || Guid.validator.test(value));
  }

  public static Raw(): string {
    return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-');
  }

  private static gen(count: number) {
    let out = '';
    for (let i = 0; i < count; i++) {
      // tslint:disable-next-line:no-bitwise
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return out;
  }

  public Equals(other: Guid): boolean {
    // Comparing string `value` against provided `guid` will auto-call
    // toString on `guid` for comparison
    return Guid.IsValid(other) && this.Value === other.ToString();
  }

  public IsEmpty(): boolean {
    return this.Empty === Guid.Empty;
  }

  public ToString() {
    return this.Value;
  }

  public ToJSON(): any {
    return {
      Value: this.Value,
    };
  }
}

/*    usage
    // let e = new Guid();
    // console.log(e); // ​​​​​Guid {Value: "00000000-0000-0000-0000-000000000000"}​​​​
    // console.log(e.ToString()); // 00000000-0000-0000-0000-000000000000​​​​​
    // console.log(e.ToJSON()); // {Value: "00000000-0000-0000-0000-000000000000"}​​​​
    // console.log(JSON.stringify(e)); // ​​​​​{Value: "00000000-0000-0000-0000-000000000000"}​​​​
    // console.log('IsEmpty', e.IsEmpty()); // true
    //
    // e = Guid.NewGuid();
    // console.log(e); // ​​​​​Guid { Value: 'bb90ef83-1a7e-42b1-90ba-39cdebb6366c' }​​​​​
    // console.log(JSON.stringify(e));  // ​​​​​"bb90ef83-1a7e-42b1-90ba-39cdebb6366c"​​​​​
    //
    // console.log('IsValid', Guid.IsValid(e)); // true
    // console.log(Guid.Empty); // ​​​​​00000000-0000-0000-0000-000000000000​​​​​
    // console.log('IsValid', Guid.IsValid(Guid.Empty)); // false
    // console.log('Equals',  e.Equals(e)); // false
    // console.log('Equals', e.Equals(Guid.NewGuid())); // false
 */

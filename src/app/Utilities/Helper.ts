export class Helper {

  public static SanitizeHtml(input: string) {
    return input
      .replace(/<script[^>]*?>.*?<\/script>/gi, '')
      .replace(/<[\/!]*?[^<>]*?>/gi, '')
      .replace(/<style[^>]*?>.*?<\/style>/gi, '')
      .replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '')
      .replace(/(?:&nbsp|;|\s+)/gm, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  public static CalculateAge(birthDate: string): number {
    let age = 0;
    if (birthDate) {
      const bDate = new Date(birthDate);
      const timeDiff = Math.abs(Date.now() - (+bDate));
      // Used Math.floor instead of Math.ceil
      // so 26 years and 140 days would be considered as 26, not 27.
      age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
    return age;
  }

}

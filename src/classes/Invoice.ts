//class

export class Invoice {
  // client: string;
  // private details: string;
  // readonly amount: number;

  constructor(
    public client: string,
    private details: string,
    readonly amount: number
  ) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    return `${this.client} earns Rs. ${this.amount} for ${this.details}`;
  }
}

import { HasFormatter } from '../interfaces/HasFormatter.js';

//class

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} pays Rs. ${this.amount} for ${this.details}`;
  }
}

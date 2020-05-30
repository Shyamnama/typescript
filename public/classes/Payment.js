//class
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} pays Rs. ${this.amount} for ${this.details}`;
    }
}

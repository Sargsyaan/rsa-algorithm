import {ChangeDetectorRef, Component} from '@angular/core';
import {gcd, getRandomPrimePair, modInverse, modularExp} from "./utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rsaBitOpen = true;

  publicKey: string | null = null;
  privateKey: string | null = null;

  toEncode: number = 0;
  toDecode: number = 0;

  encodeResult: string = '';
  decodeResult: string = '';

  n: number = 0;
  e: number = 0;
  d: number = 0;

  constructor(public cdRef: ChangeDetectorRef) {
  }

  generateKeys(): void {
    const [p, q] = getRandomPrimePair();
    this.n = p * q;

    let phiN = (p - 1) * (q - 1);
    for (let i = 3; i < phiN; i += 2) {
      if (gcd(phiN, i) === 1) {
        this.e = i;
        break;
      }
    }

    this.d = modInverse(this.e, phiN);
    this.publicKey = `(${this.n}, ${this.e})`;
    this.privateKey = `(${this.n}, ${this.d})`;
    this.cdRef.detectChanges();
  }

  encode(): void {
    if (this.toEncode && this.e && this.n) {
      this.encodeResult = modularExp(this.toEncode, this.e, this.n).toString();
    } else {
      alert('Գեներացրեք բանալիները');
    }
  }

  decode() {
    if (this.toDecode && this.d && this.n) {
      this.decodeResult = modularExp(this.toDecode, this.d, this.n).toString();
    } else {
      alert('Գեներացրեք բանալիները');
    }
  }
}

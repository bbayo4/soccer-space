import { Injectable } from '@angular/core';

@Injectable()
export class DataTransferService {

  constructor() { }

  private data;

  setData(data) {
    this.data = data;
  }

  getData() {
    const temp = this.data;
    this.clearData();
    return temp;
  }

  clearData() {
    this.data = undefined;
  }

}

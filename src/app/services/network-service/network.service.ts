import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

export class NetworkStatusModel {
  connected: boolean;
  connectionType: string;
}

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  onlineIndicator: boolean;
  status: NetworkStatusModel;

  constructor() {}

  handleNetworkStatusChange = () => {
    Network.addListener('networkStatusChange', (status) => {
      this.status = status;
      console.log('Network status changed', status);
      return status;
    });
  };

  async logNetworkState() {
    const status = await Network.getStatus();

    console.log('Network status:', status);
    this.onlineIndicator = status.connected;
  }
}

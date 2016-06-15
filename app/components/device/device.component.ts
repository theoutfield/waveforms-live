import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

//Components
import {DcInstrumentComponent} from '../instruments/dc/dc-instrument.component';

//Services
import {TransportService} from '../../services/transport/transport.service';

@Component({
})
export class DeviceComponent {

    private transport;

    private rootUri: string;
    public deviceMake: string;
    public deviceModel: string;
    public firmwareVersion;
    public instruments: {
        //awg: {},
        dc: DcInstrumentComponent,
        //la: {},
        //osc: {},
    } = {dc: null};

    constructor(_http: Http, _rootUri:string, deviceDescriptor: any) {
        console.log('Device Contructor');
        //TODO If deviceDescriptor is empty attempt to enumerate the deviceDescriptor
        
        this.rootUri = _rootUri;
        this.transport = new TransportService(_http, this.rootUri);
        this.deviceMake = deviceDescriptor.deviceMake;
        this.deviceModel = deviceDescriptor.deviceModel;
        this.firmwareVersion = deviceDescriptor.firmwareVersion;

        this.instruments.dc = new DcInstrumentComponent(this.transport, deviceDescriptor.instruments.dc);
    }
    
    
}
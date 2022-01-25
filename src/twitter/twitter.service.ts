import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/app.gateway';
import { setTimeout } from 'timers';

@Injectable()
export class TwitterService {

    private appGateway: AppGateway;

    start(appGateway: AppGateway) {
        this.appGateway = appGateway;
        this.simulateStreaming();
    }

    simulateStreaming() {
        let i: number = 0;
        const timeout: NodeJS.Timer = setInterval(() => {
            this.appGateway.sendMessageToAllClients(`Hi From Backend no: ${i}`);
            i++;
        }, 100);
    }

}

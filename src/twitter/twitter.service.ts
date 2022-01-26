import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/app.gateway';

@Injectable()
export class TwitterService {

    private appGateway: AppGateway;

    /**
     * Initialing connection to twitter stream and sending tweets to AppGateway clients real-time
     * @param appGateway
     */
    start(appGateway: AppGateway) {
        this.appGateway = appGateway;
        this.simulateStreaming();
    }

    /**
     * Simulating twitter streaming : 
     * After connecting to twitter API and passing rules, a callback function will recieve tweet messages.
     * This function simulates the callback and sends message to all connected client real-time 
     */


    simulateStreaming() {
        let i: number = 0;
        const timeout: NodeJS.Timer = setInterval(() => {
            this.appGateway.sendMessageToAllClients(`tweet no: ${i}`);
            i++;
        }, 100);
    }

}

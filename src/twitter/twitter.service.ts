import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/app.gateway';
import { Observable } from 'rxjs';

@Injectable()
export class TwitterService {

    /**
     * Observable pattern to manage incoming tweets from readable stream
     */
    private observable = new Observable(subscriber => {

        /**
         * Below is real sample code for getting tweet from twitter stream.
         * 
         * we just need to call next function of subscriber
         */

        // const stream = needle.get(streamURL, {
        //     headers: {
        //         Authorization: `Bearer ${TOKEN}`
        //     }
        // })

        // stream.on('data', (data)=> {
        //     try{
        //         const json = JSON.parse(data);
        //         subscriber.next(json);
        //     } catch(error){
        //         subscriber.error(error);
        //     }
        // })


        /**
        * Simulating a callback which receives tweets from twitter. 
        */

        let i: number = 0;
        setInterval(() => {
            subscriber.next(`tweet no: ${i}`);
            i++;
        }, 100);

    });


    /**
     * Pipe: Turns the readable stream into the specified writable stream
     * 
     */

    pipe(appGateway: AppGateway) {

        this.observable.subscribe({
            next(message: string) { appGateway.write(message); },
            error(err) { console.error('something wrong occurred: ' + err); }
        });

    }

}

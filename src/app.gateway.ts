import { Logger } from '@nestjs/common';
import { WebSocketGateway, OnGatewayInit, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TwitterService } from './twitter/twitter.service';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor(private twitterService: TwitterService) {

  }
  /**
   * Socket server 
   */
  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger("AppGateway(socket)");

  afterInit(server: Server) {
    this.logger.log("App Gateway is Initialized successfully!");

    this.twitterService.pipe(this);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  /**
   * Send message to all clients (socket clients) in the channel of "tweets" (event)
   * 
   * Simulating write method of writable stream
   * 
   * @param message 
   */
  write(message: string): void {
    this.wss.emit("tweets", message);
  }

}

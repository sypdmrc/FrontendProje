import { Injectable } from "@angular/core";

declare let alertify:any;

@Injectable()
export class AlertifyService{

  constructor() {}

  success(message:string){
    alertify.set('notifier','position', 'bottom-left');
    alertify.success(message);
  }

  error(message:string){
    alertify.set('notifier','position', 'bottom-left');
    alertify.error(message);
  }

  warning(message:string){
    alertify.set('notifier','position', 'bottom-left');
    alertify.warning(message);
  }
}

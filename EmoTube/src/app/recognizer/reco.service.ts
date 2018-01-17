import { Injectable } from '@angular/core';
import { Scores } from '../scores';
import { BoundingBox } from '../boundingBox';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import 'rxjs/add/operator/map';

@Injectable()
export class RecoService {

  
  imageURL: String;
  imageData: ImageBitmap;

  constructor(private http: Http) { 
    //this.scores.anger = 0;
  }

 
  setImageURL(url: String){
    this.imageURL = url;
  }

  setImageData(data: ImageBitmap){
    this.imageData = data;
  }


  requestEmo(): any{
    let headers = new Headers({ 'Content-Type': 'application/json' , 'Ocp-Apim-Subscription-Key': '7a1b8ab8559e46f9b6c6316b0965ed2f'});
    let options = new RequestOptions({ headers: headers });
    let body = '{"url": "'+this.imageURL+'"}';
    return this.http.post('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?', body, options).map(
      (res: Response)=> {return res}
      
    );         
  }

}

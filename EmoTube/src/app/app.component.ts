import { Component } from '@angular/core';
import { RecoService } from './recognizer/reco.service';
import { Scores } from './scores';
import { BoundingBox } from './boundingBox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scores: Scores[] = [];
  boundingBoxes: BoundingBox[] = [];
  score: Scores = {
    anger: 0,
    contempt: 0,
    disgust: 0,
    fear: 0,
    happiness: 0,
    neutral: 0,
    sadness: 0,
    surprise: 0
  };
  constructor(private reco:RecoService){}
  url: String = '';
  title = 'EmoTube';


  getEmotions(){
    this.reco.setImageURL(this.url);
    this.reco.requestEmo().subscribe(data => this.calcScores(data));
  }

  calcScores(data: any){
    let dat = JSON.parse(data.text());
    for(let i=0;i<dat.length;i++){
      let score: Scores = new Scores();
      let boundingBox: BoundingBox= new BoundingBox();
      score.anger = parseFloat((dat[i].scores.anger*100).toFixed(2));
      score.contempt = parseFloat((dat[i].scores.contempt*100).toFixed(2));
      score.disgust = parseFloat((dat[i].scores.disgust*100).toFixed(2));
      score.fear = parseFloat((dat[i].scores.fear*100).toFixed(2));
      score.happiness = parseFloat((dat[i].scores.happiness*100).toFixed(2));
      score.neutral = parseFloat((dat[i].scores.neutral*100).toFixed(2));
      score.sadness = parseFloat((dat[i].scores.sadness*100).toFixed(2));
      score.surprise = parseFloat((dat[i].scores.surprise*100).toFixed(2));
      boundingBox.height = ((dat[i].faceRectangle.height));
      boundingBox.top = ((dat[i].faceRectangle.top));
      boundingBox.width = ((dat[i].faceRectangle.width));
      boundingBox.left = ((dat[i].faceRectangle.left));
      this.scores.push(score);
      this.boundingBoxes.push(boundingBox);
  }
  this.score = this.scores[0];
}

}

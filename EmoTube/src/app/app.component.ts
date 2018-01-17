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
  score: Scores =new Scores();
  constructor(private reco:RecoService){}
  url: String = '';
  title = 'EmoTube';

  resetImage(box:BoundingBox,index:number){
    for(let i=0;i<this.boundingBoxes.length;i++){
      this.boundingBoxes[i].bgColor = "rgba(200,200,200,0.5)";
      this.boundingBoxes[i].border = "white";
    }
    box.bgColor = "rgba(125,125,125,0.5)";
    box.border = "black";
    this.score = this.scores[index];
  }

  getEmotions(){
    this.boundingBoxes = [];
    this.scores = [];
    this.reco.setImageURL(this.url);
    this.reco.requestEmo().subscribe(data => this.calcScores(data));
  }

  calcScores(data: any){
    let dat = JSON.parse(data.text());
    let avgScore: Scores = new Scores();
    for(let i=0;i<dat.length;i++){
      let score: Scores = new Scores();
      let boundingBox: BoundingBox= new BoundingBox();
      score.anger = parseFloat((dat[i].scores.anger*100).toFixed(2));
      avgScore.anger+=score.anger;
      score.contempt = parseFloat((dat[i].scores.contempt*100).toFixed(2));
      avgScore.contempt+=score.contempt;
      score.disgust = parseFloat((dat[i].scores.disgust*100).toFixed(2));
      avgScore.disgust+=score.disgust;
      score.fear = parseFloat((dat[i].scores.fear*100).toFixed(2));
      avgScore.fear+=score.fear;
      score.happiness = parseFloat((dat[i].scores.happiness*100).toFixed(2));
      avgScore.happiness+=score.happiness;
      score.neutral = parseFloat((dat[i].scores.neutral*100).toFixed(2));
      avgScore.neutral+=score.neutral;
      score.sadness = parseFloat((dat[i].scores.sadness*100).toFixed(2));
      avgScore.sadness+=score.sadness;
      score.surprise = parseFloat((dat[i].scores.surprise*100).toFixed(2));
      avgScore.surprise+=score.surprise;
      boundingBox.height = ((dat[i].faceRectangle.height));
      boundingBox.top = ((dat[i].faceRectangle.top));
      boundingBox.width = ((dat[i].faceRectangle.width));
      boundingBox.left = ((dat[i].faceRectangle.left));
      this.scores.push(score);
      this.boundingBoxes.push(boundingBox);
  }
  avgScore.anger =avgScore.anger/this.scores.length;
  avgScore.contempt+=avgScore.contempt/this.scores.length;
  avgScore.disgust+=avgScore.disgust/this.scores.length;
  avgScore.fear+=avgScore.fear/this.scores.length;
  avgScore.happiness+=avgScore.happiness/this.scores.length;
  avgScore.neutral+=avgScore.neutral/this.scores.length;
  avgScore.sadness+=avgScore.sadness/this.scores.length;
  avgScore.surprise+=avgScore.surprise/this.scores.length;
  this.score = avgScore;
}

}

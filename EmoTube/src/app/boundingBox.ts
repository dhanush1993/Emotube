export class BoundingBox{
    height: number;
    left: number;
    top: number;
    width: number;
    origHeight: number;
    origLeft: number;
    origTop: number;
    origWidth: number;
    bgColor: String;
    border: String;
    constructor(){
        this.bgColor = "rgba(200,200,200,0.5)";
        this.border = "white";
    }
}
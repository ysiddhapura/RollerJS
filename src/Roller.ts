export class Roller {
    private _distribution: Map<number, number>;
    private _last: number;
    private _faces: number;

    // specifies the number of faces the die has. It must have at least 2 faces
    // so any invalid values should default to 6 to represent the common 
    // six-sided die.
    constructor(faces: number) {
        this._distribution = new Map();
        if(faces >= 2){
            this._faces = faces;
            for (let i = 1; i <= faces; i++) {
                this._distribution.set(i, 0);
                }
            }
        
        else{
            this._faces = 6;
            for (let i = 1; i <= this._faces; i++) {
                this._distribution.set(i, 0);
                }
            
        }
    }

    // specifies which number should be rolled and returns the recorded roll. 
    // If the value provided is not valid for the number of faces the die has,
    // no record of the roll should be made and 0 should be returned. However,
    // if the value provided is between 1 and the number of faces (inclusive),
    // then:
    //   1. that same value should be returned,
    //   2. that value should be stored as the last roll, and
    //   3. the distribution should update the distribution record so that the
    //      key (value rolled) has an updated value that increases the number
    //      of rolls for that face by 1
    roll(value: number): number{
        if(value <= this._faces){
            let x = this._distribution.get(value);
            this._distribution.set(value, x+1)
            this._last = value;
            return value;
        }
        else{
            return 0;
        }
        
    }

    // returns the value of the latest die roll. If no rolls have been made
    // yet, then it should return 0.
    last(): number {
        if(this._last > 0){
         return this._last;
        }
        return 0;
    }

    // returns a Map that represents the current distribution of rolls for each
    // possible face that can be rolled. The map's key should be the face
    // value and its value should be the number of times that face has been
    // rolled. Even if a face has not yet been rolled, its key should have a
    // value of 0.
    distribution(): Map<number, number>{
        return this._distribution;
    }
} // end of Roller class
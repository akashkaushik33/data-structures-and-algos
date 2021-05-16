class Heap {
    // heap based on 0th index
    // left-child = (2*parentIndex) + 1
    // right-child = (2*parentIndex) + 2
    
    // parent of a child = Math.floor((childIndex-1/2))
    
    
    constructor (size, comparator) {
        this.data = [];
        this.maxSize = size
        // comparator decides what kind of heap we are implementing min or max
        // by default it is set to min heap 
        this.comparator = comparator || ((parent, child) => parent-child)
    }
    
    get size () {
        return this.data.length;
    }
    
    add (val) {
        this.data.push(val);
        this._bubbleUp(this.size-1);
        if (this.size > this.maxSize) this.poll();
    }
    
    poll () {
        if (this.size === 0) return null;
        // swapping values
        this._swap(0, this.size-1);
//         [this.data[0], this.data[this.size-1] ] = [ this.data[this.size-1], this.data[0] ];
        
        const val = this.data.pop();
        this._bubbleDown(0)
        
        return val;
    }
    
    _parentIndex (childIndex) {
        return Math.floor((childIndex-1)/2)
    }
    
    _bubbleUp (c) {
        
        if (c === 0) return;
        const p = this._parentIndex(c);
        if (this.comparator(this.data[p], this.data[c]) > 0) {
            this._swap(c, p)
//             [ this.data[c], this.data[p] ] = [ this.data[p], this.data[c] ];
            this._bubbleUp(p);
        }
    }
    
    _bubbleDown (p) {
        const l = (2*p) + 1 // left-child
        const r = (2*p) + 2 // right-child
        
        let indexToSwapWith = p
        
        // checking out of bounds for left
        if (l > this.size-1) return;
      
        // to check if left is lesser than parent or not, value > 0 means parent has higher number for min heap
        const leftDelta = this.comparator(this.data[p], this.data[l]);
        
        const rightDelta = (r > this.size-1) ? 0 : this.comparator(this.data[p], this.data[r]);
        
        // checking if right has a value lesser than left, if yes then make right index to be swappable 
        if (rightDelta > 0 && this.comparator(this.data[l], this.data[r]) > 0 ) {
            indexToSwapWith = r;
        } else if (leftDelta > 0) {
            indexToSwapWith = l;
        }
        
        
        if (indexToSwapWith === p) return;
        this._swap(p, indexToSwapWith)
        //[ this.data[p], this.data[indexToSwapWith] ] = [ this.data[indexToSwapWith],  this.data[p] ];
        
        this._bubbleDown(indexToSwapWith);
        
    }
  
    _swap (i, j) {
        [ this.data[i], this.data[j] ] =  [ this.data[j], this.data[i] ]
    }
    
    
}

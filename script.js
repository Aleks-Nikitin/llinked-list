class LinkedList{
    constructor(){
        this.storage = {};
        this.first = 0;
    }
    append(value){
        if(this.size()==0){
        this.first= value;
        this.storage[this.num()]= new Node(value)
        }else{
            this.storage[this.tail()].next = value;
            this.storage[this.num()] = new Node(value)
        }
    }  
    preappend(value){
        if(this.size() != 0){
        
        this.storage[this.num()]= new Node(value, this.first)
        }
        else {
            this.append(value);
        }
        this.first = value;
    }
    size(){
        return (Object.keys(this.storage)).length;
    }
    num(){
        return this.size() + 1
    }
    head(){
        return this.first;
    }
    tail(){
       for (const element of this.storage) {
            if(this.storage.element.next == 0) return element;
       }
    }
    at(index){

    }
    pop(){

    }
    contains(value){

    }
    find(value){

    }
    toString(){
       return this.storage[this.first];
    }
}
class Node{
    constructor(value=0,next=0){
        this.value =value;
        this.next = next;
    }
}
let bob = new LinkedList();
bob.preappend("Lion");
console.log(bob.toString());

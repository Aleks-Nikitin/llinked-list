class LinkedList{
    constructor(){
        this.storage = {};
        this.first = 0;
        this.counter=0;
        this.index =0;
    }
    append(value){
        if(this.size()==0){
        this.first= value;
        this.storage[this.num()]= new Node(value)
        }else{
            this.tail().next = value;
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
          for (const element of Object.keys(this.storage)) {
            if(this.storage[element].value == this.first) return this.storage[element]
            
       }
    }
    tail(){
       for (const element of Object.keys(this.storage)) {
            if(this.storage[element].next == 0) return this.storage[element];
       }
    }
    traverse(node){
            if(this.index == this.counter) return node
           this.counter = this.counter +1;
            if(node.next == 0) return 'DNE'
            let temp = node.next;
            for (const element of Object.keys(this.storage)) {
            if(this.storage[element].value == temp){
                temp= element
            }
       }
            if(node.next != 0) {
                return this.traverse(this.storage[temp])
            }
           
            
                
        }
    at(index){
        this.index = index;
        this.counter = 0;
        return this.traverse(this.head());
        
    }
    pop(){
        for (const element of Object.keys(this.storage)) {
            if(this.storage[element] == this.tail()){
                delete this.storage[element];
            }}
    }
    contains(value){
          for (const element of Object.keys(this.storage)) {
            if(this.storage[element].value == value) return true
            
       } return false
    }
    find(value){
        let keys = Object.keys(this.storage);
        let highestNum = Math.max(...keys);
        for (const element of Object.keys(this.storage)) {
            if(this.storage[element].value == value){
                for (let i = 0; i < highestNum; i++) {
                    if (this.storage[element] == this.at(i)) {
                        return i
                    }
                    
                }
            }
            
       }
    }
    toString(){
        let keys = Object.keys(this.storage);
        let highestNum = Math.max(...keys);
        let sum ='';
        for(let i=0; i<highestNum; i++){
            if(this.at(i)){
                 sum+= `(${this.at(i).value})->`
            }
           
        }
        sum+= 'null';
        return sum
    }
}
class Node{
    constructor(value=0,next=0){
        this.value =value;
        this.next = next;
    }
}
let bob = new LinkedList();
bob.preappend("FirstElement");
bob.append("lastElement");
bob.append("NewLastElement");
bob.preappend("NewFirstElement")
//console.log(bob.at(4));
//console.log(bob.find("lastElement"))
console.log(bob.toString());



//singly linked list: head: that points to the 1st node or null
//if any node's next is null, then that is the end of the LL

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}   

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //add element
    addElement(value){
        let node = new Node(value)
        if(this.head === null){
            this.head = node
        } else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            this.size++;
            currentNode.next = node;
        }
    }
    //add value at nth index
    addElementAtIndex(value, index){
        let node = new Node(value);
        if(this.head === null){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                if(this.size === index){
                    return node;
                }
                this.size++
                current = current.next;
            }  
            let newNode = new Node(value, current.next)    ;
            return newNode      
        }
        
    }












    addElementIndex(value, index){
        let node2 = new Node(value);
        if(this.head === null){
            this.head = node2;
        }
        let currentNode = this.head;
        while(currentNode.next){
            if(index === this.size){
                return 
            }
            this.size++
        }
    }
    //searchelement by value
    searchElement(searchValue){
        if(this.head === null ){
            return -1
        } else {
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value === searchValue) {
                    return true;
                }
                currentNode = currentNode.next;
            }
            return false;
        }

    }

    //search at index
    searchAtIndex(index){
        if(this.head === null  || index < 0 || index > this.size){
            return -1;
        } else {
            let currentNode = this.head;
            let position = 0;
            while(currentNode){
                if(position === index){
                    return currentNode.value;
                }
                position++;
                currentNode = currentNode.next;
            }
            return -1;
        }
    }

    //search the middle node
    middleElement(){
        if(this.head === null ){
            return -1
        } 
        let middleIndex = Math.floor(this.size/2);
        console.log(this.size)
        let currentNode = this.head;
        for(let i = 0; i<middleIndex ; i++){
            currentNode = currentNode.next;
        }
        return currentNode.value;

    }

    //two pointer approach to find the middle element;
    twoPointerApproach(){
        if(this.head === null) {
             return -1
        }
        let fastPointer = this.head , slowPointer = this.head;
        while(fastPointer.next !== null && slowPointer !== null ){
            fastPointer = fastPointer.next.next;
            slowPointer = slowPointer.next;
        }
        return slowPointer.value;
    }
    //remove element by index
    removeByIndex(index){
        if(this.head === null){
            return -1;
        }
        let currentNode = this.head, prev = null, llIndex = 0;
        if(index === 0){
            this.head = currentNode.next;
            return;
        }
        while(currentNode){
            if(index === llIndex){
                prev.next = currentNode.next;
                return;
            }
            llIndex++;
            prev = currentNode;
            currentNode = currentNode.next;
        }

    }

    //remove a element by value
    removeElements(element){
        if(this.head === null){
            return -1;
        }
        let currentNode = this.head , prev = null;
        if(currentNode.value === element){
            this.head = currentNode.next;
            return;
        }
        while(currentNode){
            if(currentNode.value === element){
                prev.next = currentNode.next;
                return;
            }
            prev = currentNode;
            currentNode = currentNode.next;
        }
    }

    //find nth element from last
    findNthElement(index){
        if(this.head === null || index < 0 || index > this.size ){
            return -1;
        } else{
            let firstPointer = this.head, secondPointer = this.head;
            for(let i = 0; i <= index ; i++){
                firstPointer = firstPointer.next;
            }
            while(firstPointer){
                 firstPointer = firstPointer.next;
                 secondPointer =   secondPointer.next;
            }
            return secondPointer.value;
        }
    }

    //find nth element from last : 2nd method
    findNthElementLast(index){
        if(this.head === null || index < 0 || index > this.size){
            return -1;
        } else {
            let current = this.head;
            for(let i = 0; i <= this.size - index ; i++){
                current = current.next;
            }
            return current.value

        }
    }
    //print
    printList(){
        let currentNode = this.head;
        let output = "";
        while(currentNode){
            output += currentNode.value + ' ,'
            currentNode = currentNode.next;
        }
        return output
    }
}


const ll1 = new LinkedList();
ll1.addElement(10);
ll1.addElement(20);
ll1.addElement(30);
ll1.addElement(40);
ll1.addElement(40);

ll1.addElementAtIndex(3,2)
// console.log(ll1.printList())

// console.log(ll1.removeByIndex(2))
console.log(ll1.printList())
// console.log(ll1.findNthElement(2));
// console.log(ll1.findNthElementLast(2));



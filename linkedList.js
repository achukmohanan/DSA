class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    add(data){
        const newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
        }else{
            let current = this.head
            
            while(current.next !== null){
                current = current.next
            }
            current.next = newNode
        }
        
        this.size++
    }
    
    print(){
        let result = ""
        let current = this.head;
        
        while(current != null){
            result += current.data + '->';
            current = current.next
        }
        console.log(result)
    }
    addAtBegin(data){
        const newNode = new Node(data)

        newNode.next = this.head;
        this.head = newNode
    }

    insertAtIndex(index,element){
        
        if(index < 0 || index > this.size){
            console.log("index is invalid credentails")
        }
        let newNode = new Node(element)
        if(index === 0){
            newNode.next = this.head
            this.head = newNode
            return
        }
        let current = this.head
        for(let i=0; i<index-1; i++){
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }

      removeFromBegin(){
        if(!this.head){
            return
        }
        this.head = this.head.next;
    }
       
    removeLast(){
        if(!this.head){
            return 
        }

        let current = this.head;
        while(current.next.next){
            current = current.next
        }
        current.next = null
    }
    
    removeAtIndex(index){
        if(index <0 || index >= this.size){
            console.error("invalid index")
            return
        }

        if(index === 0){
            this.head = this.head.next
            return
        }

        let current = this.head;
        for(let i=0; i<index-1; i++){
            current = current.next
        }
        current.next = current.next.next;
    }

}

let list  = new LinkedList()

list.add(10)
list.add(20)
list.addAtBegin(33)
// list.removeLast()
// list.removeFromBegin()
// list.removeAtIndex(0)
list.print1()

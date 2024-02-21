// creating a class node 
class node{
  constructor(name, length, path)
  {
      this.musicNode = {
          name: name,
          length: length,
          path: path,
      };
      this.prev = null;
      this.next = null;
  }
};

// creating doubly linked list class

class DoublyLinkedList{
  constructor()
  {
      this.head = null;
      this.tail = null;
      this.length = 0;
      this.tempPos = null;
  }

  //push node to doubly linked list
  push(name, length, path)
  {
      const newNode = new node(name, length, path)
      if(this.length === 0)
      {
          this.head = newNode;
          this.tail = newNode;
      }
      else
      {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
  }

  // set position to current node 
  setDefaultPointer()
  {
      this.tempPos = this.head;
  }


  // traverse doubly linked list 
  traverse(direction)
  {
      if(direction  === 1 && this.tempPos.next != null)
      {
          this.tempPos = this.tempPos.next;
          return this.tempPos.musicNode;
      }
      else if(direction === -1 && this.tempPos.prev != null)
      {
          this.tempPos = this.tempPos.prev;
          return this.tempPos.musicNode;
      }
      else
          return 0;
  }


  // to check the position of the node 
  nodePosition()
  {
      if(this.tempPos.next == null)
          return -1; //last position
      else if(this.tempPos.prev == null)
          return 1; //first position
      else
          return 0;
  }




};

const dll = new DoublyLinkedList();
dll.push(
"Shipping Lanes",
1,
"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
);
dll.push(
"Enthusiast",
2,
"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
);
dll.push(
"Night Owl",
3,
"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3"
);

dll.setDefaultPointer();
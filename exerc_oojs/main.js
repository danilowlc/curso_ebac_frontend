function Build(length, witdh) {
    let _length = length;
    let _witdh = witdh;

    this.getLength = function() {
        return _length;
    }

    this.getWitdh = function() {
        return _witdh;
    }

    this.zone = function () {
        return this.getLength() * this.getWitdh();
    }
}

function Home(length, witdh, rooms){
    
    Build.call(this, length, witdh);
    let _rooms = rooms;

    this.getRooms = function(){
        return _rooms;
    }
}

function Mall(length, witdh, floors, stores) {

    Build.call(this, length, witdh);
    let _floors = floors;
    let _stores = stores;

    this.getFloors = function(){
        return _floors;
    }

    this.getStores = function(){
        return _stores;
    }

    this.setFloors = function(floors) {
        _floors = floors;
    }

    this.zone = function () {
        return this.getLength() * this.getWitdh() * this.getFloors();
    }
}

const casa = new Home(30, 10, 2);
const casa2 = new Home(8, 20, 4);
const shopping = new Mall(200, 150, 3, 50);
const shopping2 = new Mall(50, 150, 2, 15);

console.log("Area casa = ", casa.zone());
console.log("Area casa2 = ", casa2.zone());
console.log("Area shopping = ", shopping.zone());
console.log("Area shopping2 = ", shopping2.zone());

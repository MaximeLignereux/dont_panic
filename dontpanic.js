/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var nbFloors = parseInt(inputs[0]); // number of floors
var width = parseInt(inputs[1]); // width of the area
var nbRounds = parseInt(inputs[2]); // maximum number of rounds
var exitFloor = parseInt(inputs[3]); // floor on which the exit is found
var exitPos = parseInt(inputs[4]); // position of the exit on its floor
var nbTotalClones = parseInt(inputs[5]); // number of generated clones
var nbAdditionalElevators = parseInt(inputs[6]); // ignore (always zero)
var nbElevators = parseInt(inputs[7]); // number of elevators
var elevators = [];

function elevator(floor, pos){
    this.floor = floor;
    this.pos = pos;
}

for (var i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    var elevatorFloor = parseInt(inputs[0]); // floor on which this elevator is found
    var elevatorPos = parseInt(inputs[1]); // position of the elevator on its floor
    
    elevators[i] = new elevator(elevatorFloor, elevatorPos);
    
}


// game loop
while (true) {
    var inputs = readline().split(' ');
    var cloneFloor = parseInt(inputs[0]); // floor of the leading clone
    var clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
    var direction = inputs[2]; // direction of the leading clone: LEFT or RIGHT
    var BLOCKED = false;
    var nextFloor = false;
    var lastFloor = 0;
    
    
    if(lastFloor < cloneFloor) nextFloor = true;

                    
    if(cloneFloor < exitFloor){  
        
        if( direction === 'LEFT'){
             if(clonePos < elevators[parseInt(cloneFloor)].pos && BLOCKED === false){
                print('BLOCK');   
                BLOCKED = true;
                
            }else print('WAIT');
            
        }else if(direction === 'RIGHT'){
            
            if(clonePos > elevators[parseInt(cloneFloor)].pos && BLOCKED === false ){
                print('BLOCK');   
                BLOCKED = true;
            }else print('WAIT');
           
        }else print('WAIT');    
    }
    
    if(cloneFloor === exitFloor){
        
        if( direction === 'LEFT'){
            if(clonePos < exitPos &&  BLOCKED === false){
                print('BLOCK');  
                BLOCKED = true;
            }else print('WAIT');
            
        }else if(direction === 'RIGHT'){
            
            if(clonePos > exitPos &&  BLOCKED === false){
                print('BLOCK'); 
                BLOCKED = true;
                
            }else print('WAIT');
        }else print('WAIT');
    }
    
     
        
            
    if(nextFloor === true){
        nextFloor = false;
        lastFloor = cloneFloor;
        BLOCKED = false;
    }
     
    
}

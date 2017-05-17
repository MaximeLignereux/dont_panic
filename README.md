# dont_panic

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 
 

    var inputs = readline().split(' ');
    var nbFloors = parseInt(inputs[0]);
    var width = parseInt(inputs[1]);
    var nbRounds = parseInt(inputs[2]);
    var exitFloor = parseInt(inputs[3]); 
    var exitPos = parseInt(inputs[4]);
    var nbTotalClones = parseInt(inputs[5]); 
    var nbAdditionalElevators = parseInt(inputs[6]); 
    var nbElevators = parseInt(inputs[7]); 

    var elevators = [];

    function elevator(floor, pos){
        this.floor = floor;
        this.pos = pos;
    }

    for (var i = 0; i < nbElevators; i++) {
       var inputs = readline().split(' ');
       var elevatorFloor = parseInt(inputs[0]); 
       var elevatorPos = parseInt(inputs[1]); 

        elevators[i] = new elevator(elevatorFloor, elevatorPos);

    }


// game loop

    while (true) {

    var inputs = readline().split(' ');
    
    // floor of the leading clone
    
    var cloneFloor = parseInt(inputs[0]); 
    
    // position of the leading clone on its floor
    
    var clonePos = parseInt(inputs[1]); 
    
    // direction of the leading clone: LEFT or RIGHT
    
    var direction = inputs[2]; 
    
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

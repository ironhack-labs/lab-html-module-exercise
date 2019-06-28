// Rover Object Goes Here
 var inicio = {
  direction : "N",
  x: 0,
  y: 0,
  log: []
};



function turnLeft (rover) {
  console.log("Ahora", rover.direction)
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N"
      break;
    case "S":
      rover.direction = "E"
      break;
    case "W":
      rover.direction = "S"
      break;
  }
  console.log("siguiente", rover.direction)
}

function turnRight (rover) {
  console.log("Ahora", rover.direction)
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "N"
      break;
  }
console.log("siguiente", rover.direction)
}

function moveForward (rover){ 
  if(rover.y + 1 <= 10 || rover.x - 1 < 0 || rover.x + 1 >= 10 || rover.y - 1 < 0){
    switch (rover.direction) {
      case "N":
        rover.y = rover.y - 1;
        break;
      case "E":
        rover.x = rover.x - 1;
        break;
      case "S":
        rover.y = rover.y + 1;
        break;
      case "W":
        rover.x = rover.x + 1;
        break; 
      }
    } else {
    console.log("undefined")
    }
  console.log("X= ", rover.x , "Y= ", rover.y);
}

function moveBackward (rover){ 
  if(rover.y + 1 <= 10 || rover.x - 1 < 0 || rover.x + 1 >= 10 || rover.y - 1 < 0){
    switch (rover.direction) {
      case "N":
        rover.y = rover.y + 1;
        break;
      case "E":
        rover.x = rover.x - 1;
        break;
      case "S":
        rover.y = rover.y - 1;
        break;
      case "W":
        rover.x = rover.x + 1;
        break; 
      }
    } else {
    console.log("undefined")
    }
  console.log("X= ", rover.x , "Y= ", rover.y);
}

function comandos (ordenes, rover){
  console.log(ordenes)
  for(var i = 0; i<ordenes.length; i++){
    switch (ordenes[i]) {
      case "f":
        moveForward(rover)
        break;
      case "b":
        moveBackward(rover)
        break;
      case "r":
        turnRight(rover)
        break;
      case "l":
        turnLeft(rover)
        break;
      default:
       console.log("undefined")
        break;
    }
  rover.log.push({
    x : rover.x,
    y : rover.y,
    direction : rover.direction
  }) 
  }
}

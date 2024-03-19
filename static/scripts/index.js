

// get the canvas element and its context
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// get window width and height
var window_width = window.innerWidth;
var window_height = window.innerHeight;

// set the canvas width and height
canvas.width = 500;
canvas.height = 500;

// set background image
const background_image = new Image();
background_image.src = 'static/images/background.png';
background_image.onload = function() {
    ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}

//  all vehicles

let vehicles = {
    'car-blue': {
        image: new Image(),
        width: 100,
        height: 50,
        rotation: 0
    }
};

vehicles['car-blue'].image.src = 'static/images/car-blue.png';

// all roads
let roads = {
    'road-1':{
        is_main: false,
        rotation: 'down',
        signs: []
    },
    'road-2':{
        is_main: false,
        rotation: 'right',
        signs: []
    },
    'road-3':{
        is_main: false,
        rotation: 'left',
        signs: []
    },
    'road-4':{
        is_main: false,
        rotation: 'up',
        signs: []
    }
};


// pick on which road to draw the vehicle
let road;
var r_x;
var r_y;
var road_num = getRandomInt(1, 5);
if(road_num == 1){
    road = roads['road-1'];
    r_x = -4;
    r_y = 139;
}
else if(road_num == 2){
    road = roads['road-2'];
    r_x = 16500;    // cringe
    r_y = -6700;
}
else if(road_num == 3){
    road = roads['road-3'];
    r_x = 142;
    r_y = 120;
}
else if(road_num == 4){
    road = roads['road-4'];
    r_x = 283;
    r_y = 20;
}

// pick a vehicle to draw
let vehicle = vehicles['car-blue'];


// change veichle rotation based on the road
if(road.rotation == 'up'){
    vehicle.rotation = 90;
}
else if(road.rotation == 'down'){
    vehicle.rotation = 270;
}
else if(road.rotation == 'right'){
    vehicle.rotation = 179;
}


// draw the vehicle
vehicles['car-blue'].image.onload = function() {
    setTimeout(drawVehicle(vehicle, r_x, r_y, vehicle.width, vehicle.height, vehicle.rotation), 100);
}



function drawVehicle(vehicle, x, y, width, height, rotation){
    const image = vehicle.image;
    ctx.save();
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.drawImage(image, x, y, width, height);
    ctx.restore();
}

function getRandomInt(min, max) { // max is exclusive
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}



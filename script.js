let square         = document.querySelector("#square");
let rectangle      = document.querySelector("#rectangle");
let button_preview = document.querySelector("#button");
let button_copy    = document.querySelector("#copy");
let text_field = document.querySelector("#Css-clipboard");

button_preview.addEventListener("click", preview);
button_copy.addEventListener("click", copyToClipboard);

function preview(){
    let border_radius = []; //where the border values are stored
    let unit = document.querySelector("#units").value;
    let error = true;

    border_radius.push(document.querySelector("#top-left"    ).value.trim());
    border_radius.push(document.querySelector("#top-right"   ).value.trim());
    border_radius.push(document.querySelector("#bottom-right").value.trim());
    border_radius.push(document.querySelector("#bottom-left" ).value.trim());



    //Parse the string inputs to number
    for(let pos in border_radius){
       border_radius[pos] = Number(border_radius[pos]);
    }

    let border_string = createBorderString(border_radius, unit);

    //Apply the the borders
    square.style.borderRadius    = border_string;
    rectangle.style.borderRadius = border_string;

    text_field.value = `border-radius: ${border_string};`;

}

//complete copy from w3schools
function copyToClipboard () {
    //text_field.select(); //not really required
    //text_field.setSelectionRange(0, 99999); //not really required
    navigator.clipboard.writeText(text_field.value);
}

function createBorderString(array, unit){
    let properties = "";

    for (let pos in array){
        properties += `${array[pos]}${unit} `
    }

    return properties;
}

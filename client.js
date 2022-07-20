//console.log('client js loaded');

$(document).ready(onReady) // you can only have 1.

function onReady() {
    console.log('docuement is ready')
    // DOM is ready, we can interact with it now
    // Lets make a new header with a function call
    makeHeading();
    // Click handlers go here
    $('#addButton').on('click', handleClick);
    $('#animalTableContainer').on('click', '.friendButton', handleFriendClick);
    $('#animalTableContainer').on('click', '.removeButton', removePetClick);
}

function handleClick() {
    console.log('clicked!');
    let petName = $('#name-input').val(); // a getter, so LEAVE IT EMPTY!
    let petColor = $('#color-input').val(); // a getter, so LEAVE IT EMPTY!
    let petType = $('#type-input').val(); // a getter, so LEAVE IT EMPTY!
    console.log(`${petName} is an ${petColor} ${petType}`);
    $('#animalTableContainer').append(`
        <tr>
            <td>${petName}</td>
            <td>${petColor}</td>
            <td>${petType}</td>
            <td><button class="friendButton">My Friend</button></td>
            <td><button class="removeButton">Remove</button></td>
        </tr>
    `) // now we put these values into the table
    $('#name-input').val(''); // a setter, so give empty string to clear.
    $('#color-input').val(''); // a setter, so give empty string to clear.
    $('#type-input').val(''); // a setter, so give empty string to clear.
}

function handleFriendClick() {
    console.log('Friended!');
    // We want to turn the color of the tr orange when that specific button is clicked.
    // console.log($(this))
    // $(this).parent().parent // This is going from button, up to <td>, <tr> ()
    // $(this).closest('tr') // This will find the closest tr
    // $(this).closest('.class-name') // This will find the closest class name
    $(this).closest('tr').addClass('orangeBackground')
}

function removePetClick() {
    console.log('Removed');
    // We want to turn the color of the tr orange when that specific button is clicked.
    // console.log($(this))
    // $(this).parent().parent // This is going from button, up to <td>, <tr> ()
    // $(this).closest('tr') // This will find the closest tr
    // $(this).closest('.class-name') // This will find the closest class name
    $(this).closest('tr').remove();
}

function makeHeading() {
    // $('h1').text('Hello World!'); // Using 'h1' says hey all h1's change to this
    $('#newHeader').text('Hello World!'); // Here we can target one thing by an id declared in the HTML
    // .text is a header
    let text = $('#newHeader').text();
    // this is getting the text out of an h1.
    console.log(text); // Hello World!
    //$('h1').text('Hello World!'); // not DOM safe code
}

//console.log('end of file');
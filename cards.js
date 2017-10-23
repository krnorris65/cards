// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

const outputCardsEl = document.getElementById("user-cards") //targets parent element that user cards will be added to
const userButton = document.getElementById("create-button") //create button for text area

//generator function to create a unique id for the cards created by user
const cardIdGen = function* () {
    let id = 1
    
    while (true) {
        yield id
        id += 1
    }
}
const cardIdFactory = cardIdGen()

//add event listener to the User Card to add functionality to the card delete button
outputCardsEl.addEventListener("click", function(event) {
    const idOfButtonClickedOn = event.target.id //id of button
    if (idOfButtonClickedOn.startsWith("delete_")) {
        const buttonIdNum = idOfButtonClickedOn.split("_")[1] //spliting string so that it only returns the #
        const cardClicked = document.getElementById("card_" + buttonIdNum); //gets card that has the corresponding # to the button clicked
        const removeCard = outputCardsEl.removeChild(cardClicked)
    }
})

//function that creates a card with user input
const createNewCard = function (event) {
    const userData = document.getElementById("user-text") //gets the data from textarea
    const cardContent = userData.value //get value of the textarea
    const cardId = cardIdFactory.next().value //unique id num for card
    
    //insert value of userData into a card in the DOM with section and button ids
    outputCardsEl.innerHTML += `
        <section id="card_${cardId}" class="card">
            <p>${cardContent}</p>
            <button id="delete_${cardId}">Delete Message</button>
        </section>
    `
    //clear data in textarea after card is created
    userData.value = ""
}

//add the function createsNewCard to the userButton
userButton.addEventListener("click", createNewCard)

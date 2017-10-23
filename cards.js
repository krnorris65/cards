// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

const outputCardsEl = document.getElementById("user-cards")

const userData = document.getElementById("user-text") //gets the data from text area
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

//function that creates a card with user input
const createNewCard = function (event) {
    //get value of the textarea
    const cardContent = userData.value
    //unique id num for card
    const cardId = cardIdFactory.next().value
    //insert value of userData into a card in the DOM
    outputCardsEl.innerHTML += `
        <section id="card_${cardId}">
            <h2>User Card</h2>
            <p>${cardContent}</p>
            <button id="delete_${cardId}">Delete Card</button>
        </section>
    `
    const cardList = document.getElementById("user-cards")
    
    //add functionality to delete button
    cardList.addEventListener("click", function(event) {

    })
    //clear data in textarea

}



//add the function that creates a new card to the userButton
userButton.addEventListener("click", createNewCard)

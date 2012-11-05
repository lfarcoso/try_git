function dealCard() {
    return Math.floor(Math.random() * 52) + 1;
}

function Card() {
    var card = dealCard();
    var completeCard;
    var cardNumber = (card % 13);
    var sign;
    
    if(card >= 1 && card <= 13) {
        sign = "hearts";
    } else if (card >= 14 && card <= 26) {
        sign = "diamonds";
    } else if (card >= 27 && card <= 39) {
        sign =  "spades";
    } else if (card >= 40 && card <= 52) {
        sign = "clubs";
    } else {
        sign = "card is out of range";
    }
    switch (cardNumber) {
        case 1:
            cardNumber = "Ace";
            break;
        case 11:
            cardNumber = "Jack";
            break;
        case 12:
            cardNumber = "Queen";
            break;
        case 0:
            cardNumber = "King";
            break;
        default:
            cardNumber = cardNumber;
    }
    completeCard = alert("Your card is a " + cardNumber + " of " + sign);
        return completeCard;
}

Card();
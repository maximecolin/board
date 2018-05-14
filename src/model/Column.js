export default class Column
{
  constructor(uuid, title)
  {
    this.uuid = uuid
    this.title = title
    this.cards = []
  }

  addCard(card)
  {
    this.cards.push(card)
  }

  setCards(cards)
  {
    this.cards = cards
  }
}

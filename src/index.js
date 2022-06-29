export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {},
  getLength: function () {
    return Object.keys(this.guests).length;
  },
  getActualFreePlace: function () {
    return (this.quantityOfPlaces -= this.getLength());
  },
  paidPerPlace: function () {
    return (this.bankAccount += this.priceByPlace);
  },
  checkInGuest: function (firstName, lastName, money) {
    if (this.quantityOfPlaces < 1) {
      return 'Sorry, we have not free spaces';
    } else if (money < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    } else {
      const newQuest = (this.guests[this.getLength()] = {
        firstName: firstName,
        lastName: lastName,
        money: money - this.priceByPlace,
      });
      this.quantityOfPlaces -= 1;
      this.paidPerPlace();
      return newQuest;
    }
  },
};

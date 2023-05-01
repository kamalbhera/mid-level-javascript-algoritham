const equallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendsStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;
  return yourWeakest === friendsWeakest && yourStrongest === friendsStrongest;
};

console.log(equallyStrong(10, 15, 10, 15));

module.exports = equallyStrong;

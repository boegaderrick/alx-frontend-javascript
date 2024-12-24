import Building from './5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
  /// evacuationWarningMessage() {}
}

try {
  /* eslint-disable no-new */
  new TestBuilding(200);
} catch (err) {
  console.log(err);
}

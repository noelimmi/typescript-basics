const profile = {
  name: 'alex',
  age: 22,
  coords: {
    lat: 0,
    long: 12,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;

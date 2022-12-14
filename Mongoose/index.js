const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const kittySchema = new mongoose.Schema({
    name: String
  });

  const Kitten1 = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten1({ name: 'Silence' });
  console.log(silence.name); // 'Silence'  

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  
  const Kitten2 = mongoose.model('Kitten', kittySchema);  

  const fluffy = new Kitten2({ name: 'fluffy' });
  fluffy.speak(); // "Meow name is fluffy"  

// await fluffy.save();
// fluffy.speak();

// const kittens = await Kitten.find();
// console.log(kittens);

// await Kitten.find({ name: /^fluff/ });
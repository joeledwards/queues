const {Publisher, Subscriber} = require('squeaky')

async function test () {
}

async function run () {
  try {
    await test()
  } catch (error) {
    console.error('Error running NSQ tests:', error)
  }
}

run()

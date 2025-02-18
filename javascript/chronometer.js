class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.currentTime += 1
    this.intervalId =setInterval(() => {
      if (callback !== undefined) {
        callback()
      }
      console.log(this.currentTime)
      this.currentTime += 1
      
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value
    } else return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const splitMinutes = this.computeTwoDigitNumber(this.getMinutes())
    const splitSeconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${splitMinutes}:${splitSeconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  //Store the event name and event callback
  constructor(){
    this.event = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.event[eventName]) {
      this.event[eventName].push(callback);
    }else{
      this.event[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.event[eventName]) {
      for (const cd of this.event[eventName]) {
        cd();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.event[eventName];
  }
}

module.exports = Events;

// Is there a difference between these implementations, other than the method she used to add an element to the buffer?


function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// .push will mutate teh caller so what is passed in to buffer will be mutated

// .concat returns a new array, so the original object that was passed to the buffer parameter will remain unchanged.
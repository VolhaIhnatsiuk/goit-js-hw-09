const form = document.querySelector('form')

form.addEventListener('submit', handlerSubmit)

function handlerSubmit(evt) {
  evt.preventDefault()

  let delay = Number(evt.currentTarget.elements.delay.value);
  const step = Number(evt.currentTarget.elements.step.value);
  const amount = Number(evt.currentTarget.elements.amount.value);

  let counter = delay;

  for (let i = 1; i <= amount; i += 1) {
    setTimeout(() => {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      delay += step;
    }, counter);
    counter += step;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    res({position, delay})
  } else {
    rej({position, delay})
  }
},)
}
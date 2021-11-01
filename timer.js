const timers = process.argv.slice(2);

for (let timer of timers) {
  //if timer is less than 0 or if it isn't a number, skip the element
  if (timer < 0 || isNaN(Number(timer))) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write("BEEP \n");
  }, timer * 1000);
}

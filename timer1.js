




//process.stdout.write('\x07');



// let delay = []; 
// for (let i = 2; i < process.argv.length; i++){
//   delay.push (Number(process.argv[i]));
//   setTimeout(() => {
//     process.stdout.write('\x07')
//   }, delay[i]*1000);
  
// }

 
for (let i = 2; i < process.argv.length; i++){
  //delay.push (Number(process.argv[i]));
  if (process.argv[i] > 0){
    setTimeout(() => {
      process.stdout.write('\x07')
    }, process.argv[i]*1000);
  }
  else {
    console.log("invalid input")
  }
}

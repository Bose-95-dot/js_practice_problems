//convert the callback to Promise

// function getData(callback) {
//     setTimeout(() => {
//       callback("Data");
//     }, 1000);
//   }

//answer:
function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data");
      
      }, 1000);
    });
  }
getData().then(console.log);

const ipfs = window.IpfsHttpClient({ host: 'ipfs.infura.io', port: 5001 })

document.querySelector('#fileUpload').addEventListener('change', function() {

  document.getElementById("ipfs_hash").innerHTML = "<b>установка соединения</b>"
  
  var reader = new FileReader();
  reader.onload = function() {

    var arrayBuffer = this.result,
      array = new Uint8Array(arrayBuffer),
      binaryString = String.fromCharCode.apply(null, array);

    //console.log(result)
    ipfs.add(binaryString, (err, result) => {
      console.log(result)
      document.getElementById("ipfs_hash").innerHTML = "<b>Ключ: </b>"+result[0].hash 
    })
  }
  reader.readAsArrayBuffer(this.files[0]);

}, false);

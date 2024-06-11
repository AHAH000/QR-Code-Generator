function generateQR() {
    var url = document.getElementById('urlInput').value;
    fetch('http://localhost:3000/generateQR', { // Updated fetch URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.blob())
    .then(blob => {
        var qrCodeContainer = document.getElementById('qrCodeContainer');
        qrCodeContainer.innerHTML = ''; // Clear previous QR codes
        var qrImage = document.createElement('img');
        qrImage.src = URL.createObjectURL(blob);
        qrCodeContainer.appendChild(qrImage);
    })
    .catch(error => console.error('Error:', error));
}

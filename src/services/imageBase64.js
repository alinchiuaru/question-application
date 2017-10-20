const ImageBase64 = {
    readFile: function(imageFile) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);

            reader.onload = function (e) {
                resolve(e.target.result);
            }
        });
    },
}


export default ImageBase64;
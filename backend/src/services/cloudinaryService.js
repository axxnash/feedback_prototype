const { Readable } = require("stream");
const cloudinary = require("../config/cloudinary");

function uploadBuffer(fileBuffer, folder, options = {}) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
        ...options
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      }
    );

    Readable.from(fileBuffer).pipe(uploadStream);
  });
}

module.exports = {
  uploadBuffer
};

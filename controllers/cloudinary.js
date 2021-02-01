const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
const CLOUDINARY_PRESET = process.env.CLOUDINARY_PRESET;

module.exports = {
  get: {
    cloudinaryUrlAndSecret: (req, res) => res.json({ CLOUDINARY_URL, CLOUDINARY_PRESET })
  }
}
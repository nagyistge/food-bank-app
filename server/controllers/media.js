import Media from '../models/media'

export default {
  async read(req, res) {
    const media = await Media.findOne()
    res.json(media || new Media)
  },

  async upload(req, res) {
    const media = (await Media.findOne()) || new Media

    Object.keys(req.files).forEach(type => {
      const {filename} = req.files[type][0]
      media[type] = filename
    })

    await media.save()
    res.json(media)
  }
}


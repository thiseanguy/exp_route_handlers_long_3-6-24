// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());
////

app.get("/artists", (req, res, next) => {
  res.status = 200;
  res.send(getAllArtists())
  next()
})



app.post("/artists", (req, res, next) => {
  // req.body({name});
  res.status(201);
  res.send(addArtist(req.body))
  next()
})



app.delete("/artists/:artistId", (req, res, next) => {
  res.status(200);
  deleteArtistByArtistId(req.params.artistId)
  res.json({
    "message": "Successfully deleted"
  })
  next()
})

app.get("/artists/:artistId/albums", (req, res, next) =>{
  res.status(200);
  res.json(getAlbumsByArtistId(req.params.artistId))
  next()
})

app.get("/albums/:albumId", (req, res, next) =>{
  res.status(200);
  res.json(getAlbumByAlbumId(req.params.albumId))
  next()
})

app.post("/artists/:artistId/albums", (req, res, next) => {
  res.status(201);
  res.json(addAlbumByArtistId(req.params.artistId, req.body))
  next();
})


app.put("/albums/:albumId", (req, res, next) => {
  res.status(200);
  res.json(editAlbumByAlbumId(req.params.albumId, req.body));
  next();
})
app.patch("/albums/:albumId", (req, res, next) => {
  res.status(200);
  res.json(editAlbumByAlbumId(req.params.albumId, req.body));
  next();
})

app.delete("/albums/:albumId", (req, res, next) => {
  res.status(200);
  deleteAlbumByAlbumId(req.params.albumId)
  res.json({
    "message": "Successfully deleted"
  })
  next()
})

app.get("/albums*", (req, res, next) =>{
  res.status(200);
  res.json(getFilteredAlbums(req.query.startsWith));
  next()
})


// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}

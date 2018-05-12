var playlist = {John: "caffeine"}

function updatePlaylist(playlist, name, song) {
  playlist[name] = song
  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist.name
  return playlist
}

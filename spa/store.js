window.spa_store = {};

window.spa_store.albums = {
    albums: [],
    pushAlbum(album){
        window.spa_store.albums.albums.push(album);
        window.dispatchEvent(new Event('albumsChanged'));
    },
    deleteAlbum(album){
        let idx = window.spa_store.albums.albums.indexOf(album);
        window.spa_store.albums.albums.splice(idx, 1);
        window.dispatchEvent(new Event('albumsChanged'));
    },
    editAlbum(album){
        window.spa_store.albumOnEdit = album;
        window.spa_store.albums.deleteAlbum(album);
        window.dispatchEvent(new Event('albumOnEdit'));
    }
};

window.spa_store.albumOnEdit = {}
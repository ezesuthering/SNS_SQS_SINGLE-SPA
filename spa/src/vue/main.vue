<template>
  <div id="vue">
      <h1>Vue</h1>
      <ul>
        <li v-for="album in albums">
          {{album}}
          <button @click="deleteAlbum(album)">Delete</button>
          <button @click="editAlbum(album)">Edit</button>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'main',
  data: () => ({
    albums: []
  }),
  mounted() {
    window.addEventListener('albumsChanged', () => {
      this.albums = window.spa_store.albums.albums;
    });
  },
  methods: {
    deleteAlbum(album) {
      window.spa_store.albums.deleteAlbum(album);
    },
    editAlbum(album) {
      window.spa_store.albums.editAlbum(album);
    }
  }
}
</script>
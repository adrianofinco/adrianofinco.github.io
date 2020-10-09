var app = new Vue({
  'el': '#root',
  data: {
    navOpen : false,
    zoom: {
      open: false,
      image: ""
    }
  },
  methods: {
    zoomOpen (event) {
      this.zoom.image = event.target.src;
      this.zoom.open = true;
    },
    zoomClose (event) {
      this.zoom.open = false;
    }
  }
})

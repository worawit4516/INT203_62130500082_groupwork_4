const app = {
    data() {
        return {
            show: { icon: true, searchbar: false },
            inputTitle: '',
            Box_image: false,
            pictures: [{
                    src: "./image/1.jpg",
                    text: "Death Standing",
                    like: false,
                    zoom: false
                },
                {
                    src: "./image/2.jpg",
                    text: "Blair Witch",
                    like: false,
                    zoom: false
                },
                {
                    src: "./image/3.jpg",
                    text: "Cyberpunk",
                    like: false,
                    zoom: false
                }
            ]
        }
    },

    methods: {
        toggle() {
            this.show.icon = !this.show.icon
            this.show.searchbar = !this.show.searchbar
            this.inputTitle = ''

        },
        zoom(index) {

            for (let i = 0; i < this.pictures.length; i++) {
                if (i == index) {
                    this.pictures[i].zoom = true;
                    console.log(index);
                } else {
                    this.pictures[i].zoom = false;
                    console.log(i);
                }

            }
            this.Box_image = true
        },
        closeZoom() {
            this.Box_image = false
        },
        toggleDone(index) {
            this.pictures[index].like = !this.pictures[index].like
        }
    },
    computed: {
        countLikes() {
            return this.pictures.filter(t => t.like).length
        },
        countpicture() {
            return this.pictures.length
        },

        searchPhoto() {
            return this.pictures.filter(searching => {
                return searching.text.toLowerCase().includes(this.inputTitle.toLowerCase())
            })

        },
        searchZoom() {
            return this.pictures.filter(t => t.zoom)
        }
    }
}
Vue.createApp(app).mount('#app')
    const app = {
        data() {
            return {
                msg: 'Hello & Welcome, Vue3',
                show: { icon: true, searchbar: false },
                inputTitle: '',
                Box_image: false,
                photos: [{
                        src: 'images/1.jpg',
                        title: 'Autumn',
                        favor: false,
                        like: 0,
                        zoom: false
                    },
                    {
                        src: 'images/2.jpg',
                        title: 'Hug & Love',
                        favor: false,
                        like: 0,
                        zoom: false
                    },
                    {
                        src: 'images/3.jpg',
                        title: 'Good Night',
                        favor: false,
                        like: 0,
                        zoom: false
                    },
                    {
                        src: 'images/4.jpg',
                        title: 'Architecture',
                        favor: false,
                        like: 0,
                        zoom: false

                    },
                    {
                        src: 'images/5.jpg',
                        title: 'HarryPotter',
                        favor: false,
                        like: 0,
                        zoom: false
                    }

                ],


            }
        },

        methods: {

            toggle() {
                this.show.icon = !this.show.icon
                this.show.searchbar = !this.show.searchbar
                this.inputTitle = ''

            },

            favorite(index) {
                this.photos[index].favor = !this.photos[index].favor
                this.photos[index].like = this.photos[index].like + 1
            },

            zoom(index) {

                for (let i = 0; i < this.photos.length; i++) {
                    if (i == index) {
                        this.photos[i].zoom = true;
                        console.log(index);
                    } else {
                        this.photos[i].zoom = false;
                        console.log(i);
                    }

                }
                this.Box_image = true
            },
            closeZoom() {
                this.Box_image = false
            }

        },
        computed: {

            countpicture() {
                return this.photos.length
            },

            searchPhoto() {
                return this.photos.filter(searching => {
                    return searching.title.toLowerCase().includes(this.inputTitle.toLowerCase())
                })

            },
            searchZoom() {
                return this.photos.filter(t => t.zoom)
            }

        }
    }



    mountedApp = Vue.createApp(app).mount('#app')
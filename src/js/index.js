let tablet = {
    sizeCentimeter: 17,
    ram: 8 + " gb",
    cpu: "Mediatek",
    number_of_cores: 8,
    cameraPresence: true,

    display_diagonal() {
        let diagonal = Math.ceil(this.sizeCentimeter / 2.14);
        return diagonal
    },
    takePhoto() {
    }
}

console.log(tablet.display_diagonal())

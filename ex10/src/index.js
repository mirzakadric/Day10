function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Richie Spice",
            title: "Ghetto Girl",
            release_year: 2004,
            formats: {
                1: "CD",
                2: "mp3",
                3: "BR"
            },
            gold: false
        }
    }

    return myMusic;
}

console.log(myFunction()[2]);
module.exports = myFunction;
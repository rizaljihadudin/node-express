let blogs = [
    { id : 1, title : 'Buku 1', author : 'Aceng', desc : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '},
    { id : 2, title : 'Buku 2', author : 'Anabul', desc : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '},
    { id : 3, title : 'Buku 3', author : 'Asep', desc : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '}
]
module.exports = {
    index: async(req, res) => {
        let about = 'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
        res.render('pages/index', {blogs, about})
    }
}
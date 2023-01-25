

let blogs = [
    { id : 1, title : 'Buku 1', author : 'Aceng', desc : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '},
    { id : 2, title : 'Buku 2', author : 'Anabul', desc : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '},
    { id : 3, title : 'Buku X', author : 'Asep', desc : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '}
]

module.exports = {
    /** Get all Blog data */
    getBlogs: async(req, res) => {
        res.render('pages/index', { blogs })
    },

    /** untuk menyimpan data */
    storeData: async(req, res) => {
        blogs.push(req.body)
        res.send({
            error : false,
            status : 200,
            message : {
                result : true,
                message : 'Successfully post data',
                data : blogs
            },
            method : req.method,
            url : req.url
        })
    },

    /** untuk update data */
    updateData: async(req, res) => {
        const id = req.params.id
        blogs.filter(blog => {
            if(blog.id == id){
                blog.id = id
                blog.title = req.body.title
                blog.author = req.body.author

                return blog
            }
        })
        res.json({
            error : false,
            status : 200,
            message : {
                result : true,
                message : 'Successfully get data',
                data : blogs
            },
            method : req.method,
            url : req.url
        })
    },

    /** untuk delete data */
    deleteData: async(req, res) => {
        const id = req.params.id
        blogs = blogs.filter(blog => blog.id != id)
        res.send({
            error : false,
            status : 200,
            message : {
                result : true,
                message : 'Successfully delete data',
                data : blogs
            },
            method : req.method,
            url : req.url
        })
    }
}
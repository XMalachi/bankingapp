// var mongoose = require('mongoose');

// var Posts = mongoose.model('Posts');
// //get posts


// const getPosts = async(req,res)=>{

//     try{
//         const posts = await Posts.find({}).sort({_id:-1})

//         res.status(200).json({
//             message: 'success',
//             posts: posts
//         })

//     }catch(err){
//         res.status(400).json({
//             message: 'failed',
//             error: err.message
//         })
//     }
// }


// const postData = async(req, res) => {
//     const {brand, price, image} = req.body;
    
//     try{

//         const postExist = await Posts.find({brand : brand }, {price : price}, {image: image})
//         console.log("if post exist",postExist)

//         if(postExist.length > 0){
//             return new Error("User already exist")
//         }

//         const post = await Posts.create({
//             brand, price, image
//         })

//         res.status(200).json({
//             status: 'successful',
//             posts: {
//                 _id: post._id,
//                 brand,
//                 price,
//                 image

//             }
           
//         })
//     }catch(err){
//         res.json({
//             status: 'failed',
//             msg: err.message
//         })
//     }

// }

// const updatePost = async(req, res) => {
//     const {id} = req.params
//     const {brand, price, image} = req.body
//     try{
//         const post = await Posts.findById({_id:id}) 
        
//         post.brand = brand
//         post.price = price
//         post.image = image

//         console.log("post", post)

//         const updatedPost = await post.save()

//         res.status(200).json({
//             status: 'success',
//             updatedPost
//         })

//     }catch(err){
//         res.status(400).json({
//             status: 'failed',
//             error: err.message
//         })
//     }
// }

// const deletePost = async (req, res) => {
//     const {id} = req.params

//     try{
//         const postToBeDeleted = await Posts.findById({_id:id})
        
//         if(!postToBeDeleted){
//             throw Error('No Post Found')
//         }
//         await postToBeDeleted.remove()
        
//         res.status(200).json({
//             status: 'Success',
//             message: 'Deleted Successfully'
//         })
//     }catch(err){
//         res.status(400).json({
//             status: 'Failed',
//             message: err.message
//         })
//     }
// }


// module.exports = {getPosts, postData, updatePost, deletePost}
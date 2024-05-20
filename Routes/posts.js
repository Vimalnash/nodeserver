import express from 'express';
import { addNewPost, deletePost, getAllPosts, getUserPosts, updatePost } from '../Controllers/posts.js';

const router = express.Router();


// get all
router.get("/all", async (req, res) => {
    try {
        const posts = await getAllPosts();
        if(posts.length <=0 ) {
            return res.status(404).json({error: "No Data Available"});
        }
        return res.status(200).json({data: posts});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server Error",
        })
    }
})

const userId = "6646dafd3da9da4f0e0d4213";
//get posts belong to particular user
router.get("/user/all", async (req, res) => {
    try {
        const userPosts = await getUserPosts(userId);
        if (userPosts.length <= 0 ) {
            return res.status(404).json({error : "No Data Available"});
        }
        return res.status(200).json({ data:userPosts })
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"})
    }
});

//post new data
router.post("/add", async (req, res) => {
    try {
        // TODO: UserId to get dynamically
        const currendDate = new Date().toJSON().slice(0, 10);
        const newPost = await addNewPost(req, currendDate, userId);
        if (!newPost) {
            return res.status(400).json({error: "Error in Data"}) // 400 Bad request
        }
        return res.status(201).json({message: "Data Added Successfully", data: newPost })
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"})
    }
})


//edit data
router.put("/user/edit/:id", async (req, res) => {
    try {
        const editedPost = await updatePost(req);
        if(!editedPost) {
            return res.status(400).json({error: "Error Occurred"}); // 400 Bad request
        }
        return res.status(200).json({message: "Updated Successfully", data: editedPost})
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "No Data Available"})
    }
})


//delete
router.delete("/user/delete/:id", async (req, res) => {
    const deletedPost = await deletePost(req);
    try {
        if(!deletedPost) {
            return res.status(400).json({error: "Error Deletion"})
        }
        return res.status(200).json({message: "Deleted Successfully", data: deletedPost });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "No Data Available"});
    }

});


export const postsRouter = router;




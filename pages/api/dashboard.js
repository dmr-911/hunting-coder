export default function dashboard(req, res){
    res.status(200).json({
        "posts" : 5,
        "likes"  : 100,
        "followers" : 20,
        "following" : 40
    })
}
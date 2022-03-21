export default function handler(req, res){
    res.setPreviewData({ user : 'Mizan'})
    res.redirect(req.query.redirect); 
}
exports.getPageNotFound = (req,resp,next)=>{
    // resp.status(404).sendFile(path.join(rootDir,'views',"404.html"));
    resp.status(404).render('404',{pageTitle:'Page Not Found'});
};
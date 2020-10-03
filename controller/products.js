const Product = require('../models/product'); 




exports.getAddProducts = (req,resp,next)=>{
    // resp.send("<form action='/admin/add-product' method='post'><input type='text' name='title'><button>ADD</button></form>");
    // resp.sendFile(path.join(rootDir,"views","add-product.html"));
    resp.render("add-product",{path:"/admin/add-product",addProduct:true})
};

exports.postAddProducts = (req,resp,next)=>{
    console.log(req.body);
    // products.push({title:req.body.productName});
    const product = new Product(req.body.productName);
    product.save();
    // console.log("all Prods ::>> ",Product.getAllProducts())
    resp.redirect("/");
};

exports.getProducts = (req,resp,next)=>{
    // resp.send("Hi THIS IS HOME PAGE <a href='admin/add-product'>Add Product</a>");
    const prods = Product.getAllProducts(products=>{
        resp.render('shop',{ products : products,path:'',activeShop:true});
    });
    

};
import React, {useState}  from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from "react-native";
 function Home(){

 const [cart, setCart]=useState([]);
 const [products] = useState([
     {
         name: "Rolex Wrist Watch",
         image: "https://m.media-amazon.com/images/I/71EZdF+Ig9L._AC_UX466_.jpg",
         price: "Price: GHS 500",
         Details: "Details: Yellow Gold Rolex watch for men"
     },
     {
        name: "Iphone 13 Pro Max",
        image: "https://i.insider.com/6140f4adf0cb130019e8c26f",
        price: "Price: GHS 1200",
        Details: "Details: Apple iPhone 13 Pro Max"
    },
    {
        name: "Denim Jacket",
        image: "https://www.fashionbeans.com/wp-content/uploads/2017/11/a.p.c.denim-jacket.jpg",
        price: "Price: GHS 200",
        Details: "Details: Best Men Denim Jacket"
    },
    {
        name: "HP Laptop",
        image: "https://m.media-amazon.com/images/I/31Rlc8qeGiL._AC_.jpg",
        price: "Price: GHS 3,100",
        Details: "HP 15.6 HD Intel 10th Gen i3-1005G1 3.4GHz 8GB RAM 256GB SSD Win 10 Laptop"
    },
    {
        name: "Cotton-Blend Jersey T-Shirt",
        image: "https://images.saymedia-content.com/.image/t_share/MTc3MzMwMDY2NDAzODk1MDMz/designer-handbag-purse-brands-part2.jpg",
        price: "Price: GHS 60",
        Details: "Handbag purse for females"
    },
 ]);
 const addToCart =(product)=>{
    setCart([...cart, product]);
 };
 
     return(
         <ScrollView>
             <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                 <Text style={{textAlign:"center", fontSize:26, fontWeight:"bold", color:"brown"}}>Products</Text>
                 <TouchableOpacity style={{marginLeft:70, backgroundColor:"orange", width:110, paddingVertical:10, borderRadius:50}}>
                     <Text style={{color:"white", fontWeight:"bold"}}>Go To Cart ({cart.length})</Text>
                 </TouchableOpacity>
             </View>
             <View style={{ alignItems:"center", justifyContent:"center", backgroundColor:"gainsboro"}}>
                 {products.map((product)=>(
                    
                        <View style={{backgroundColor:"white", borderRadius:20, marginVertical:20, width:300, paddingVertical:30}}>
                            <Image style={{height:250, width:200, alignSelf:"center", borderRadius:10}} source={{uri:product.image}}/>
                            <Text style={{textAlign:"center", fontSize:18,}}>{product.name}</Text>
                            <Text style={{textAlign:"center"}}>{product.price}</Text>
                            <TouchableOpacity onPress={addToCart} style={{alignSelf:"center", marginTop:10, backgroundColor:"aqua", width:150, paddingVertical:10, paddingHorizontal:10}}>
                                <Text style={{textAlign:"center"}}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    
                 ))}
             </View>
         </ScrollView>
     )
 
}
 export default Home;
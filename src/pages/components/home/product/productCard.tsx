import {useState} from "react";
import {View} from "@tarojs/components";
import './productCard.scss'

export interface ProductItem {
  // 商品图片链接
  img_src: string;
  // 商品
  title: string;
  // 商品id
  id?: number;
  // 可选目标地址
  target?: string;
  // 商品描述
  content?: string;
  // 商品价格
  price?: number
}

const ProductItem = function (props: {product : ProductItem, first ?: boolean}) {

  const [product] = useState<ProductItem>(props.product);

  return (
    <View className={"productItem"} style={props.first ? {height: '75vw'} : undefined}>
      <View className={"image"}  style={{backgroundImage: `url(${product.img_src})`}} />
      <View className={"bottomText"}>
        {product.title ? <View className={"title"}>{product.title}</View> : undefined }
        {product.content ? <View className={"content"}>{product.content}</View> : undefined}
        {product.price ? <View className={"price"}>{`${product.price}￥`}</View> : undefined}
      </View>
    </View>
  )

}

const ProductCard = function (props: { products : Array<ProductItem> }) {

  return (
  <View className={"productCard"}>
    {props.products.map((item ,index ) => <ProductItem product={item} first={index === 0} key={index} /> )}
  </View>
  )

}
                                                                                                                                                                                                                                                                                                                                                                                         
export default ProductCard;

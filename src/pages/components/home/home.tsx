import {Swiper, SwiperItem, View} from '@tarojs/components'
import './home.scss';
import {AtGrid, AtSearchBar} from "taro-ui";
import {useState} from "react";
import {AtGridItem} from "_taro-ui@3.0.0-alpha.10@taro-ui/types/grid";
import ProductCard, {ProductItem} from "./product/productCard";

const tempAtGridItems: Array<AtGridItem> = [
  {
    image: 'http://cdn.mr8god.cn/img/dogB_72x72.gif',
    value: '舔狗一号'
  },
  {
    image: 'http://cdn.mr8god.cn/img/dogA_72x72.jpg',
    value: '舔狗二号'
  },
  {
    image: 'http://cdn.mr8god.cn/img/dogB_72x72.gif',
    value: '舔狗三号'
  },
  {
    image: 'http://cdn.mr8god.cn/img/dogA_72x72.jpg',
    value: '舔狗四号'
  },
  {
    image: 'http://cdn.mr8god.cn/img/dogB_72x72.gif',
    value: '舔狗五号'
  },
  {
    image: 'http://cdn.mr8god.cn/img/dogA_72x72.jpg',
    value: '舔狗六号'
  }
]


export default function () {

  const [searchBar, setSearchBar] = useState("");

  const searchChange = function (value: string) {
    setSearchBar(value);
  }

  // 模拟的商品数据
  const products: Array<ProductItem> = [
    {
      img_src: 'http://cdn.mr8god.cn/img/itemA.gif',
      title: '商品A',
      id: 1
    },
    {
      img_src: 'http://cdn.mr8god.cn/img/itemB.jpg',
      title: '商品B',
      id: 2
    },
    {
      img_src: 'http://cdn.mr8god.cn/img/itemC.jpg',
      title: '商品C',
      target: ''
    }
  ]

  return (
    <View>

      <AtSearchBar value={searchBar} onChange={searchChange} onActionClick={undefined} />

      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'></View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'></View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'></View>
        </SwiperItem>
      </Swiper>

      <AtGrid mode='rect' hasBorder={false} data={tempAtGridItems}
       />

      <ProductCard products={products}/>

    </View>
  )

}

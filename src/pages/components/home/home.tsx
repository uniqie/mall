import {Swiper, SwiperItem, View} from '@tarojs/components'
import './home.scss';
import {AtGrid, AtSearchBar} from "taro-ui";
import {useState} from "react";
import {AtGridItem} from "_taro-ui@3.0.0-alpha.10@taro-ui/types/grid";
import ProductCard, {ProductItem} from "./product/productCard";

const tempAtGridItems: Array<AtGridItem> = [
  {
    image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/simple_list/595c3b4dNbc6bc95d.png?sign=f128a6a3c1756ed941d3fc242184e3f3&t=1634604897',
    value: '领取中心'
  },
  {
    image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/simple_list/595c3b2aN4155b931.png?sign=94326f49978a1429fd16904a6ce26d63&t=1634604941',
    value: '找折扣'
  },
  {
    image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/simple_list/595c3aeeNa89ddf71.png?sign=1a25440480b60cdad1de17a6e279691f&t=1634604954',
    value: '领会员'
  },
  {
    image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/simple_list/59c85643N31e68303.png?sign=3f5f2feb7df30c015063b8b66959530a&t=1634604971',
    value: '新品首发'
  },
  {
    image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/simple_list/5ac44618Na1db7b09.png?sign=c6c85bef2a9647e5e687844d72967f1c&t=1634604994',
    value: '领京豆'
  },
  {
    image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/simple_list/5a411466N040a074b.png?sign=f95ab3b1d1871c46d00222ce78d2f719&t=1634605019',
    value: '手机馆'
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
      img_src: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/products/2cb4c8faa9ce7415.jpg!cc_290x370.webp?sign=ff5d6ec7d962e6a4bca581d4da166efc&t=1634612375',
      title: '商品A',
      id: 1
    },
    {
      img_src: '',
      title: '商品B',
      id: 2
    },
    {
      img_src: '',
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

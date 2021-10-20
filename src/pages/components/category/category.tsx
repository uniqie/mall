import {View} from "@tarojs/components";
import {useState} from "react";
import {AtButton, AtGrid} from "taro-ui";

import './category.scss'

export interface categoryChild {
  // 图片链接
  image: string;
  // （类别）名/name
  value: string;
  // 目标链接
  target?: string;
}

export interface categoryItem {
  item: string;
  children: categoryChild[];
}

export type categoryList = categoryItem[]

// 模拟数据
const categoryData: categoryList = [
  {
    item: '男装',
    children: [
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/man-clothes/1f83f5ab9b92788c.png.webp?sign=469a9345f90bcbeacad96c61bdfa1033&t=1634693378',
        value: '休闲'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/man-clothes/cbfd545eb81fc360.jpg?sign=c9be1716bc18f7df8660a1b4d76fb48c&t=1634693253',
        value: '卫衣',
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/man-clothes/07c5ec8f88bb7657.jpg?sign=cc921c247e8b87ddb7dfd6079ae8339f&t=1634693298',
        value: '毛衣',
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/man-clothes/604f5e57eb674211.jpg?sign=13e7d2e48b286a865410b556bd737813&t=1634693334',
        value: '羽绒服'
      },
    ]
  },
  {
    item: '数码',
    children: [
      {
        image: '',
        value: '休闲',
      },
      {
        image: '',
        value: '毛衣',
      },
      {
        image: '',
        value: '羽绒服'
      }
    ]
  },
  {
    item: '女装',
    children: [
      {
        image: '',
        value: '休闲',
      },
      {
        image: '',
        value: '毛衣',
      },
      {
        image: '',
        value: '羽绒服'
      }
    ]
  },
  {
    item: '食品',
    children: [
      {
        image: '',
        value: '休闲',
      },
      {
        image: '',
        value: '毛衣',
      },
      {
        image: '',
        value: '羽绒服'
      }
    ]
  },
  {
    item: '电器',
    children: [
      {
        image: '',
        value: '休闲',
      },
      {
        image: '',
        value: '毛衣',
      },
      {
        image: '',
        value: '羽绒服'
      }
    ]
  },
  {
    item: '母婴',
    children: [
      {
        image: '',
        value: '休闲',
      },
      {
        image: '',
        value: '毛衣',
      },
      {
        image: '',
        value: '羽绒服'
      }
    ]
  },
  {
    item: '玩具',
    children: [
      {
        image: '',
        value: '休闲',
      },
      {
        image: '',
        value: '毛衣',
      },
      {
        image: '',
        value: '羽绒服'
      }
    ]
  },
]


const Category = function () {

  const [list, setList] = useState<categoryList>(categoryData);
  const [currentCategory, setCurrentCategory] = useState<categoryItem>(list[0]);

  return (
    <View className={"category"}>
      <View className="menu">
        {list.map((item) => <AtButton className={"menu-item"} onClick={() => setCurrentCategory(item)}>{item.item}</AtButton> )}
      </View>
      <AtGrid className="menu-display" mode="square" hasBorder={false} data={currentCategory.children}></AtGrid>
    </View>
  )

}

export default Category;

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
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/digital/1f93da665f0970f6.jpg?sign=650e2fddd44fcdcaab15df965758f927&t=1634710687',
        value: '手机',
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/digital/497617fd95f85fc5.jpg?sign=aac1fc2279a8021c6257130794b2d97d&t=1634710627',
        value: '电脑',
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/digital/52c4cb17403594ad.jpg?sign=b993107794995370c9178440e5b7fa2f&t=1634710078',
        value: '相机'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/digital/9eba1c5d5f302e54.jpg?sign=542fc1e50962a51edd89830d72db9ca8&t=1634702051',
        value: '无人机'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/digital/52c4cb17403594ad.jpg?sign=b993107794995370c9178440e5b7fa2f&t=1634710078',
        value: '存储'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/digital/5373b4fe16c56b68.jpg!cc_320x320.webp?sign=f2d871a2301963ca430a930c33a44700&t=1634710136',
        value: '音响'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/digital/c7edc7a2b9574a07.jpg!cc_320x320.webp?sign=be959a632287b46684b08c232bcd1205&t=1634710183',
        value: 'kindle!'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/digital/5811a81eNedf83eb6.jpg!cc_320x320.webp?sign=5722ec869dc6d571c5b4db0d3c4d498b&t=1634710640',
        value: '镜头'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/digital/1b5e49ffb234f20b.jpg!cc_320x320.webp?sign=3a6675a47526d73655ba995d8a4027e1&t=1634710720',
        value: 'VR眼镜'
      }
    ]
  },
  {
    item: '女装',
    children: [
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/woman-clothes/6c44fc9baf82434d.png.webp?sign=76008440cfcec2b66fbed0cc0fc35595&t=1634712455',
        value: '衬衫',
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/woman-clothes/bb0dad70f98797b4.jpg!cc_320x320.webp?sign=b5ace2699b8681ce1f7738e5b54b1e15&t=1634712480',
        value: '针织',
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/woman-clothes/d8d86d2273185b12.jpg!cc_320x320.webp?sign=313f086d07f1483bed1d1198e79c24b8&t=1634712490',
        value: '外套'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/woman-clothes/1d1625514d5b8797.jpg!cc_320x320.webp?sign=70e90aaa4fc613902f19a988561f96ba&t=1634712505',
        value: '毛衣'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/woman-clothes/095c42484a02c991.jpg.webp?sign=a0caead25d791d11829dacf62e88a8bf&t=1634712538',
        value: '围巾'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/woman-clothes/d7d301b90fc1dd67.jpg.webp?sign=a53856b5ab78ccf0462f0a7c9c11ad84&t=1634712559',
        value: '毛衣'
      },
      {
        image: 'https://636c-cloud1-8gfb5vcdfead22fc-1307862140.tcb.qcloud.la/image/category/woman-clothes/4b3638f5bef0f80b.jpg?sign=36aeb34a0ef589082842b90b5dd2a0d3&t=1634712610',
        value: 'JK'
      },
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

  // @ts-ignore
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

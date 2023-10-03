import React, {  useState } from 'react';
import { Menu, Switch } from 'antd';
import { AppstoreOutlined, UserOutlined, BankOutlined, ContainerOutlined  } from '@ant-design/icons';
import AdminHeader  from './adminHeader/adminHeader';
import GetUser from '../user/User';
import GetProduct from '../product/getProduct';
import AdProduct from '../product/AdProduct';
import GetCategories from '../category/getCategory';
import AdCategories from '../category/adCategory';
import FastfoodIcon from '@mui/icons-material/Fastfood';



export function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

export default function AdminPage() {

    const items = [
        getItem('Tổng quan', '10', <BankOutlined />, [
        ]),
        getItem('Người dùng', 'user', <UserOutlined />, [
          getItem('Xem danh sách người dùng', '2'),
        ]),
        getItem('Sản phẩm', 'product', <FastfoodIcon />, [
          getItem('Xem danh sách sản phẩm', '3'),
          getItem('Thêm sản phẩm mới', '4'),
        ]),
        getItem('Danh mục sản phẩm', 'categories', <AppstoreOutlined />, [
          getItem('Xem danh sách danh mục', '6'),
          getItem('Thêm danh mục mới', '7'),
        ]),
        getItem('Đơn hàng', '8', <ContainerOutlined />, [
          getItem('Xem danh sách đơn hàng', '9'),
          getItem('Xem thống kê đơn hàng', '12'),
        ]),
      ];

    const rootSubmenuKeys = ['user', 'product','categories', '10', '8' ];

    const [openKeys, setOpenKeys] = useState([]);
    const [keySelected, setKeySelected] = useState('');

    const renderPage = (key) => {
      switch(key) {

        case '2':
          return (
            <GetUser/>
          )
        case '3':
          return (
            <GetProduct/>
          )
        case '4':
          return (
            <AdProduct/>
          )
        case '6':
          return (
            <GetCategories/>
          ) 
        case '7':
          return (
            <AdCategories/>
          ) 
        default:
          return (
            <GetProduct/>
          ) 
      }
    }

    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };

    const handleOnclick = ({ key }) => {
        // console.log
        setKeySelected (key);
        console.log('keySelected', keySelected);
    };
    
  return (
    <div>
      <AdminHeader/>
      <div style = {{display: 'flex',}}>
          <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{
              width: 256,
              }}
              items={items}
              onClick={handleOnclick}
          />
          <div>
            {renderPage(keySelected)}
          </div>
      </div>
    </div>


  )
}
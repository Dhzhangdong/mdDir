import { useParams } from '@/.umi/exports';
import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { Children, useState } from 'react';
import { Link, Outlet } from 'umi';
import request from 'umi-request';

export default () => {
  const [pathname, setPathname] = useState('');
  const [title, settitle] = useState("");
  const [logo, setlogo] = useState("");
  const id = useParams()["id"];

  return (
    <ProLayout
      title={title}
      logo={logo}
      splitMenus
      token={{
        colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
        colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
        colorTextAppListIcon: 'rgba(255,255,255,0.85)',
        sider: {
          colorBgCollapsedButton: '#fff',
          colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
          colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
          colorMenuBackground: '#004FD9',
          colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
          colorMenuItemDivider: 'rgba(255,255,255,0.15)',
          colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
          colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
          colorTextMenuSelected: '#fff',
          colorTextMenuItemHover: 'rgba(255,255,255,0.75)',
          colorTextMenu: 'rgba(255,255,255,0.75)',
          colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
          colorTextMenuTitle: 'rgba(255,255,255,0.95)',
          colorTextMenuActive: 'rgba(255,255,255,0.95)',
          colorTextSubMenuSelected: '#fff',
        },
      }}
      menu={
        {
          request: async () => {
            const dir = await request.get("/api/publicApi/getDir?id=" + id);
            // const dir={
            //   name:"test",
            //   logo:"test/logo.png",
            //   menu:[
            //     {
            //       name:"home",
            //       path:"/doc/test/home"
            //     }
            //   ]
            // };
            settitle(dir.name);
            setlogo("/doc/" + dir.logo);
            return [
              {
                path: '/doc',
                routes: dir.menu,
              },
            ];
          }
        }
      }

      menuItemRender={
        (menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
          }
          // 支持二级菜单显示icon
          let iconEl = menuItemProps.icon;
          if (typeof iconEl === 'string') {
            iconEl = (
              <span className="anticon">
                {' '}
                <svg
                  style={{
                    width: '1em',
                    height: '1em',
                    fill: 'currentColor',
                    overflow: 'hidden',
                  }}
                  aria-hidden="true"
                >
                  <use href={'#' + menuItemProps.icon}></use>
                </svg>
              </span>
            );
          }
          return (
            <Link to={menuItemProps.path} onClick={() => {
              setPathname(menuItemProps.path || '/welcome');
            }}>
              {menuItemProps.pro_layout_parentKeys &&
                menuItemProps.pro_layout_parentKeys.length > 0 &&
                iconEl}
              {defaultDom}
            </Link>
          );
        }
      }
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <p
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
              color: "000"
            }}
          >
            <a href="/" style={{ color: "rgb(251 244 194)", fontSize: 15, fontWeight: "bold" }}>《返回文档中心》</a>
          </p>
        );
      }
      }
    >
      <PageContainer
      >
        <Outlet />
      </PageContainer>
    </ProLayout >
  );
};
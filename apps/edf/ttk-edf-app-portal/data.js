import { WSAEDESTADDRREQ } from "constants";

export function getMeta() {

    return {
        name: 'root',
        component: '::div',
        className: 'ttk-edf-app-portal',
        children: [
            {
                name: 'header',
                component: 'Layout',
                className: 'ttk-edf-app-portal-header',
                children: [
                    {
                        name: 'left',
                        component: 'Layout',
                        className: 'ttk-edf-app-portal-header-left',
                        // _visible: '{{data.isShowMenu}}',
                        children: [{
                            name: 'logo',
                            component: '::img',
                            className: 'ttk-edf-app-portal-header-left-logo',
                            src: '{{$getLogo()}}'
                        }, {
                            name: 'siteName',
                            component: '::h2',
                            style: { color: '#fff' },
                            children: '企业开发平台'
                        }]
                    }, {
                        name: 'right',
                        component: 'Layout',
                        className: 'ttk-edf-app-portal-header-right',
                        children: [{
                            name: 'common',
                            component: 'Popover',
                            overlayClassName: 'manageListPopover',
                            // trigger: 'click',
                            visible: '{{data.visible}}',
                            onVisibleChange: '{{$handleVisibleChange}}',
                            style: { padding: '0px 10px' },
                            className: 'ttk-edf-app-portal-header-right-menu',
                            placement: 'bottomLeft',
                            content: [
                                {
                                    name: 'menu',
                                    component: 'Menu',
                                    onClick: '{{$toggleManage}}',
                                    children: [
                                        {
                                            name: 'item1',
                                            component: 'Menu.Item',
                                            style: { padding: '0px', paddingLeft: '8px', paddingRight: '8px', height: '36px', lineHeight: '36px', maxWith: '320px', fontSize: '14px' },
                                            className: 'ttk-edf-app-portal-header-right-menu-item1',
                                            title: '{{data.manageList[_rowIndex].name}}',
                                            children: '{{data.manageList[_rowIndex].name}}',
                                            key: '{{_rowIndex}}',
                                            _power: 'for in data.manageList'
                                        },

                                    ]
                                },
                                {
                                    name: 'item2',
                                    component: '::div',
                                    style: { borderTop: '1px solid #e4e4e4', backgroundColor: '#F9F8FA' },
                                    children: [
                                        {
                                            name: 'org3',
                                            className: 'ttk-edf-app-portal-header-right-org-popover-icon',
                                            component: 'Button',
                                            onClick: "{{$goCompanyManage}}",
                                            style: { height: '36px', overflow: 'hidden' },
                                            children: {
                                                name: 'container',
                                                component: '::span',
                                                children: [{
                                                    name: 'setting',
                                                    component: 'Icon',
                                                    type: 'qiyeguanli',
                                                    fontFamily: 'edficon',
                                                    style: { fontSize: '22px', verticalAlign: 'middle' },
                                                    className: 'ttk-edf-app-portal-header-right-org-popover-icon-title'
                                                }, {
                                                    name: 'item',
                                                    component: '::span',
                                                    style: { display: 'inline-block', verticalAlign: 'middle', fontSize: '14px' },
                                                    children: '企业管理'
                                                }]
                                            }
                                        },
                                        {
                                            name: 'line',
                                            style: { display: 'inline-block', verticalAlign: 'middle', width: '1px', height: '25px', borderLeft: '1px dashed #8E8C8C' },
                                            component: '::div'
                                        },
                                        {
                                            name: 'org4',
                                            className: 'ttk-edf-app-portal-header-right-org-popover-icon',
                                            component: 'Button',
                                            style: { height: '36px' },
                                            onClick: "{{$goRegister}}",
                                            children: {
                                                name: 'container',
                                                component: '::div',
                                                children: [{
                                                    name: 'add_company',
                                                    component: 'Icon',
                                                    fontFamily: 'edficon',
                                                    type: 'chuangjianqiye',
                                                    style: { fontSize: '22px', verticalAlign: 'middle' },
                                                }, {
                                                    name: 'item',
                                                    component: '::span',
                                                    style: { display: 'inline-block', verticalAlign: 'middle', fontSize: '14px' },
                                                    children: '创建企业'
                                                }]
                                            }

                                        }
                                    ]
                                }
                            ],
                            children: {
                                name: 'internal',
                                component: '::div',
                                className: 'orgName',
                                _visible: '{{data.headCtrl}}',
                                onClick: '{{$getOrgs}}',
                                style: { margin: '0px 2px', float: 'left', height: '54px', lineHeight: '54px', padding: '0 10px' },
                                children: [{
                                    name: 'currentOrg',
                                    component: '::span',
                                    title: "{{$getOrgName()}}",
                                    children: "{{$getOrgName()}}",
                                    className: 'currentOrgName',
                                },
                                {
                                    name: 'down',
                                    fontFamily: 'edficon',
                                    component: 'Icon',
                                    style: { fontSize: '22px', verticalAlign: 'middle' },
                                    type: 'xia'
                                }]
                            }

                        },
                        {
                            name: 'rightDiv',
                            component: '::div',
                            className: 'ttk-edf-app-portal-search-rightDiv',
                            children: [{
                                name: 'topSearch1',
                                _visible: '{{data.headCtrl}}',
                                component: '::span',
                                className: 'ttk-edf-app-portal-header-right-headerSearch',
                                style: { padding: '0px 16px 0 10px', cursor: 'pointer' },
                                children: [{
                                    name: 'news',
                                    component: '::span',
                                    className: 'headBarBtn',
                                    children: {
                                        component: 'AppLoader',
                                        appName: 'ttk-edf-app-notice',
                                        appIndex: 1
                                    }
                                }]
                            }, /*{
                                name: 'myMessageTitle',
                                component: '::span',
                                _visible: '{{data.headCtrl}}',
                                className: 'helpCenter',
                                style: { padding: '0px 16px 0 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' },
                                onClick: '{{$menuControl}}',
                                children: [{
                                    name: 'solution',
                                    component: 'Icon',
                                    fontFamily: 'edficon',
                                    style: { fontSize: '22px', verticalAlign: 'middle', },
                                    className: 'ttk-edf-app-portal-header-right-help-icon-popover',
                                    type: 'zaixianbangzhuxin',
                                }, {
                                    name: 'helpName',
                                    component: '::span',
                                    className: 'headBarBtn',
                                    children: "{{'帮助中心'}}"
                                }]
                            }, */{
                                name: 'pagestyle',
                                component: '::span',
                                className: 'helpCenter',
                                style: { padding: '0px 16px 0 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' },
                                onClick: '{{$pagestyleControl}}',
                                children: [{
                                    name: 'pagesty',
                                    component: 'Icon',
                                    fontFamily: 'edficon',
                                    style: { fontSize: '22px', verticalAlign: 'middle', },
                                    className: 'ttk-edf-app-portal-header-right-help-icon-popover',
                                    type: 'chuangjianqiye',
                                }, {
                                    name: 'helpName',
                                    component: '::span',
                                    className: 'headBarBtn',
                                    children: '{{data.isTabsStyle ? "标准风格" : "多页签风格"}}',
                                }]
                            }, {
                                name: 'fullScreen',
                                component: '::span',
                                className: 'helpCenter',
                                style: { padding: '0px 16px 0 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' },
                                onClick: '{{$fullScreenControl}}',
                                children: [{
                                    name: 'solution',
                                    component: 'Icon',
                                    fontFamily: 'edficon',
                                    style: { fontSize: '22px', verticalAlign: 'middle', },
                                    className: 'ttk-edf-app-portal-header-right-help-icon-popover',
                                    type: '{{data.fold  ? "shouhui" : "zhankai"}}',
                                }, {
                                    name: 'helpName',
                                    component: '::span',
                                    className: 'headBarBtn',
                                    children: '{{data.fold ? "窗口" : "全屏"}}',
                                }]
                            }, {
                                name: 'pop',
                                component: '::div',
                                className: 'popContent',
                                style: { position: 'fixed', top: '54px', right: '0px', overflow: 'hidden', height: '{{data.animation == "in"?"100%":"0" }}', width: '100%', boxSizing: 'border-box', paddingBottom: '{{data.animation == "in"?"54px":"0"}}', zIndex: '2' },
                                children: {
                                    name: 'card',
                                    component: '::div',
                                    bordered: false,
                                    style: { display: "{{data.showPanel}}" },
                                    onAnimationEnd: "{{$animationEnd}}",
                                    className: '{{data.animation == "in" ? "ttk-edf-app-portal-header-right-help-popover animated slideInDown" : "ttk-edf-app-portal-header-right-help-popover animated slideOutDown"}}',
                                    // className: 'ttk-edf-app-portal-header-right-help-popover',
                                    children: [{
                                        name: 'shade1',
                                        onMouseOver: '{{$hidePanel}}',
                                        className: 'ttk-edf-app-portal-header-right-help-popover-shade',
                                        component: '::div',
                                        onClick: '{{$hidePanel}}'
                                    }, {
                                        name: 'shade2',
                                        className: 'ttk-edf-app-portal-header-right-help-popover-content',
                                        component: '::div',

                                        children: [{
                                            name: 'icon-arrow',
                                            component: '::div',
                                            className: 'ant-popover-arrow',
                                        }, /*{
                                            name: 'titleIcon',
                                            component: '::div',
                                            className: 'ttk-edf-app-portal-header-right-help-popover-titleIcon',
                                            children: [{
                                                name: 'helpIcon',
                                                component: 'Icon',
                                                bordered: false,
                                                fontFamily: 'edficon',
                                                style: { fontSize: '22px', verticalAlign: 'middle', marginRight: '5px', marginBottom: '2px' },
                                                className: 'ttk-edf-app-portal-header-right-help-popover-icon',
                                                type: 'bangzhuzhongxin'
                                            }, {
                                                name: 'helpTitle1',
                                                component: '::span',
                                                bordered: false,
                                                className: 'ttk-edf-app-portal-header-right-help-popover-title1',
                                                children: '帮助中心'
                                            }]
                                        }, */{
                                            name: 'Search',
                                            component: '::div',
                                            // className: 'ttk-edf-app-portal-header-right ,animated, slideInUp,',
                                            children: [{
                                                name: 'search',
                                                component: 'Input.Search',
                                                className: 'ttk-edf-app-portal-header-right-search',
                                                placeholder: '提问或使用关键词搜索...',
                                                onSearch: '{{function(value){console.log(value)}}}'
                                            }]
                                        }, {
                                            name: 'help-title',
                                            component: '::ul',
                                            className: 'ttk-edf-app-portal-header-right-help-subContent',
                                            children: [{
                                                name: 'content1',
                                                component: '::li',
                                                children: "{{'为什么修改密码后登录一直报错？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content2',
                                                component: '::li',
                                                children: "{{'如何便捷管理多个企业账号？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content3',
                                                component: '::li',
                                                children: "{{'如何修改绑定手机？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content4',
                                                component: '::li',
                                                children: "{{'如何修改绑定手机？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content5',
                                                component: '::li',
                                                children: "{{'如何修改绑定手机？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content6',
                                                component: '::li',
                                                children: "{{'如何修改绑定手机？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content7',
                                                component: '::li',
                                                children: "{{'如何修改绑定手机？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content8',
                                                component: '::li',
                                                children: "{{'如何修改绑定手机？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content9',
                                                component: '::li',
                                                children: "{{'如何修改绑定手机？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content10',
                                                component: '::li',
                                                children: "{{'如何修改绑定手机？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }],
                                        }]
                                    },]
                                },
                            }, {
                                name: 'common',
                                component: 'Popover',
                                trigger: 'click',
                                placement: 'bottomRight',
                                style: { padding: '0px 10px' },
                                className: 'ttk-edf-app-portal-header-right-menu',
                                placement: 'bottom',
                                content: {
                                    name: 'menu',
                                    component: 'Menu',

                                    onClick: '{{$topMenuClick}}',
                                    children: [{
                                        name: 'Search',
                                        component: 'Menu.Item',
                                        key: 'mySetting',
                                        className: 'ttk-edf-app-portal-header-right-self-popover-item',
                                        children: [{
                                            name: 'message',
                                            component: 'Icon',
                                            fontFamily: 'edficon',
                                            style: { fontSize: '22px', verticalAlign: 'middle' },
                                            className: 'ttk-edf-app-portal-header-right-self-popover-item1',
                                            type: 'gerenshezhi',
                                        }, {
                                            name: 'title',
                                            component: '::p',
                                            children: "{{'推荐的文章'}}",
                                            className: 'ttk-edf-app-portal-header-right-help-title'
                                        }, {
                                            name: 'help-title',
                                            component: '::ul',
                                            className: 'ttk-edf-app-portal-header-right-help-subContent',
                                            children: [{
                                                name: 'content1',
                                                component: '::li',
                                                children: "{{'为什么修改密码后登录一直报错？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content2',
                                                component: '::li',
                                                children: "{{'如何便捷管理多个易订货账号？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }, {
                                                name: 'content3',
                                                component: '::li',
                                                children: "{{'如何修改绑定手机？'}}",
                                                className: 'ttk-edf-app-portal-header-right-help-subContent-item'
                                            }],
                                        }]
                                    },]
                                }
                            }, {
                                name: 'common',
                                component: 'Popover',
                                overlayClassName: 'headerRightMenu',
                                trigger: 'click',
                                placement: 'bottomRight',
                                style: { padding: '0px 10px' },
                                className: 'ttk-edf-app-portal-header-right-menu',
                                placement: 'bottom',
                                onVisibleChange: '{{$cancelCheckStatus}}',
                                content: {
                                    name: 'menu',
                                    component: 'Menu',
                                    _visible: '{{!data.setPopoverVisible}}',
                                    selectedKeys: '{{data.selectedKeys}}',
                                    onClick: '{{$topMenuClick}}',
                                    children: [{
                                        name: 'Set',
                                        component: 'Menu.Item',
                                        key: 'mySetting',
                                        _visible: '{{data.headCtrl}}',
                                        className: 'ttk-edf-app-portal-header-right-self-popover-item',
                                        children: [{
                                            name: 'message',
                                            component: 'Icon',
                                            fontFamily: 'edficon',
                                            style: { fontSize: '24px', verticalAlign: 'middle' },
                                            className: 'ttk-edf-app-portal-header-right-self-popover-item1',
                                            type: 'gerenshezhi',
                                        }, {
                                            name: 'messageName',
                                            component: '::span',
                                            className: 'headBarBtn',
                                            children: "个人设置"
                                        }]
                                    }, {
                                        name: 'Help',
                                        component: 'Menu.Item',
                                        key: 'help',
                                        className: 'ttk-edf-app-portal-header-right-self-popover-item',
                                        children: [{
                                            name: 'message',
                                            fontFamily: 'edficon',
                                            component: 'Icon',
                                            style: { fontSize: '24px', verticalAlign: 'middle' },
                                            className: 'ttk-edf-app-portal-header-right-self-popover-item2',
                                            type: 'zaixianbangzhuxin',
                                        }, {
                                            name: 'messageName',
                                            component: '::span',
                                            className: 'headBarBtn',
                                            children: "在线帮助"
                                        }]
                                    }, /*{
                                        name: 'theme',
                                        component: 'Menu.Item',
                                        trigger: 'click',
                                        key: 'toggleColor',
                                        className: 'ttk-edf-app-portal-header-right-self-popover-item',
                                        children: [{
                                            name: 'message',
                                            component: 'Icon',
                                            fontFamily: 'edficon',
                                            style: { fontSize: '24px', verticalAlign: 'middle' },
                                            className: 'ttk-edf-app-portal-header-right-self-popover-item2',
                                            type: 'huanfu',
                                        }, {
                                            name: 'messageItem',
                                            component: '::span',
                                            className: 'headBarBtn',
                                            children: [{
                                                name: 'messageItem2',
                                                component: '::span',
                                                style: { display: 'flex', alignItems: 'center' },
                                                children: [{
                                                    name: 'name',
                                                    component: '::span',
                                                    placement: 'bottom',
                                                    title: '{{data.colors[_rowIndex].tip}}',
                                                    onClick: '{{function(){{$toggleColor(data.colors[_rowIndex].color, "change")}}}}',
                                                    className: 'ttk-edf-app-portal-header-right-self-popover-item-toggleColor',
                                                    style: { background: "{{data.colors[_rowIndex].color}}" },
                                                    _power: 'for in data.colors',

                                                }]
                                            }]
                                        }]
                                    },*/ {
                                        name: 'Themes',
                                        component: 'Menu.Item',
                                        key: 'changestyle',
                                        className: 'ttk-edf-app-portal-header-right-self-popover-item',
                                        // onClick: '{{$logout}}',
                                        children: [{
                                            name: 'huanfu',
                                            component: 'Icon',
                                            fontFamily: 'edficon',
                                            style: { fontSize: '24px', verticalAlign: 'middle' },
                                            className: 'ttk-edf-app-portal-header-right-self-popover-item2',
                                            type: 'huanfu',
                                        }, {
                                            name: 'themeName',
                                            component: '::span',
                                            className: 'headBarBtn',
                                            children: "显示设置"
                                        }]
                                    }, {
                                        name: 'Exit',
                                        component: 'Menu.Item',
                                        key: 'logout',
                                        className: 'ttk-edf-app-portal-header-right-self-popover-item',
                                        // onClick: '{{$logout}}',
                                        children: [{
                                            name: 'message',
                                            component: 'Icon',
                                            fontFamily: 'edficon',
                                            style: { fontSize: '24px', verticalAlign: 'middle' },
                                            className: 'ttk-edf-app-portal-header-right-self-popover-item2',
                                            type: 'tuichu',
                                        }, {
                                            name: 'messageName',
                                            component: '::span',
                                            className: 'headBarBtn',
                                            children: "退出"
                                        }]
                                    }
                                    ]
                                },
                                children: {
                                    name: 'internal2',
                                    component: '::div',
                                    className: 'basicInfo',
                                    style: { margin: '0px 2px' },
                                    children: [{
                                        name: 'icon1',
                                        component: '::img',
                                        //fontFamily: 'edficon',
                                        style: { width: '28px', verticalAlign: 'middle', margin: '-3px 5px', cursor: 'pointer', height: '28px' },
                                        src: '{{$getPhoto()}}'
                                        //type: 'yonghu'
                                    }, {
                                        name: 'userName',
                                        component: '::span',
                                        className: 'userName',
                                        title: '{{$getUserNickName()}}',
                                        children: '{{$getUserNickName()}}'
                                    }, {
                                        name: 'BugList',
                                        component: 'Icon',
                                        fontFamily: 'edficon',
                                        style: { fontSize: '22px', verticalAlign: 'middle', marginLeft: '5px', cursor: 'pointer' },
                                        type: 'xia'
                                    }]
                                }

                            }]
                        }, {
                            name: 'topSearch1',
                            component: '::span',
                            _visible: '{{data.headCtrl}}',
                            className: 'ttk-edf-app-portal-header-right-headerSearch',
                            children: [{
                                name: 'topSearchIcon',
                                component: 'Icon',
                                _visible: '{{!($getSearchVisible())}}',
                                onClick: '{{$searchVisibleToogle}}',
                                className: 'ttk-edf-app-portal-header-right-org-menu-icon-menu',
                                type: 'sousuo',
                                style: { fontSize: '24px', verticalAlign: 'middle' },
                                fontFamily: 'edficon',
                            }, {
                                name: 'searchName',
                                component: '::span',
                                className: 'headBarBtn',
                                _visible: '{{!($getSearchVisible())}}',
                                onClick: '{{$searchVisibleToogle}}',
                                children: "{{'搜索'}}"
                            }, {
                                name: 'topSearchDiv',
                                component: '::div',
                                className: '{{data.animation1 == "in" ? "ttk-edf-app-portal-search-container animated slideInRight" : "ttk-edf-app-portal-search-container animated fadeOutRight"}}',
                                onAnimationEnd: "{{$animationEnd2}}",
                                style: { display: '{{data.showSearch}}' },
                                children: [{
                                    name: 'coverShadeDiv',
                                    component: '::div',
                                    className: 'ttk-edf-app-portal-search-shade',
                                    onClick: '{{$hideSearch}}'
                                }, {
                                    name: 'topSearchInput',
                                    component: 'Input.Search',
                                    datasign: 'searchInput',
                                    id: 'ttk-edf-app-portal-search-id',
                                    className: 'ttk-edf-app-portal-search-container',
                                    placeholder: "{{'搜索'}}"
                                }]
                            }]
                        }]
                    }
                ]
            }, {
                name: 'content',
                component: 'Layout',
                className: 'ttk-edf-app-portal-content',
                // componentDidMount: '{{$resize()}}',
                trigger: 'click',
                children: [{
                    name: 'left',
                    component: 'Layout',
                    style: "{{data.width ? {width: '200px'}	: {width: '100px'}}}",
                    className: 'ttk-edf-app-portal-content-left',
                    _visible: '{{data.isShowMenu}}',
                    trigger: 'click',
                    children: [{
                        name: 'leftMenu',
                        component: 'Layout',
                        children: [{
                            name: 'menu',
                            component: 'Menu',
                            mode: 'vertical',
                            theme: 'light',
                            trigger: 'click',
                            selectedKeys: "{{$getMenuSelectKeys()}}",
                            defaultOpenKeys: "{{data.menuDefaultOpenKeys}}",
                            getPopupContainer: '{{function(){return document.querySelector("#box")}}}',
                            onClick: '{{$menuClick}}',
                            children: '{{$getMenuChildren()}}'
                        }]
                    }, {
                        name: 'switch',
                        component: '::div',
                        className: 'menu-switch',
                        onClick: '{{$switchMenu}}',
                        children: [{
                            name: 'item',
                            component: 'Icon',
                            fontFamily: 'edficon',
                            style: { fontSize: '22px' },
                            type: "{{data.width ? 'zuo' : 'you'}}"
                        }]
                    }]
                }, {
                    name: 'layContent',
                    className: "{{data.isTabsStyle ?'':'ttk-edf-app-portal-content-noTabMarginStyle'}}",
                    component: 'Layout',
                    children: [{
                        name: 'tabs',
                        component: 'Tabs',
                        className: "{{data.openTabs.length >= 2 ? 'showLast ttk-edf-app-portal-content-tabs  ': 'hideLast ttk-edf-app-portal-content-tabs'}}",
                        style: '{{$isDevMode() ? {paddingRight: "100px"} : {paddingRight: "10px"}}}',
                        type: 'card',
                        type: "editable-card",
                        hideAdd: true,
                        activeKey: '{{data.content && data.content.name}}',
                        onChange: '{{$tabChange}}',
                        onEdit: '{{$tabEdit}}',
                        _visible: '{{ data.isTabsStyle && data.openTabs && data.openTabs.length > 0}}',
                        children: [{
                            name: 'tab1',
                            component: 'Tabs.TabPane',
                            closable: '{{data.openTabs[_rowIndex].name !== "我的桌面"}}',
                            key: '{{data.openTabs[_rowIndex].name}}',
                            tab: '{{data.openTabs[_rowIndex].name}}',
                            _power: 'for in data.openTabs'
                        }, {
                            name: 'more',
                            component: 'Tabs.TabPane',
                            closable: false,
                            key: 'more',
                            tab: {
                                name: 'arrowdown',
                                component: 'Dropdown',
                                trigger: 'click',
                                overlay: {
                                    name: 'menu',
                                    component: 'Menu',
                                    onClick: '{{$closeTabs}}',
                                    children: [{
                                        name: 'tempt',
                                        component: 'Menu.Item',
                                        key: 'current',
                                        children: '关闭当前'
                                    }, {
                                        name: 'import',
                                        component: 'Menu.Item',
                                        key: 'all',
                                        children: '关闭所有'
                                    }]
                                },
                                children: {
                                    name: 'icon',
                                    component: 'Icon',
                                    fontFamily: 'edficon',
                                    style: { fontSize: '20px' },
                                    type: 'xia'
                                }
                            }
                        }],
                        // tabBarExtraContent: {
                        //     name: 'arrowdown',
                        //     component: 'Dropdown',
                        //     _visible: '{{data.openTabs.length > 1}}',
                        //     trigger: 'click',
                        //     overlay: {
                        //         name: 'menu',
                        //         component: 'Menu',
                        //         onClick: '{{$closeTabs}}',
                        //         children: [{
                        //             name: 'tempt',
                        //             component: 'Menu.Item',
                        //             key: 'current',
                        //             children: '关闭当前'
                        //         }, {
                        //             name: 'import',
                        //             component: 'Menu.Item',
                        //             key: 'all',
                        //             children: '关闭所有'
                        //         }]
                        //     },
                        //     children: {
                        //         name: 'icon',
                        //         component: 'Icon',
                        //         type: 'down'
                        //     }
                        // }
                    }, {
                        name: 'main',
                        component: 'Layout',
                        className: 'ttk-edf-app-portal-content-main',
                        _visible: '{{!!(data.content && data.content.appName)}}',
                        children: {
                            name: 'app',
                            component: 'AppLoader',
                            appName: '{{ data.openTabs && data.openTabs.length > 0 && data.openTabs[_rowIndex].appName }}',
                            onPortalReload: '{{$load}}',
                            setPortalContent: '{{$setContent}}',
                            editing: "{{$editing}}",
                            updateOrgList: '{{$getOrgs}}',
                            hideHead: "{{function(){$setField('data.headCtrl', false)}}}",
                            reInitContent: "{{$reInitContent}}",
                            '...': '{{data.openTabs && data.openTabs.length > 0 && data.openTabs[_rowIndex].appProps}}',
                            isTabStyle: '{{data.isTabsStyle}}',
                            _notRender: '{{ !(data.content && data.content.name == data.openTabs[_rowIndex].name) }}',
                            _power: 'for in data.openTabs',
                        }
                    }]
                }]
            }, {
                name: 'panel',
                className: 'ttk-edf-app-portal-content-configPanel',
                component: '::div',
                style: { display: "{{data.showControlPanel}}" },
                children: [{
                    name: 'shade',
                    className: 'ttk-edf-app-portal-content-configPanel-shade',
                    component: '::div',
                    onClick: '{{function(){$hideCtrlPanel("cancel")}}}'
                }, {
                    name: 'container',
                    component: '::div',
                    className: '{{data.panelAnimation == "in" ? "ttk-edf-app-portal-content-configPanel-container animated slideInRight" : "ttk-edf-app-portal-content-configPanel-container animated slideOutRight"}}',
                    onAnimationEnd: "{{$hidePanelEnd}}",
                    children: [{
                        name: 'title',
                        component: '::div',
                        className: 'ttk-edf-app-portal-content-configPanel-title',
                        children: [{
                            name: 'icon',
                            component: 'Icon',
                            fontFamily: 'edficon',
                            type: 'peizhishouye'
                        }, {
                            name: 'text',
                            component: '::span',
                            children: '页面个性化设置'
                        }]
                    }, {
                        name: 'main',
                        className: 'ttk-edf-app-portal-content-configPanel-main',
                        component: '::div',
                        children: [{
                            name: 'gl',
                            component: '::div',
                            children: [{
                                name: 'options',
                                className: 'ttk-edf-app-portal-content-configPanel-main-options',
                                component: 'AppLoader',
                                appName: 'ttk-edf-app-pagestyle',
                                appIndex: 1
                            }]
                        }]
                    }, {
                        name: 'btns',
                        className: 'ttk-edf-app-portal-content-configPanel-btns',
                        component: '::div',
                        style: { position: 'relative', height: '80px' },
                        children: {
                            name: 'container',
                            component: '::div',
                            style: { position: 'absolute', left: '50%', transform: 'translateX(-50%)' },
                            children: [{
                                name: 'btn1',
                                component: 'Button',
                                style: { width: '70px', height: '30px' },
                                type: 'primary',
                                children: '确定',
                                onClick: '{{function(){$hideCtrlPanel("save")}}}'
                            }, {
                                name: 'btn2',
                                component: 'Button',
                                style: { width: '70px', height: '30px' },
                                children: '取消',
                                onClick: '{{function(){$hideCtrlPanel("cancel")}}}'
                            }]
                        }
                    }]
                }]
            }, {
                name: 'starConversation',
                id: 'starConversation',
                component: 'Movable',
                isStopX: true
            }, {
                name: 'imchat',
                component: 'AppLoader',
                appName: 'ttk-edf-app-im',
                groupNo: '10341037',
                eno: 'anyone',
                thirdPartySession: '123'
            }]
    }
}

export function getInitState() {
    let width = window.innerWidth > 1024 ? true : false;
    return {
        data: {
            // manageList: [],
            menu: [],
            // colors: [{color:'#FF913A',tip: '活力橙'}, {color:'#00B38A',tip:'荷叶绿'}, {color:'#416AAA',tip:'商务蓝'},{color:'#1EB5AD',tip:'薄荷蓝'}, {color:'#B4A074',tip:'淡雅棕'}, {color:'#414141',tip:'经典灰'}],
            colors: [{ color: '#416AAA', tip: '商务蓝' }, { color: '#414141', tip: '经典灰' }],
            tips: ['1', '2', '3', '4', '5', '6'],
            menuSelectedKeys: [10],
            menuDefaultOpenKeys: [10],
            content: {},
            openTabs: [],
            isTabsStyle: false,
            isShowMenu: false,
            other: {},
            width: width,
            widthPersonStatus: false,
            setPopoverVisible: false,
            animation1: 'in',
            showSearch: 'none',
            animation: 'out',
            showPanel: 'none',
            visible: false,
            selectedKeys: [],
            showControlPanel: 'none',
            panelAnimation: 'out',
            headCtrl: true             //控制头部的显示
        }
    }
}
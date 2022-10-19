import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FcIcons from "react-icons/fc"
import * as SiIcons from "react-icons/si"

export const SidebarData = [
    // html5 完了
    {
        title: 'HTML5',
        path: '/HTML5',
        icon: <AiIcons.AiFillHtml5 />,
        iconClosed: <FcIcons.FcFolder/ >,
        iconOpend: <FcIcons.FcOpenedFolder/ >,
        subNav: [
            {
                title: '<Head>',
                path:'/html5/head',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<br>',
                path:'/html5/br',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<p>',
                path:'/html5/p',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<h>',
                path:'/html5/h',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<strong>',
                path:'/html5/strong',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<i>',
                path:'/html5/i',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: 'コメント',
                path:'/html5/comment',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<a>',
                path:'/html5/a',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<img>',
                path:'/html5/img',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<a> <img>',
                path:'/html5/imga',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<ol>',
                path:'/html5/ol',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<dl>',
                path:'/html5/dl',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: 'リスト',
                path:'/html5/list',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<div>',
                path:'/html5/div',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<ins>',
                path:'/html5/ins',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<pre>',
                path:'/html5/pre',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<code>',
                path:'/html5/code',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<mark>',
                path:'/html5/mark',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<ruby>',
                path:'/html5/ruby',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<table>',
                path:'/html5/table',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<table> 2',
                path:'/html5/table2',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<table> 3',
                path:'/html5/table3',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<table> 4',
                path:'/html5/table4',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<link>',
                path:'/html5/link',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<style>',
                path:'/html5/style',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<script>',
                path:'/html5/script',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<meta>',
                path:'/html5/meta',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<iframe>',
                path:'/html5/iframe',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<form>',
                path:'/html5/form',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<input>',
                path:'/html5/input',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<input> 2',
                path:'/html5/input2',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<input> 3',
                path:'/html5/input3',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<input> 4',
                path:'/html5/input4',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<fieldset>',
                path:'/html5/fieldset',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<label>',
                path:'/html5/label',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<select>',
                path:'/html5/select',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<optiongroup>',
                path:'/html5/optiongroup',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<textarea>',
                path:'/html5/textarea',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<meter>',
                path:'/html5/meter',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<vedio>',
                path:'/html5/vedio',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<audio>',
                path:'/html5/audio',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<embed>',
                path:'/html5/embed',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<object>',
                path:'/html5/object',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<canvas>',
                path:'/html5/canvas',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<map>',
                path:'/html5/map',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<section>',
                path:'/html5/section',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<address>',
                path:'/html5/address',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<blockquote>',
                path:'/html5/blockquote',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<figure>',
                path:'/html5/figure',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<small>',
                path:'/html5/small',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<abbr>',
                path:'/html5/abbr',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<sub>',
                path:'/html5/sub',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: '<samp>',
                path:'/html5/samp',
                icon: <IoIcons.IoIosPaper /> 
            },
        ]
    },
    // CSS3 着手中
    {
        title: 'CSS3',
        path: '/CSS3',
        icon: <IoIcons.IoLogoCss3 />,
        iconClosed: <FcIcons.FcFolder/ >,
        iconOpend: <FcIcons.FcOpenedFolder/ >,
        subNav: [
            {
                title: '01優先順位',
                path:'/CSS3/lesson01/Lesson01',
                icon: <RiIcons.RiCss3Line /> 
            },
            {
                title: 'Reports2',
                path:'/reports/repoets2',
                icon: <IoIcons.IoIosPaper /> 
            },
            {
                title: 'Reports3',
                path:'/reports/repoets3',
                icon: <IoIcons.IoIosPaper /> 
            }

        ]
    },
    // React 完了
    {
        title: 'React',
        path: '/React',
        icon: <FaIcons.FaReact />,
        iconClosed: <FcIcons.FcFolder/ >,
        iconOpend: <FcIcons.FcOpenedFolder/ >,
        subNav: [
            {
                title: 'Func components',
                path:'/React/funcomponents',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Class components',
                path:'/React/clacomponents',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Hello',
                path:'/React/hello',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Prpos',
                path:'/React/prpos',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'State',
                path:'/React/state',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'SetState',
                path:'/React/setstate',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Event Handling(F)',
                path:'/React/funcclick',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Event Handling(C)',
                path:'/React/classclick',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Event Handling',
                path:'/React/eventbind',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Method as props',
                path:'/React/ParentComponent',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Conditional',
                path:'/React/Conditional',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'List Render',
                path:'/React/ListRender',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'List and Key',
                path:'/React/ListKey',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Index as Key',
                path:'/React/IndexAsKey',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Stylessheet',
                path:'/React/Stylessheet',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Styles inline',
                path:'/React/Inline',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Form',
                path:'/React/Form',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Life cycle A',
                path:'/React/LifecycleA',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Fragment',
                path:'/React/FragmentDemo',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Pure Compnent',
                path:'/React/PureComp',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Refs',
                path:'/React/RefsDemo',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'forwardRef',
                path:'/React/FRParentInput',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Portals',
                path:'/React/PortalDemo',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Error Boundary',
                path:'/React/Hero',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'HOC',
                path:'/React/HOC',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Render props',
                path:'/React/HOC_props',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Context',
                path:'/React/ComponentA',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Http Get',
                path:'/React/PostList',
                icon: <RiIcons.RiReactjsLine /> 
            },
            {
                title: 'Http Post',
                path:'/React/PostForm',
                icon: <RiIcons.RiReactjsLine /> 
            },
        ]
    },
    // React Hooks 完了
    {
        title: 'React Hooks',
        path: '/home',
        icon: <RiIcons.RiReactjsLine />,
        iconClosed: <FcIcons.FcFolder/ >,
        iconOpend: <FcIcons.FcOpenedFolder/ >,
        subNav: [
            {
                title: 'useState(Class)',
                path:'/Hooks/ClassCounter',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useState',
                path:'/Hooks/HookCounter',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useState Two',
                path:'/Hooks/HookCounterTwo',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useState Three',
                path:'/Hooks/HookCounterThree',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title : 'useState Four',
                path:'/Hooks/HookCounterFour',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'Side Effect',
                path:'/Hooks/ClassCounterOne',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useEffect One',
                path:'/Hooks/HookEffectOne',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'Run effect only once(class)',
                path:'/Hooks/ClassMouse',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: '... hooks',
                path:'/Hooks/HookEffectTwo',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useEffect cleanup',
                path:'/Hooks/HookEffectThree',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useEffect Class egg',
                path:'/Hooks/IntervalClassCounter',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'dependency',
                path:'/Hooks/HookEffectFour',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'Fetching  Date',
                path:'/Hooks/HookEffectFive',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useContext',
                path:'/Hooks/ComponentContext',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useReducer1',
                path:'/Hooks/ReducerCountOne',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useReducer2',
                path:'/Hooks/ReducerCountTwo',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useReducer3',
                path:'/Hooks/ReducerCountThree',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useReducer4',
                path:'/Hooks/ReducerCountFour',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useReducer5',
                path:'/Hooks/ReducerDataFetchingOne',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useReducer6',
                path:'/Hooks/ReducerDataFetchingTwo',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useCallback',
                path:'/Hooks/Callback',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useMemo',
                path:'/Hooks/CounterUseMemo',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useRef',
                path:'/Hooks/HookRef',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'useRef Two',
                path:'/Hooks/HookRefTwo',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'Coustmer Hook1',
                path:'/Hooks/Title',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'Coustmer Hook2',
                path:'/Hooks/CounterHook',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
            {
                title: 'Coustmer Hook3',
                path:'/Hooks/FormInput',
                icon: <AiIcons.AiOutlineCodeSandbox /> 
            },
        ]
    },
    // redux 完了
    {
        title: 'Redux',
        path: '/Redux',
        icon: <SiIcons.SiRedux />,
        iconClosed: <FcIcons.FcFolder/ >,
        iconOpend: <FcIcons.FcOpenedFolder/ >,
        subNav: [
            {
                title: 'Redux connect',
                path:'/pages/Redux/cake/CakeContainer',
                icon: <SiIcons.SiRedux /> 
            },
            {
                title: 'useSelector/useDispatch',
                path:'/pages/Redux/cake/HooksCakeContainer',
                icon: <SiIcons.SiRedux /> 
            },
            {
                title: 'async action',
                path:'/pages/Redux/users/UserContainer',
                icon: <SiIcons.SiRedux /> 
            }

        ]
    },
    // Fromik 着手中
    {
        title: 'Formik',
        path: '/Formik',
        icon: <FaIcons.FaWpforms/>,
        iconClosed: <FcIcons.FcFolder/ >,
        iconOpend: <FcIcons.FcOpenedFolder/ >,
        subNav: [
            {
                title: 'Simple',
                path:'/Formik/Simple',
                icon: <AiIcons.AiOutlineForm /> 
            },
            {
                title: 'FormControl',
                path:'/Formik/FormikContainer',
                icon: <AiIcons.AiOutlineForm /> 
            },
            {
                title: 'Login Form',
                path:'/Formik/LoginForm',
                icon: <AiIcons.AiOutlineForm /> 
            },

        ]
    },
]
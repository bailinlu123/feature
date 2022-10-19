import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Sidebar from "./components/Sidebar";
// import Sidebar from './sidebar';

// nav bar
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

// sidebar

// HTML5
import H5HeadBody from "./pages/HTML5/headAndBody";
import H5br from "./pages/HTML5/br";
import H5P from "./pages/HTML5/p";
import H5H from "./pages/HTML5/h";
import H5Strong from "./pages/HTML5/strong";
import H5I from "./pages/HTML5/i";
import H5Comment from "./pages/HTML5/comment";
import H5A from "./pages/HTML5/a";
import H5Img from "./pages/HTML5/img";
import H5ImgA from "./pages/HTML5/imga";
import H5Ol from "./pages/HTML5/ol";
import H5Dl from "./pages/HTML5/dl";
import H5List from "./pages/HTML5/list";
import H5Div from "./pages/HTML5/div";
import H5Ins from "./pages/HTML5/ins";
import H5Pre from "./pages/HTML5/pre";
import H5Code from "./pages/HTML5/code";
import H5Mark from "./pages/HTML5/mark";
import H5Ruby from "./pages/HTML5/ruby";
import H5Table from "./pages/HTML5/table";
import H5Table2 from "./pages/HTML5/table2";
import H5Table3 from "./pages/HTML5/table3";
import H5Table4 from "./pages/HTML5/table4";
import H5Link from "./pages/HTML5/link";
import H5Style from "./pages/HTML5/style";
import H5Script from "./pages/HTML5/script";
import H5Meta from "./pages/HTML5/meta";
import H5Iframe from "./pages/HTML5/iframe";
import H5Form from "./pages/HTML5/form";
import H5Input from "./pages/HTML5/input";
import H5Input2 from "./pages/HTML5/input2";
import H5Input3 from "./pages/HTML5/input3";
import H5Input4 from "./pages/HTML5/input4";
import H5Fieldset from "./pages/HTML5/fieldset";
import H5Select from "./pages/HTML5/select";
import H5Label from "./pages/HTML5/label";
import H5Optiongroup from "./pages/HTML5/optiongroup";
import H5Textarea from "./pages/HTML5/textarea";
import H5Meter from "./pages/HTML5/meter";
import H5Vedio from "./pages/HTML5/vedio";
import H5Audio from "./pages/HTML5/audio";
import H5Embed from "./pages/HTML5/embed";
import H5Object from "./pages/HTML5/object";
import H5Canvas from "./pages/HTML5/canvas";
import H5Map from "./pages/HTML5/map";
import H5Section from "./pages/HTML5/section";
import H5Address from "./pages/HTML5/address";
import H5Blockquote from "./pages/HTML5/blockquote";
import H5Figure from "./pages/HTML5/figure";
import H5Small from "./pages/HTML5/small";
import H5Abbr from "./pages/HTML5/abbr";
import H5Sub from "./pages/HTML5/sub";
import H5Samp from "./pages/HTML5/samp";

// React
import { Greet } from "./pages/React/funcomponents";
import GreetCla from "./pages/React/clacomponents";
import Hello from "./pages/React/hello";
import HelloPrpos from "./pages/React/prpos";
import State from "./pages/React/state";
import Counter from "./pages/React/setstate";
import Funcclick from "./pages/React/funcclick";
import ClassClick from "./pages/React/classclick";
import EventBind from "./pages/React/eventbind";
import ParentComponent from "./pages/React/ParentComponent";
import Conditional from "./pages/React/Conditional";
import ListRender from "./pages/React/ListRender";
import ListKey from "./pages/React/ListKey";
import IndexAsKey from "./pages/React/IndexAsKey";
import Stylessheet from "./pages/React/Stylessheet";
import Inline from "./pages/React/Inline";
import Form from "./pages/React/Form";
import LifecycleA from "./pages/React/LifecycleA";
import FragmentDemo from "./pages/React/FragmentDemo";
import PureComp from "./pages/React/PureComp";
import RefsDemo from "./pages/React/RefsDemo";
import FRParentInput from "./pages/React/FRParentInput";
import PortalDemo from "./pages/React/PortalDemo";
import Hero from "./pages/React/Hero";
import ErrorBoundary from "./pages/React/ErrorBoundary";
import HOC from "./pages/React/HOC";
import HOC_props from "./pages/React/HOC_props";
import ComponentA from "./pages/React/ComponentA";
import PostList from "./pages/React/PostList";
import PostForm from "./pages/React/PostForm";

// React Hooks
import ClassCounter from "./pages/Hooks/ClassCounter";
import HookCounter from "./pages/Hooks/HookCounter";
import HookCounterTwo from "./pages/Hooks/HookCounterTwo";
import HookCounterThree from "./pages/Hooks/HookCounterThree";
import HookCounterFour from "./pages/Hooks/HookCounterFour";
import ClassCounterOne from "./pages/Hooks/ClassCounterOne";
import HookEffectOne from "./pages/Hooks/HookEffectOne";
import ClassMouse from "./pages/Hooks/ClassMouse";
import HookEffectTwo from "./pages/Hooks/HookEffectTwo";
import HookEffectThree from "./pages/Hooks/HookEffectThree";
import IntervalClassCounter from "./pages/Hooks/IntervalClassCounter";
import HookEffectFour from "./pages/Hooks/HookEffecctFour";
import HookEffectFive from "./pages/Hooks/HookEffectFive";
import ComponentContext from "./pages/Hooks/ComponentContext";
import ReducerCountOne from "./pages/Hooks/ReducerCountOne";
import ReducerCountTwo from "./pages/Hooks/ReducerCountTwo";
import ReducerCountThree from "./pages/Hooks/ReducerCountThree";
import ReducerCountFour from "./pages/Hooks/ReducerCountFour";
import ReducerDataFetchingOne from "./pages/Hooks/ReducerDataFetchingOne";
import ReducerDataFetchingTwo from "./pages/Hooks/ReducerDataFetchingTwo";
import Callback from "./pages/Hooks/Callback";
import CounterUseMemo from "./pages/Hooks/CounterUseMemo";
import HookRef from "./pages/Hooks/HookRef";
import HookRefTwo from "./pages/Hooks/HookRefTwo";
import Title from "./pages/Hooks/Title";
import FormInput from "./pages/Hooks/FormInput";
import CounterHook from "./pages/Hooks/CounterHook";

// Redux
import CakeContainer from "./pages/Redux/cake/CakeContainer";
import HooksCakeContainer from "./pages/Redux/cake/HooksCakeContainer";
import UserContainer from "./pages/Redux/users/UserContainer";

// CSS3
import CSS3 from "./pages/CSS3/CSS3";
import Lesson01 from "./pages/CSS3/lesson01/Lesson01";

// formik
import Simple from "./pages/Formik/Simple";
import FormikContainer from "./pages/Formik/FormikContainer";
import LoginForm from "./pages/Formik/LoginForm";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Web
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to={"/home"}
                className={true ? "nav-link" : "nav-link active"}
              >
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
      </div>
      {currentUser && (
        <div className="row">
          <div id="sidebars"> {<Sidebar />} </div>
          <div id="main" className="fill pt-2 pl-2">
            <Switch>
              {/* nan bar */}
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />

              {/* side bar */}
              {/* Formik */}
              <Route path="/Formik/Simple" component={Simple} />
              <Route
                path="/Formik/FormikContainer"
                component={FormikContainer}
              />
              <Route path="/Formik/LoginForm" component={LoginForm} />

              {/* CSS3 */}
              <Route exact path="/CSS3" component={CSS3} />
              <Route
                exact
                path="/CSS3/lesson01/Lesson01"
                component={Lesson01}
              />

              {/* Redux */}
              <Route exact path="/Redux" component={CSS3} />
              <Route
                exact
                path="/pages/Redux/cake/CakeContainer"
                component={CakeContainer}
              />
              <Route
                exact
                path="/pages/Redux/cake/HooksCakeContainer"
                component={HooksCakeContainer}
              />
              <Route
                exact
                path="/pages/Redux/users/UserContainer"
                component={UserContainer}
              />

              {/* React Hooks */}
              <Route
                exact
                path="/Hooks/ClassCounter"
                component={ClassCounter}
              />
              <Route exact path="/Hooks/HookCounter" component={HookCounter} />
              <Route
                exact
                path="/Hooks/HookCounterTwo"
                component={HookCounterTwo}
              />
              <Route
                exact
                path="/Hooks/HookCounterThree"
                component={HookCounterThree}
              />
              <Route
                exact
                path="/Hooks/HookCounterFour"
                component={HookCounterFour}
              />
              <Route
                exact
                path="/Hooks/ClassCounterOne"
                component={ClassCounterOne}
              />
              <Route
                exact
                path="/Hooks/HookEffectOne"
                component={HookEffectOne}
              />
              <Route exact path="/Hooks/ClassMouse" component={ClassMouse} />
              <Route
                exact
                path="/Hooks/HookEffectTwo"
                component={HookEffectTwo}
              />
              <Route
                exact
                path="/Hooks/HookEffectThree"
                component={HookEffectThree}
              />
              <Route
                exact
                path="/Hooks/IntervalClassCounter"
                component={IntervalClassCounter}
              />
              <Route
                exact
                path="/Hooks/HookEffectFour"
                component={HookEffectFour}
              />
              <Route
                exact
                path="/Hooks/HookEffectFive"
                component={HookEffectFive}
              />
              <Route
                exact
                path="/Hooks/ComponentContext"
                component={ComponentContext}
              />
              <Route
                exact
                path="/Hooks/ReducerCountOne"
                component={ReducerCountOne}
              />
              <Route
                exact
                path="/Hooks/ReducerCountTwo"
                component={ReducerCountTwo}
              />
              <Route
                exact
                path="/Hooks/ReducerCountThree"
                component={ReducerCountThree}
              />
              <Route
                exact
                path="/Hooks/ReducerCountFour"
                component={ReducerCountFour}
              />
              <Route
                exact
                path="/Hooks/ReducerDataFetchingOne"
                component={ReducerDataFetchingOne}
              />
              <Route
                exact
                path="/Hooks/ReducerDataFetchingTwo"
                component={ReducerDataFetchingTwo}
              />
              <Route exact path="/Hooks/Callback" component={Callback} />
              <Route
                exact
                path="/Hooks/CounterUseMemo"
                component={CounterUseMemo}
              />
              <Route exact path="/Hooks/HookRef" component={HookRef} />
              <Route exact path="/Hooks/HookRefTwo" component={HookRefTwo} />
              <Route exact path="/Hooks/Title" component={Title} />
              <Route exact path="/Hooks/FormInput" component={FormInput} />
              <Route exact path="/Hooks/CounterHook" component={CounterHook} />

              {/* React */}
              <Route exact path="/React" component={Home} />
              <Route exact path="/React/funcomponents" component={Greet} />
              <Route exact path="/React/clacomponents" component={GreetCla} />
              <Route exact path="/React/hello" component={Hello} />
              <Route exact path="/React/prpos">
                <HelloPrpos name="Bruce" age="18">
                  <p> This is children prpos</p>
                </HelloPrpos>
                <HelloPrpos name="Mike" age="20" />
                <HelloPrpos name="Kobe" age="40" />
              </Route>
              <Route exact path="/React/state" component={State} />
              <Route exact path="/React/setstate" component={Counter} />
              <Route exact path="/React/funcclick" component={Funcclick} />
              <Route exact path="/React/classclick" component={ClassClick} />
              <Route exact path="/React/eventbind" component={EventBind} />
              <Route
                exact
                path="/React/ParentComponent"
                component={ParentComponent}
              />
              <Route exact path="/React/Conditional" component={Conditional} />
              <Route exact path="/React/ListRender" component={ListRender} />
              <Route exact path="/React/ListKey" component={ListKey} />
              <Route exact path="/React/IndexAsKey" component={IndexAsKey} />
              <Route exact path="/React/Stylessheet">
                <Stylessheet primary={false} />
              </Route>
              <Route exact path="/React/Inline" component={Inline} />
              <Route exact path="/React/Form" component={Form} />
              <Route exact path="/React/LifecycleA" component={LifecycleA} />
              <Route
                exact
                path="/React/FragmentDemo"
                component={FragmentDemo}
              />
              <Route exact path="/React/PureComp" component={PureComp} />
              <Route exact path="/React/RefsDemo" component={RefsDemo} />
              <Route
                exact
                path="/React/FRParentInput"
                component={FRParentInput}
              />
              <Route exact path="/React/PortalDemo" component={PortalDemo} />
              <Route exact path="/React/HOC" component={HOC} />
              <Route exact path="/React/HOC_props" component={HOC_props} />
              <Route exact path="/React/Hero">
                <ErrorBoundary>
                  <Hero name="Mike"></Hero>
                </ErrorBoundary>
                <ErrorBoundary>
                  <Hero name="Kobe"></Hero>
                </ErrorBoundary>
                <ErrorBoundary>
                  <Hero name="haku"></Hero>
                </ErrorBoundary>
              </Route>
              <Route exact path="/React/ComponentA" component={ComponentA} />
              <Route exact path="/React/PostList" component={PostList} />
              <Route exact path="/React/PostForm" component={PostForm} />

              {/* HTML5 */}
              <Route exact path="/html5/head" component={H5HeadBody} />
              <Route exact path="/html5/br" component={H5br} />
              <Route exact path="/html5/p" component={H5P} />
              <Route exact path="/html5/h" component={H5H} />
              <Route exact path="/html5/strong" component={H5Strong} />
              <Route exact path="/html5/i" component={H5I} />
              <Route exact path="/html5/comment" component={H5Comment} />
              <Route exact path="/html5/a" component={H5A} />
              <Route exact path="/html5/img" component={H5Img} />
              <Route exact path="/html5/imga" component={H5ImgA} />
              <Route exact path="/html5/ol" component={H5Ol} />
              <Route exact path="/html5/dl" component={H5Dl} />
              <Route exact path="/html5/list" component={H5List} />
              <Route exact path="/html5/div" component={H5Div} />
              <Route exact path="/html5/ins" component={H5Ins} />
              <Route exact path="/html5/pre" component={H5Pre} />
              <Route exact path="/html5/code" component={H5Code} />
              <Route exact path="/html5/mark" component={H5Mark} />
              <Route exact path="/html5/ruby" component={H5Ruby} />
              <Route exact path="/html5/table" component={H5Table} />
              <Route exact path="/html5/table2" component={H5Table2} />
              <Route exact path="/html5/table3" component={H5Table3} />
              <Route exact path="/html5/table4" component={H5Table4} />
              <Route exact path="/html5/link" component={H5Link} />
              <Route exact path="/html5/style" component={H5Style} />
              <Route exact path="/html5/script" component={H5Script} />
              <Route exact path="/html5/meta" component={H5Meta} />
              <Route exact path="/html5/iframe" component={H5Iframe} />
              <Route exact path="/html5/form" component={H5Form} />
              <Route exact path="/html5/input" component={H5Input} />
              <Route exact path="/html5/input2" component={H5Input2} />
              <Route exact path="/html5/input3" component={H5Input3} />
              <Route exact path="/html5/input4" component={H5Input4} />
              <Route exact path="/html5/fieldset" component={H5Fieldset} />
              <Route exact path="/html5/label" component={H5Label} />
              <Route exact path="/html5/select" component={H5Select} />
              <Route
                exact
                path="/html5/optiongroup"
                component={H5Optiongroup}
              />
              <Route exact path="/html5/textarea" component={H5Textarea} />
              <Route exact path="/html5/meter" component={H5Meter} />
              <Route exact path="/html5/vedio" component={H5Vedio} />
              <Route exact path="/html5/audio" component={H5Audio} />
              <Route exact path="/html5/embed" component={H5Embed} />
              <Route exact path="/html5/object" component={H5Object} />
              <Route exact path="/html5/canvas" component={H5Canvas} />
              <Route exact path="/html5/map" component={H5Map} />
              <Route exact path="/html5/section" component={H5Section} />
              <Route exact path="/html5/address" component={H5Address} />
              <Route exact path="/html5/blockquote" component={H5Blockquote} />
              <Route exact path="/html5/figure" component={H5Figure} />
              <Route exact path="/html5/small" component={H5Small} />
              <Route exact path="/html5/abbr" component={H5Abbr} />
              <Route exact path="/html5/samp" component={H5Samp} />
            </Switch>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;

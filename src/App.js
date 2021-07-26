import Home from "./components/Home/home";
import { Switch, Route } from "react-router-dom";
import Courses from "./components/Courses/courses";
import Admin from "./components/Admin/admin";
import useScript from "./hooks/useScript";
import Login from "./components/Login/login";
import Signup from "./components/Login/signup";
import Blog from "./components/Blog/blog";
import StudentCourse from "./components/StudentCourse/StudentCourse";
import About from "./components/AboutUs/about";
import Contact from "./components/ContactUs/contact";
import Career from "./components/Careers/career";

const MyComponent = (props) => {
  useScript("https://use.typekit.net/foobar.js");
  useScript("vendor/jquery.min.js");
  useScript("vendor/popper.min.js");
  useScript("vendor/bootstrap.min.js");
  useScript("vendor/perfect-scrollbar.min.js");
  useScript("vendor/dom-factory.js");
  useScript("vendor/material-design-kit.js");
  useScript("js/app.js");
  useScript("js/preloader.js");
  useScript("js/settings.js");
  useScript("vendor/moment.min.js");
  useScript("vendor/moment-range.js");
  useScript("vendor/Chart.min.js");
  useScript("js/chartjs-rounded-bar.js");
  useScript("js/chartjs.js");
  useScript("js/page.instructor-dashboard.js");
  useScript("vendor/list.min.js");
  useScript("js/list.js");
};

function App() {
  return (
    <>
      <Switch>
        <Route path="/courses" component={Courses}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/career" component={Career}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        <Route exact path="/studentCourse" component={StudentCourse}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      {MyComponent()}
    </>
  );
}

export default App;
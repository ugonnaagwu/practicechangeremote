import React from "react";
import "./App.css";
import MenuButton from "./menu/MenuButton";
import Menu from "./menu/Menu";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import SettingsPage from "./pages/SettingsPage";

export interface MenuContainerProps {
  menuVisible: boolean;
  toggleMenu: (visible: boolean) => void;
}

class App extends React.Component<MenuContainerProps> {
  constructor(props: MenuContainerProps) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MenuButton handleMouseDown={this.handleMouseDown} />
          <Menu
            handleMouseDown={this.handleMouseDown}
            menuVisibility={this.props.menuVisible}
          />
          <div className="content">
            <Route exact path="/" component={HomePage} />
            <Route path="/products" component={ProductPage} />
            <Route path="/accessories" component={AccessoriesPage} />
            <Route path="/settings" component={SettingsPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }

  handleMouseDown(e: MouseEvent) {
    this.props.toggleMenu(this.props.menuVisible);
    e.stopPropagation();
  }
}

export default App;

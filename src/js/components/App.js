import React from "react";
import AppBar from "material-ui/AppBar"
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';

import Header from "./Header";

const style = {
  border: "3px solid black",
  color: "white"
};

const RightMenu = (props) => (
  <IconMenu
     iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
     targetOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
     <MenuItem primaryText="Send feedback" />
     <MenuItem primaryText="Settings" />
     <MenuItem primaryText="Help" onTouchTap={() => {alert('you clicked help');}} />
     <MenuItem primaryText="Sign out" />
  </IconMenu>
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap(event) {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <AppBar
          title="Title"
          iconElementRight={<RightMenu />}
          onLeftIconButtonTouchTap={this.handleTouchTap}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Link1" />
            <MenuItem primaryText="Link 2" />
            <MenuItem primaryText="Link 3" />
          </Menu>
        </Popover>
      </div>
    );
  }

}
export default App;


// onRightIconButtonTouchTap={() => {alert("bavi");}}

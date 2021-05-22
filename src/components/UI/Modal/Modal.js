import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import React, { Component } from "react";

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.show === nextProps.show &&
    prevProps.children === nextProps.children
  );
};

class Modal extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.show !== this.props.show;
  // }

  componentDidUpdate() {
    // console.log("[Modal]: Updated");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default React.memo(Modal, areEqual);
// export default Modal;

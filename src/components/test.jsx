// Button отримує функцію changeMessage (ім'я пропа),

const { Component } = require("react");
import { Button } from './button';
 // яка викликається під час події onClick


export class ButtonTest extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод, який будемо передавати в Button для виклику під час кліку
  updateMessage = evt => {
    console.log(evt); // Доступний об'єкт події
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}
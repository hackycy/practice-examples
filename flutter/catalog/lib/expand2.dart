import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
        title: Text(
          'Expanded',
          textDirection: TextDirection.ltr,
        ),
      ),body: Main(),
      ),
    );
  }

}

class Main extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
        // mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          IconContainer(Icons.home, color: Colors.pink),
          Expanded(child: IconContainer(Icons.settings, color: Colors.yellow), flex: 1,),
          // Expanded(child: IconContainer(Icons.usb, color: Colors.purple), flex: 2,),
        ],
      );
  }
}

class IconContainer extends StatelessWidget {

  double size = 32.0;
  Color color;
  IconData icon;

  IconContainer(this.icon, {this.color = Colors.red, this.size});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100.0,
      height: 100.0,
      color: this.color,
      child: Center(
        child: Icon(
          this.icon,
          size: this.size,
          color: Colors.white,
        ),
      ),
    );
  }
}
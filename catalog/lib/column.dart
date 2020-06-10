import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
        title: Text(
          'Row',
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
    return Container(
      decoration: BoxDecoration(
        border: Border.all(
          color: Colors.blue,
          width: 3.0
        )
      ),
      child: Column(
        // mainAxisAlignment: MainAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly, //主轴
        crossAxisAlignment: CrossAxisAlignment.center,// 次轴
        children: <Widget>[
          IconContainer(Icons.home, color: Colors.pink),
          IconContainer(Icons.settings, color: Colors.yellow),
          IconContainer(Icons.usb, color: Colors.purple),
        ],
      ),
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
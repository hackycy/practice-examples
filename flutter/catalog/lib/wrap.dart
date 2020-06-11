import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
        title: Text(
          'Wrap',
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
    return Center(
      child: Container(
        width: 300.0,
        height: 300.0,
        child: Wrap(
          spacing: 10.0,
          direction: Axis.horizontal,
          runSpacing: 10.0,
          runAlignment: WrapAlignment.center,
          alignment: WrapAlignment.spaceEvenly,
          children: <Widget>[
            MyButton('第1集 - 残缺'),
            MyButton('第2集'),
            MyButton('第3集'),
            MyButton('第4集'),
            MyButton('第5集'),
            MyButton('第6集 - 残缺'),
            MyButton('第7集'),
            MyButton('第8集'),
          ],
        ),
        decoration: BoxDecoration(
          color: Colors.yellow,
          border: Border.all(
            color: Colors.blue,
            width: 2.0,
          )
        ),
      ),
    );
  }
}

class MyButton extends StatelessWidget {

  String text;

  MyButton(this.text);

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      child: Text(this.text),
      textColor: Theme.of(context).accentColor,
      onPressed: () {

      },
    );
  }

  

}
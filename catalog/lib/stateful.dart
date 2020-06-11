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
        ),
        body: Main(),
      ),
    );
  }
}

class Main extends StatefulWidget {

  MainState createState() => MainState();

}

class MainState extends State<Main> {
  List<String> list = new List();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: <Widget>[
          RaisedButton(
            child: Text('新增'),
            onPressed: () {
              setState(() {
                list.add('新增第${this.list.length + 1}项');
              });
            },
          ),
          Container(
            width: 300.0,
            height: 300.0,
            child: ListView(
              children: list.map((e) {
                return ListTile(
                  title: Text(e),
                );
              }).toList(),
            ),
            decoration: BoxDecoration(
                color: Colors.yellow,
                border: Border.all(
                  color: Colors.blue,
                  width: 2.0,
                )),
          ),
        ],
      ),
    );
  }
}

class MyButton extends StatelessWidget {
  
  final String text;
  final VoidCallback callback;

  MyButton(this.text, {this.callback});

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

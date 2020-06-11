import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {

  _HomePageState createState() => _HomePageState();

}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('首页'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('跳转搜索页面'),
          onPressed: () {
            Navigator.pushNamed(context, '/search');
          },
        ),
      ),
    );
  }

}
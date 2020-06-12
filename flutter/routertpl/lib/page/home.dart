import 'package:flutter/material.dart';

import 'detail.dart';

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
        child: Container(
          width: 300.0,
          height: 400.0,
          decoration: BoxDecoration(
            border: Border.all(
              color: Colors.blue,
            )
          ),
          child: Column(
            children: <Widget>[
              RaisedButton(
                child: Text('跳转搜索页面'),
                onPressed: () {
                  Navigator.pushNamed(context, '/search');
                },
              ),
              RaisedButton(
                child: Text('跳转详情页面'),
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (BuildContext context) => DetailPage()));
                },
              )
            ],
          ),
        ),
      ),
    );
  }
}

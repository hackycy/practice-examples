import 'package:flutter/material.dart';

class SearchPage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('搜索页面'),
      ),
      body: ListView(
        children: <Widget>[
          ListTile(
            title: Text('搜索数据1'),
          ),
          ListTile(
            title: Text('搜索数据2'),
          ),
          ListTile(
            title: Text('搜索数据3'),
          )
        ],
      ),
    );
  }

}
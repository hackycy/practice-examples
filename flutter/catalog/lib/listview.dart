import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
        title: Text(
          'ListView',
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
    return ListView(
      padding: EdgeInsets.all(2),
      children: <Widget>[

        ListTile(
          leading: Icon(
            Icons.home,
            size: 40,
            color: Colors.yellow,
          ),
          title: Text(
            '英雄联盟',
            style: TextStyle(
              fontStyle: FontStyle.italic,
              fontWeight: FontWeight.bold,
            ),
          ),
          subtitle: Text('UZI退役了'),
        ),

        ListTile(
          leading: Image.network('https://images.pexels.com/photos/4561540/pexels-photo-4561540.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
          title: Text('CFPL'),
          subtitle: Text('我不知道发生了什么'),
        ),

        ListTile(
          title: Text('QQ飞车'),
          subtitle: Text('S多少赛季开始了'),
          trailing: Icon(Icons.settings),
        ),

        ListTile(
          leading: Image.network('https://images.pexels.com/photos/4561540/pexels-photo-4561540.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
          title: Text('CFPL'),
          subtitle: Text('我不知道发生了什么'),
          trailing: Image.network('https://images.pexels.com/photos/4262185/pexels-photo-4262185.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
        ),

      ],
    );
  }

}
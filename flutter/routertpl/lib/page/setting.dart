import 'package:flutter/material.dart';

class SettingPage extends StatefulWidget {

  _SettingPageState createState() => _SettingPageState();

}

class _SettingPageState extends State<SettingPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('设置'),
      ),
      body: ListView(
        children: <Widget>[
          ListTile(
            title: Text('AppBar'),
            onTap: () {
              Navigator.pushNamed(context, '/setting/appbar');
            },
          ),
        ],
      ),
    );
  }

}
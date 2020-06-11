import 'package:flutter/material.dart';
import 'package:routertpl/page/classfy.dart';
import 'package:routertpl/page/home.dart';
import 'package:routertpl/page/setting.dart';

class MainTabs extends StatefulWidget {

  final int selectedIndex;

  MainTabs({this.selectedIndex = 0});

  @override
  _MainTabsState createState() => _MainTabsState(this.selectedIndex);

}

class _MainTabsState extends State<MainTabs> {

  int _selectedIndex;

  _MainTabsState(this._selectedIndex);

  List<Widget> list = [HomePage(), ClassfyPage(), SettingPage()];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: list[this._selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: this._selectedIndex,
        onTap: (int index) {
          setState(() {
            this._selectedIndex = index;
          });
        },
        type: BottomNavigationBarType.fixed,
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text('首页'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.category),
            title: Text('分类'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            title: Text('设置'),
          ),
        ],
      ),
    );
  }

}
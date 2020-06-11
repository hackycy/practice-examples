import 'package:flutter/material.dart';


import '../page/main_tabs.dart';
import '../page/classfy.dart';
import '../page/home.dart';
import '../page/setting.dart';
import '../page/search.dart';

final routes = {
  '/': (BuildContext context) => MainTabs(),
  '/home': (BuildContext context) => HomePage(),
  '/classfy': (BuildContext context) => ClassfyPage(),
  '/setting': (BuildContext context) => SettingPage(),
  '/search': (BuildContext context) => SearchPage(),
};
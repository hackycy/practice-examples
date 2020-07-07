import 'package:flutter/material.dart';


import '../page/main_tabs.dart';
import '../page/classfy.dart';
import '../page/home.dart';
import '../page/setting.dart';
import '../page/search.dart';
import '../page/detail.dart';
import '../page/appbar.dart';

final routes = {
  '/': (BuildContext context) => MainTabs(),
  '/home': (BuildContext context) => HomePage(),
  '/classfy': (BuildContext context) => ClassfyPage(),
  '/setting': (BuildContext context) => SettingPage(),
  '/search': (BuildContext context) => SearchPage(),
  '/detail': (BuildContext context) => DetailPage(),
  '/setting/appbar': (BuildContext context) => AppBarPage(),
};

/*
 * 实现命名路由传参
 */
final Route<dynamic> Function(RouteSettings) onGenerateRoute = (RouteSettings settings) {
  final String name = settings.name;
  final Function pageContentBuilder = routes[name];
  if (pageContentBuilder != null) {
    if (settings.arguments != null) {
      final Route route = MaterialPageRoute(
        builder: (context) => pageContentBuilder(context, arguments: settings.arguments)
      );
      return route;
    } else {
      final Route route = MaterialPageRoute(
        builder: (context) => pageContentBuilder(context),
      );
      return route;
    }
  }
  return null;
};
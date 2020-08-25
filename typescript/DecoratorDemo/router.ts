let router: any = {}

interface RouterOption {
  httpMethod: string;
  beforeMiddlewares: string[];
  constructorFn: Function;
  className: string;
  url: string;
}

function setRouter(url: string, option: RouterOption) {
  router[url] = router[url] || [];
  router[url].push(option);
}

export function initRouter() {
  Object.keys(router).forEach(e => {
    console.log(e);
    console.log(router[e])
  })
}

export const Get = function(url: string, ...beforeMiddlewares: string[]) {
  return function (target: any, funcName: string, descriptor: PropertyDescriptor) {
    const option = {
      httpMethod: funcName,
      beforeMiddlewares,
      constructorFn: target.constructor,
      className: target.constructor.name,
      url: url
    }
    setRouter(url, option);
  }
}

export const Post = function(url: string, ...beforeMiddlewares: string[]) {
  return function (target: any, funcName: string, descriptor: PropertyDescriptor) {
    const option = {
      httpMethod: funcName,
      beforeMiddlewares,
      constructorFn: target.constructor,
      className: target.constructor.name,
      url: url
    }
    setRouter(url, option);
  }
}

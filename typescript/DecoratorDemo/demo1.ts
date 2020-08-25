function LogClass(obj: any) {
    return function(target: any) {
        console.log('>>>>>>>> 类装饰器 start >>>>>>>>>>')
        if (typeof obj === 'string') {
            console.log(obj)
        } else if (typeof obj === 'object') {
            let { name = '' } = obj
            console.log(name)
        }
        console.log(target);
        console.log('>>>>>>>> 类装饰器 end >>>>>>>>>>')
    }
}

function LogFunction(obj: any) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('>>>>>>>> 方法装饰器 start >>>>>>>>>>')
        if (typeof obj === 'string') {
            console.log(obj)
        } else if (typeof obj === 'object') {
            let { name = '' } = obj
            console.log(name)
        }
        console.log(propertyKey)
        console.log(descriptor)
        console.log('>>>>>>>> 方法装饰器 end >>>>>>>>>>')
    }
}

function LogProperty(dv: number) {
    return function(target: any, propertyName: string) {
        console.log('>>>>>>>> 属性装饰器 start >>>>>>>>>>')
        target[propertyName] = dv
        console.log(target)
        console.log(propertyName)
        console.log(typeof target)
        console.log('>>>>>>>> 属性装饰器 end >>>>>>>>>>')
    }
}

@LogClass('cow')
class Poster{

    @LogProperty(2000)
    public static sdate: number;

    @LogProperty(1000)
    date?: number;

    @LogFunction('record something')
    write() {
        console.log('Post is Write')
    }

}

@LogClass({ name: 'cow2' })
class Article{}

let p = new Poster()
console.log(Poster.sdate)
console.log(p.date)
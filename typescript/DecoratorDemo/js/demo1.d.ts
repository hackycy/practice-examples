declare function LogClass(obj: any): (target: any) => void;
declare function LogFunction(obj: any): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare function LogProperty(dv: number): (target: any, propertyName: string) => void;
declare class Poster {
    static sdate: number;
    date?: number;
    write(): void;
}
declare class Article {
}
declare let p: Poster;
//# sourceMappingURL=demo1.d.ts.map
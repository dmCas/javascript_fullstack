declare abstract class Person {
    abstract makeSound(): void;
    move(): void;
}
declare class Child extends Person {
    makeSound(): void;
}
declare const child: Child;
declare class Baby {
    run(): void;
    private eat;
    protected sleep(): void;
}
declare class XiaoHong extends Baby {
    init(): void;
}
declare const baby: Baby;
declare const pig: XiaoHong;

// 抽象类 通常拿来定义方法 被拿来继承
abstract class Person {
 abstract makeSound(): void
 move(): void {
   console.log('roaming this earch...')
 }
}

// const person = new Person() 
class Child extends Person {
  makeSound() {
    console.log('maio maio')
  }
}

const child = new Child()
child.makeSound()

// 访问限定符

class Baby {
  public run(){
    console.log('跑起来了')
  }
  //只能在Baby中被调用
  private eat() {
    console.log('会说话了')
  }
  //只可以被类的内部及类的子类所访问
  protected sleep(){
    console.log('会唱歌了')
  }
}

class XiaoHong extends Baby{
  init(){
    this.sleep()
  }
}

const baby = new Baby()
baby.run()

const pig = new XiaoHong()
pig.init()

pig.run()

// class 可以作为接口


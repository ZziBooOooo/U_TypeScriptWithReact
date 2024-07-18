let userName = 'Max';

// ** Basic Type ** // 

// type : string 
userName = 'Max';

// type : number
let userAge = 34;

// type : boolean
let isValid = true;




// ** Union Type ** //

let userID:string | number = 'abc1';
userID = 123;
// userID = true; - error




// ** Object Type ** //

let user:{
    name: string,
    age: number,
    isAdmin: boolean,
    id: string | number
};

user={
    name: 'John',
    age: 30,
    isAdmin: true,
    id:'abc'
}
// user = 'Max' - error





// ** Array Type ** //

let hobbies:string[];

hobbies = ['reading', 'painting', 'cooking'];






// ** Function Type & Type Alias ** //

function add(a:number, b:number):number{
    const result = a + b;
    return result
}

type AddFn = (a:number, b:number)=>number;

function calculate(
    a:number,
    b:number,
    calcFn:AddFn
){
    calcFn(a,b)
}
calculate(2,5,add) // 여기서 calcFn는 add가 됨 -> add(2,5)







// ** Interface ** //
// 주로 객체 정의할 때 사용

interface Credentials {
    password: string;
    email : string;
}

let creds : Credentials;

creds = {
    password: '123456',
    email: 'john@example.com'
}

// 인터페이스 확장이 가능하다
class AuthCredentials implements Credentials {
    email: string;
    password: string;
    userName:string;
}

// login 함수는 Credentials 타입 객체를 인자로 받는다.
function login(credentials : Credentials){

}
login(new AuthCredentials()) // AuthCredentials에서 초기값을 설정하지 않았기 때문에 undefined가 나올 것






// ** Merging Types - typeAlias ** //
// & 연산자
type Admin = {
    permissions : string[]
};

type AppUser = {
    userName : string;
}

type AppAdmin = Admin & AppUser;

let admin:AppAdmin;

admin = {
    permissions:['login'],
    userName:'Max'
}


// ** Merging Types - interface ** //
// extends 키워드

interface Admin2 {
    permissions : string[]
};

interface AppUser2 {
    userName : string
    };

interface AppAdmin2 extends Admin2, AppUser2 {} 

let admin2:AppAdmin2;

admin2 = {
    permissions:['login'],
    userName:'Max'
} 




// ** literal Types ** //

let role: 'admin' | 'user' | 'editor'; // 'admin' or 'user' or 'editor'

role = 'admin';
// role = 'abc'; - error





// ** Type Guards ** //
// 커스텀 타입이나 인터페이스는 아래 형식처럼 사용할 수 없다.

type Role = 'admin' | 'user' | 'editor';

let role2 : Role;

function performAction(action:string | number, role:Role){ // 함수 인자 role은 위의 리터럴타입의 role과 다르다. 그냥 이름일 뿐!
    if(role === 'admin' && typeof action === 'string'){
        // ...
    }
}




// ** Generic Type ** //
// 제네릭은 특정 타입을 미리 정의하지 않고 사용시점에 타입을 지정하는 기법

let roles : Array<Role>;
roles = ['admin', 'editor'];

type DataStroage<T> = {
    storage : T[];
    add: (data: T) => void;
};

// T가 string이 된것 -> storage는 문자열배열, data는 문자열이 될 것이다.
const textStorage: DataStroage<string> ={
    storage : [],
    add(data){
        this.storage.push(data);
    }
}

function merge<T, U>(a: T, b: U){
    return {
        ...a,
        ...b
    };
}

const newUser = merge({name:'Max'},{age:34});
